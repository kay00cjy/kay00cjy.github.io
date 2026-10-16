# Kaylie Chen - Portfolio

A static portfolio for GitHub Pages. Open index.html locally or use a static web server; no build step is required.

## Pages and assets

- index.html: introduction, portrait, work experience, and separate design-team projects.
- work.html: Kardium, Sentact, and TruMotion case studies.
- bionics.html and igem.html: design-team case studies.
- about.html: personal story and interests.
- shared.css and home.css: shared and homepage styles.
- assets/kaylie-chen.jpg: optimized profile photo.
- assets/Kaylie-Chen-Resume.pdf: public resume linked throughout the portfolio.

The coursework card has been removed. coursework.html remains as an unlinked legacy page.

## Content still to add

Search for `editor-note` in the HTML to find the yellow notes:

- work.html: shareable project images, a Kardium study outcome, Sentact defect-measurement context, and any measured TruMotion alignment/backlash results.
- bionics.html: arm/wrist photos, prototype comparisons, and measured mechanism results.
- igem.html: confirm role dates, competition year, Gold Medal attribution, and add project images/results. These details came from the previous portfolio and were not in the new resume.

Replace or remove each yellow note after supplying its content. No cover letters are included in the website assets.

## Publishing

Commit and push the updated HTML, CSS, and assets directory to the existing GitHub Pages repository. Keep the resume at the linked asset path when replacing it.

## Verification

Checked local links, asset files, anchor targets, and duplicate IDs. Chrome checks at desktop (1440px) and mobile (390px) cover the main pages, image loading, horizontal overflow, navigation anchors, and the hero scroll link.

## Experience navigation

Homepage cards open individual native dialogs with a blurred backdrop, keyboard focus containment, Escape to close, and focus restoration. Ctrl/Cmd-click or disabled JavaScript opens a standalone page. Work pages: kardium.html, sentact.html, trumotion.html. Team pages: bionics.html, igem.html. Popup content is stored in the case-* templates in index.html; update those along with standalone pages when editing details.

Company description reference: https://kardium.com/about/
