# dev-portfolio

Personal developer portfolio for [dev.zdelar.com](https://dev.zdelar.com).

Built with Nuxt 3, Vue 3, TypeScript, and Tailwind CSS. Generates a fully static site.

## Development

```bash
npm install
npm run dev
```

## Build (static generation)

```bash
npm run generate
```

Output is written to `.output/public/`. Deploy this directory to any static host (S3, Netlify, Cloudflare Pages, etc.).

## Preview generated site

```bash
npm run preview
```

## Configuration

- **Contact email**: Edit `CONTACT_EMAIL` in `utils/config.ts`
- **Site URL**: Edit `SITE_URL` in `utils/config.ts`
