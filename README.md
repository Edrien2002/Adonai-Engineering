# Adonai Engineering — Website

A 4-page static site. Each page is fully self-contained: its own HTML, CSS
and JS file, all sharing the same name. Nothing is shared between pages, so
you can open, edit, or hand off any single page without touching the
others. No build tools needed — open any `.html` file in a browser, or
upload the whole folder to a web host.

## Folder structure

```
adonai-website/
├── index.html      index.css      index.js
├── about.html      about.css      about.js
├── projects.html   projects.css   projects.js   ⭐ project data lives here
├── contact.html    contact.css    contact.js
└── images/
    ├── logo-mark.png     Logo used in the nav and footer
    ├── logo-banner.jpg   Original banner artwork
    └── projects/         ⭐ Put your project photos here
```

Each `.css` file is a full, independent stylesheet (nav, footer, buttons,
type system, the works) — every page only ever loads its own file. Each
`.js` file likewise handles its own nav toggle and scroll animation, plus
whatever that page needs on top (the project gallery on `projects.html`,
the enquiry form on `contact.html`).

## Adding a project photo

1. Save the photo into `images/projects/` — use a short filename, e.g.
   `images/projects/kololo-residence.jpg`.
2. Open `projects.js` and find the `PROJECTS` array near the top. Add a
   new entry:

```js
{
  id: "p7",
  title: "Your Project Name",
  category: "Construction",          // must match a filter button exactly:
                                      // Construction, Architectural,
                                      // Interior & Exterior, Surveying,
                                      // Electrical & Plumbing
  location: "Town, District",
  year: "2026",
  description: "One short sentence about the job.",
  image: "images/projects/your-photo.jpg"
}
```

3. Save the file and refresh `projects.html` — the gallery and filters
   update automatically.

If a photo file is missing, the card automatically shows a "Photo coming
soon" placeholder instead of a broken image, so it's safe to write the data
entry before the photo is ready.

The "Recent work" preview on the home page (`index.html`) shows the same
first three projects, but as static HTML rather than pulling from
`projects.js` — since every page is self-contained, update that markup by
hand too if you change those three.

## Contact form

The form has no backend — submitting it opens the visitor's email app with
the enquiry pre-filled (see `contact.js`). To collect submissions directly
(into an inbox, spreadsheet or CRM) without the visitor's email app
opening, connect the form to a service like Formspree or Getform, or swap
the logic in `contact.js` for a `fetch()` call to your own backend.

## Editing contact details

Phone numbers, WhatsApp link and email appear in the footer of every page
and on `contact.html`. Since each page is independent, update these in
each file individually:
- `0745649703` / `0750722794` (phone numbers)
- `info@adonaiengineering.co.ug` (email — currently a placeholder)

## Fonts

Space Grotesk (headings), Inter (body) and JetBrains Mono (labels/captions)
load from Google Fonts via the `<link>` tags in each page's `<head>`. An
internet connection is required for them to render; without one, the
browser falls back to system fonts.
