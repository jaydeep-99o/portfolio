# Jaydeep Gujar | Portfolio

Personal portfolio for Jaydeep Gujar, a DevOps-focused engineer building, shipping and running production apps on AWS.

Built with Next.js 14 (App Router), Tailwind CSS, GSAP (ScrollTrigger), Framer Motion, React Spring and Lenis smooth scroll. Light and dark themes.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing content

Every personal detail lives in [`data/site.js`](data/site.js): profile links, hero text, about copy, experience, projects, contact text and media paths. Components read from that file, so you rarely need to touch them.

### Swapping in real media

Drop files into `public/` and update the `MEDIA` block in `data/site.js`:

| Key          | What it is                                   | Suggested size            |
| ------------ | -------------------------------------------- | ------------------------- |
| `avatar`     | Round logo in navbar and loading screen      | Square, 400×400 or larger |
| `portrait`   | About section photo (shown in black & white) | 3:4, 900×1200 or larger   |
| `heroVideo`  | Hero talking video (null shows the poster)   | 16:9 MP4, under 5 MB      |
| `heroPoster` | Still shown before the video plays           | 16:9                      |
| `favicon`    | Browser tab icon                             | Square                    |

## CI/CD

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds every push and pull request to `main`. Pushes to `main` then deploy to Vercel production with the Vercel CLI (`vercel pull` → `vercel build --prod` → `vercel deploy --prebuilt --prod`). Vercel's own Git deployments are disabled in [`vercel.json`](vercel.json), so GitHub Actions is the only way code reaches production.

Required repository secrets:

| Secret              | Where to get it                                               |
| ------------------- | ------------------------------------------------------------- |
| `VERCEL_TOKEN`      | https://vercel.com/account/tokens                             |
| `VERCEL_ORG_ID`     | `orgId` in `.vercel/project.json` after running `vercel link` |
| `VERCEL_PROJECT_ID` | `projectId` in the same file                                  |

## Credits

Based on the open-source video portfolio template by Mostafa Tarif, adapted via [devendharoff/video-portfolio](https://github.com/devendharoff/video-portfolio). MIT licensed, see [LICENSE](LICENSE).
