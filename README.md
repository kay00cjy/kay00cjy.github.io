# Kaylie Chen — Portfolio Website

A personal portfolio website for **Kaylie Chen**, Biomedical Engineering student at UBC with a mechanical specialization.

## 🌸 How to Deploy on GitHub Pages

1. **Create a new GitHub repository** named `username.github.io` (replace `username` with your GitHub username) — this makes it your main GitHub Pages site, accessible at `https://username.github.io`
   - OR name it anything (e.g. `portfolio`) and it will live at `https://username.github.io/portfolio`

2. **Upload all files** from this folder to the root of the repository:
   - `index.html`
   - `about.html`
   - `bionics.html`
   - `igem.html`
   - `work.html`
   - `coursework.html`
   - `shared.css`
   - `README.md`

3. **Go to your repository Settings → Pages**
   - Under "Source", select **Deploy from a branch**
   - Choose **main** branch, **/ (root)** folder
   - Click Save

4. **Your site will be live** at `https://username.github.io` within a few minutes! ✨

---

## 📁 File Structure

```
/
├── index.html         ← Main landing page (hero + about preview + project cards)
├── about.html         ← Full about/personality page
├── bionics.html       ← UBC Bionic Hand project page
├── igem.html          ← UBC iGEM project page
├── work.html          ← Work experience (TruMotion + Sentact)
├── coursework.html    ← Academic coursework, tools, certifications
├── shared.css         ← Shared styles across all inner pages
└── README.md          ← This file
```

---

## 🖼️ Adding Your Photos

All pages have placeholder boxes labelled "Add photo: [description]". To replace them:

1. Add your image files to the repo (e.g. `images/bionics-arm.jpg`)
2. Find the `<div class="photo-placeholder">` elements in the HTML
3. Replace with:
```html
<div class="photo-placeholder" style="background: none; padding: 0; overflow: hidden;">
  <img src="images/your-photo.jpg" alt="Description" style="width: 100%; height: 100%; object-fit: cover; border-radius: 16px;">
</div>
```

---

## ✏️ Personalizing Content

- **About page**: Fill in your own story in `about.html` — there are placeholder notes showing exactly where
- **Coursework**: Add your actual UBC course codes/names in `coursework.html`
- **Profile photo**: Replace the blob placeholder on `index.html` and `about.html`
- **Colors**: All colors are CSS variables in `:root` in each file (and `shared.css`) — easy to change

---

## 🎨 Design

- **Palette**: Warm off-white (#fdf8f5), dusty rose, soft pinks
- **Fonts**: Cormorant Garamond (display/headings) + DM Sans (body) — loaded from Google Fonts
- **Vibe**: Modern, artsy, slightly editorial, minimalist-feminine, professional

---

*Built with plain HTML, CSS, and vanilla JS — no frameworks, no build step. Just upload and it works.*
