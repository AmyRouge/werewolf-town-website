# Werewolf Town — marketing website

Plain static HTML/CSS/JS. No build step, no dependencies.

```
website/
  index.html     landing page (hero, how it plays, features, roles, roadmap)
  support.html   help, reporting, account deletion route
  privacy.html   privacy policy (draft — review before store submission)
  style.css
  site.js        sets the contact email (edit CONTACT_EMAIL here)
  assets/        icon + favicon (copied from assets-source / apps/mobile/assets)
```

## Preview locally

```bash
npx serve website        # or: python -m http.server -d website 8080
```

## Deploy to `https://werewolftown.mtxgames.lk/`

All links are relative, so the folder can be uploaded to the root of any static host as-is:

- **Render**: New → Static Site, root directory `website`, no build command, publish directory `.`
- **Cloudflare Pages / Netlify / GitHub Pages**: point at the `website` folder.

Then add the subdomain in the host's custom-domain settings and create a `CNAME` record for it in the `mtxgames.lk` DNS, pointing at the host's target.

## Before launch

- `CONTACT_EMAIL` in `site.js` — currently the repo author's address; swap for the studio's support inbox.
- Android / App Store buttons: add them to `index.html` hero once the store listings exist (the page currently links to the browser build at `https://fangs-torches.onrender.com`).
- Add real screenshots (see `docs/STORE_LISTING.md` checklist) to the Features section.
- Have `privacy.html` reviewed; then use its URL and `support.html` as the store listing's Privacy Policy and Support URLs.
