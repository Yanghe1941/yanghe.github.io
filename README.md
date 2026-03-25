# RJ Young Personal Website

A modern personal website deployed with GitHub Pages.

## Files

- `index.html` — main landing page
- `styles.css` — visual design and responsive layout
- `script.js` — navigation, language toggle, and scroll reveal behavior
- `CNAME` — custom domain binding for GitHub Pages
- `.nojekyll` — disables Jekyll processing on GitHub Pages

## Deployment notes

If the custom domain does not open immediately, check the following:

1. **GitHub Pages is enabled** for this repository.
2. **Custom domain** in repository settings is set to `yanghe.moodex.cc`.
3. **DNS records** at the registrar point `yanghe.moodex.cc` to GitHub Pages.
   - For a subdomain, use a **CNAME** record pointing to `yanghe1941.github.io`.
4. Wait for DNS and HTTPS provisioning to finish. This can take a few minutes to a few hours.

## Local preview

Open `index.html` directly in a browser or serve the folder with a static server.
