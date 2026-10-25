"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Send, TriangleAlert } from "lucide-react";
import { profile } from "@/data/portfolio";

type Status = "idle" | "sending" | "success" | "error";

const field =
  "w-full rounded-xl border border-line bg-surface px-4 py-3 text-base text-ink placeholder:text-muted/60 transition-colors focus:border-accent focus:outline-none";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    setMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate={false}>
      {/* Honeypot: real users never see or fill this. */}
      <div className="hidden" aria-hidden>
        <label>
          Leave empty
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
            Name
          </label>
          <input id="name" name="name" required maxLength={100} autoComplete="name" className={field} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
            Email
          </label>
          <input id="email" name="email" type="email" required maxLength={200} autoComplete="email" className={field} placeholder="you@example.com" />
        </div>
      </div>
      <div>
        <label htmlFor="msg" className="mb-1.5 block text-sm font-medium">
          Message
        </label>
        <textarea id="msg" name="message" required minLength={10} maxLength={3000} rows={5} className={field} placeholder="How can I help?" />
      </div>

      <button type="submit" disabled={status === "sending"} className="btn-primary w-full disabled:opacity-60 sm:w-auto">
        {status === "sending" ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending…
          </>
        ) : (
          <>
            Send Message <Send size={16} />
          </>
        )}
      </button>

      <div aria-live="polite" role="status">
        {status === "success" && (
          <p className="flex items-center gap-2 rounded-xl border border-accent/30 bg-accent/10 px-4 py-3 text-sm text-accent">
            <CheckCircle2 size={16} /> Thanks! Your message was sent. I&apos;ll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="flex items-start gap-2 rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300">
            <TriangleAlert size={16} className="mt-0.5 shrink-0" />
            <span>
              {message} You can also email me directly at{" "}
              <a className="underline" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              .
            </span>
          </p>
        )}
      </div>
    </form>
  );
}
