# Dr. Sivarathri Ashok Kumar — Robotics Research Portfolio

A modern one-page, responsive personal academic and professional website, created from the supplied CV.

**Tech stack:** HTML + CSS + JavaScript only. No npm, Node.js, frameworks, subscriptions, or build steps are required.

## Files

```text
ashok-robotics-portfolio/
├── index.html             Main webpage: headings, experience, research, projects, contact
├── styles.css             Colors, layout, typography, mobile responsiveness
├── script.js              Publication data, filtering/search, mobile menu
├── assets/
│   ├── profile.jpg         Profile photo extracted from your uploaded CV
│   └── favicon.svg         Small website icon
├── .nojekyll              Allows simple static hosting on GitHub Pages
└── README.md              Setup and editing instructions
```

## Step 1 — Open in Visual Studio Code (Windows)

1. Extract the ZIP file somewhere convenient, e.g. `Documents\ashok-robotics-portfolio`.
2. Launch **Visual Studio Code**.
3. Click **File → Open Folder...** and select the extracted `ashok-robotics-portfolio` folder.
4. From the left Explorer panel, open `index.html`, `styles.css`, or `script.js` to inspect and edit.

## Step 2 — See your website locally

**Easiest method:** In Windows File Explorer, open your project folder and double-click `index.html`. It will open in your default browser. After editing and saving (Ctrl+S) in VS Code, refresh your browser (Ctrl+R).

**Optional live preview:** In VS Code, right-click `index.html` and choose **Open in Integrated Browser** if that option is available in your installed version. Or install a trusted local preview extension such as Live Server, open `index.html`, and choose **Open with Live Server**.

No additional dependencies or terminal commands are needed for this project.

## Step 3 — Personalize the content

- **Name, biography, experience, research, teaching, contact:** edit `index.html`.
- **New publication:** open `script.js`, find `const publications = [ ... ]` and add another entry, following the examples. Update the displayed publication counts in `index.html` (currently 18 total, 7 journals, 11 conferences).
- **Real publisher paper links:** add `url: 'https://...'` to a publication entry. Without `url`, the button searches Google Scholar by paper title; it does not claim to be a verified direct DOI link.
- **Photo:** replace `assets/profile.jpg` with another image using the same filename. Ideally use a higher-resolution professional photo.
- **Colors/fonts/layout:** change variables at the beginning of `styles.css` under `:root`.
- **Projects:** replace the illustrative inline SVG diagrams in `index.html` with your own project photos or videos. Until then, project graphics are conceptual illustrations, not real hardware photographs.
- **Optional profiles:** add your real LinkedIn/GitHub URLs to the contact section after confirming them.

## Step 4 — Publish free using GitHub Pages

1. Create or sign into a GitHub account at `https://github.com/`.
2. Create a new **public** repository named `<your-github-username>.github.io`. Replace the placeholder with your exact username.
3. Upload the files *inside* the extracted project folder (not the surrounding parent folder). `index.html` must be at the repository root. Preserve the `assets` subfolder.
4. Commit/upload the files to the `main` branch.
5. In the repository, select **Settings → Pages**.
6. Under **Build and deployment**, choose **Deploy from a branch**. Select `main` and `/(root)`, then click **Save**.
7. Visit `https://<your-github-username>.github.io/`. Publishing may take several minutes.

This is a static HTML site, so GitHub Pages can host it without a server or backend.

Official guide: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Privacy and accuracy checklist before publishing

- This starter includes the portrait from the CV and the **personal Gmail contact address** given there. Confirm you are comfortable putting both on a public website.
- It intentionally **does not include** your parents' names, date of birth, phone numbers, grades, references' contact details, or original private CV file.
- Research content, project descriptions, counts, dates, publication metadata and any employer descriptions should be reviewed before making the site public. The CV contained a conference-year inconsistency for one ICARA entry; the starter uses the stated event date in 2023.
- Links labeled **Find paper** open Scholar searches; for a trustworthy scholarly portfolio, replace these with verified direct DOI/article links.
- The three project visuals are original **conceptual** SVG illustrations rather than images of your actual robots.

## Good next additions

- Verified article and DOI links; Google Scholar / ORCID / GitHub / LinkedIn profiles.
- Actual images or demo videos for the UAV–UGV platform and 4WISD robot.
- A public-safe downloadable PDF CV without sensitive personal details.
- Recent project milestones, awards, thesis link, research group affiliations and talks.
