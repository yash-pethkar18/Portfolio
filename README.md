# Yash Pethkar | Developer Portfolio

Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion + Lucide icons. Built to deploy on Vercel.

## Edit your content

Everything (name, links, skills, projects, experience, achievements) lives in **`src/data/portfolio.ts`**.

Things you still need to fill in:

| What | Where | Notes |
| --- | --- | --- |
| GitHub URL | `profile.github` | Hidden until set |
| LinkedIn URL | `profile.linkedin` | Hidden until set |
| Project source link | `projects[0].githubUrl` | Hidden until set |
| Resume PDF | put it at `public/resume.pdf`, then set `profile.resumeAvailable = true` | The download buttons only appear when this is true |

## Run locally

```bash
npm install          # install dependencies and create package-lock.json
cp .env.example .env.local   # then edit values (see below)
npm run dev          # http://localhost:3000
```

Test on a phone: run `npm run dev -- -H 0.0.0.0` and open `http://<your-computer-ip>:3000` on the same Wi-Fi. Also check with browser dev tools at 320, 375, 390, 768, 1024 and 1440 px.

## Production check

```bash
npm run typecheck
npm run lint
npm run build
npm run start        # serves the production build locally
```

## Contact form (Resend)

The form posts to `/api/contact`, which sends email through [Resend](https://resend.com) using server-side environment variables. No keys are exposed to the browser.

1. Create a free Resend account and an API key.
2. Set these in `.env.local` (and later in Vercel):

```
RESEND_API_KEY=re_xxx
CONTACT_TO_EMAIL=yashpethkar77@gmail.com
CONTACT_FROM_EMAIL=onboarding@resend.dev
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

`onboarding@resend.dev` works for testing (Resend only delivers it to your own account email). For production, verify your own domain in Resend and use an address on it.

Until `RESEND_API_KEY` is set, the form shows an error message with your email address as a fallback. It never pretends a message was sent.

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

Create the empty repository on github.com first. Commit `package-lock.json`.

## Deploy on Vercel

1. Go to vercel.com, sign in with GitHub, click **Add New... > Project**, and import the repository.
2. Framework preset is detected automatically (Next.js). Leave build settings as default.
3. Under **Environment Variables**, add the four variables above.
4. Click **Deploy**.
5. Open the production URL and verify: all sections, mobile menu, resume download, and a test contact-form submission.
6. Update `NEXT_PUBLIC_SITE_URL` to the final URL (or your custom domain) and redeploy so the sitemap and Open Graph tags are correct.

## Project structure

```
src/
  app/            layout, page, API route, robots, sitemap, icon, OG image
  components/     Navbar, Hero, About, Skills, Projects, Experience, Achievements, Contact, Footer
  data/           portfolio.ts (all content)
public/           place resume.pdf here
```
