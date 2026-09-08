# ESW UNB Website

Website for **Engineers for a Sustainable World – University of New Brunswick**,
a chapter of the international non-profit [Engineers for a Sustainable World](https://www.eswglobal.org).

Static site (plain HTML/CSS/JS) hosted on GitHub Pages.

## Pages
- `index.html` — Home (about + projects preview + team photo hero)
- `projects.html` — Projects & initiatives (ongoing / completed / discontinued)
- `team.html` — Executive team (add names, bios, photos)
- `contact.html` — Email, socials, and link to ESW National

## Editing content
Everything you'll want to change has a comment above it in the HTML.

- **Projects:** copy a `<article class="project">` block in `projects.html`.
  Set `data-status="ongoing|completed|discontinued"` and match the `<span class="tag">`.
- **Team photos:** replace `<div class="member__photo">Insert photo</div>`
  with `<img src="assets/yourphoto.jpg" alt="Name" />` and drop the file in `assets/`.
- **Email / socials:** update the links in `contact.html`.

## Brand
Colours, fonts (League Gothic + Source Sans 3), and usage rules follow the
ESW National Branding Guide. Tokens live at the top of `styles.css`.

## Local preview
Open `index.html` in a browser, or run a local server:
```
python3 -m http.server 8000
```
then visit http://localhost:8000
