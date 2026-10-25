# Yash Pethkar | Developer Portfolio

Personal portfolio built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion and Lucide icons. Deployed on Vercel.

Repository: https://github.com/yash-pethkar18/Portfolio

## Editing content

All content (name, links, skills, projects, experience, education, achievements) lives in **`src/data/portfolio.ts`**. Edit that file instead of the components.

| What | Where |
| --- | --- |
| GitHub / LinkedIn URLs | `profile.github`, `profile.linkedin` (hidden while `null`) |
| Project links | `projects[].liveUrl`, `projects[].githubUrl` (hidden while `null`) |
| Resume | `public/resume.pdf`, shown when `profile.resumeAvailable` is `true` |

To replace the resume, overwrite `public/resume.pdf` with the new file and keep the same name. Note that the file is publicly downloadable.

## Run locally

Requires Node.js 18.18 or newer (LTS recommended).

```bash
npm install
copy .env.example .env.local      # Windows PowerShell (macOS/Linux: cp)
npm run dev                       # http://localhost:3000, stop with Ctrl + C
```

Production check:

```bash
npm run typecheck
npm run lint
npm run build
npm run start
```

Do not run `npm run dev` and `npm run build` at the same time.

## Environment variables

Set these in `.env.local` locally and in Vercel under Settings > Environment Variables. Never commit `.env.local`.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Public site URL, used for metadata, sitemap and robots.txt |
| `RESEND_API_KEY` | Resend API key (server-side only) |
| `CONTACT_TO_EMAIL` | Where contact messages are delivered |
| `CONTACT_FROM_EMAIL` | Sender address. `onboarding@resend.dev` is for testing |

### Contact form (Resend)

The form posts to `/api/contact`, which sends email through [Resend](https://resend.com).

1. Sign up at resend.com with the same email as `CONTACT_TO_EMAIL`.
2. Open **API Keys > Create API Key**, name it `portfolio`, choose **Sending access**, and copy the `re_...` key (shown once).
3. Add it as `RESEND_API_KEY`.

With the test sender `onboarding@resend.dev`, Resend only delivers to your own account email. To send to other addresses, verify a domain you own in Resend and use an address on it.

If `RESEND_API_KEY` is missing, the form shows an error with your email as a fallback. It never reports a message as sent when it was not.

## Deploy

### 1. Push to GitHub

```bash
git add .
git commit -m "Describe your change"
git push
```

### 2. Vercel

1. Log in to vercel.com with GitHub.
2. **Add New > Project**, import this repository.
3. Keep the detected Next.js settings.
4. Add the four environment variables above.
5. Click **Deploy**.
6. After the first deploy, set `NEXT_PUBLIC_SITE_URL` to your real URL (including `https://`) and redeploy.

Every later `git push` to `main` redeploys automatically.

### 3. Verify the live site

- All sections load, and the mobile menu works on a phone.
- The Live Demo link opens.
- The resume download works.
- A test message through the contact form arrives in your inbox (check spam too).

## Project structure

```
src/
  app/          layout, page, API route (contact), robots, sitemap, icon
  components/   Navbar, Hero, About, Skills, Projects, Experience, Achievements, Contact, Footer
  data/         portfolio.ts (all content)
public/         resume.pdf
```

## Notes

- **Social preview image:** not generated. Next's built-in image generator failed to build on Windows. To add one, put a 1200x630 `og.png` in `public/` and reference it in the `openGraph.images` field in `src/app/layout.tsx`.
- **Dependency audit:** `npm audit` reports advisories against Next.js 14. The patched line is Next 16, which is a breaking upgrade (React 19, new ESLint setup). Plan this as a separate change and confirm the build before deploying.
- **Render demo:** the project demo is hosted on Render's free tier, so the first load after idle time can take around a minute.
