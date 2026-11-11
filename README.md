# Ameen Nizar / zeekaedits

Original static portfolio with Three.js primitive scenes, Anime.js, Swiper, custom CSS and vanilla JavaScript. No framework, build step or package manager is required.

## Run locally

From this folder:

```powershell
python -m http.server 4174 --directory dist
```

Open http://localhost:4174. Use an HTTP server rather than opening index.html directly because JavaScript modules require HTTP.

## Folder structure

```text
zeeka/
  .openai/hosting.json       Sites identity and static output
  dist/
    index.html              Page structure and SEO
    style.css               Design tokens and responsive layout
    content.js              Editable skills/projects/links/journey/media
    app.js                  Rendering and interactions
    scene.js                Original Three.js geometry and scroll response
    assets/
      Ameen_Nizar_CV.pdf
      favicon.svg
      social-card.png
    vendor/                 Pinned libraries and their licences
  README.md
  THIRD_PARTY.md
  netlify.toml
  vercel.json
```

## Edit content and assets

Edit `dist/content.js`. Social and project URLs currently use null and display honest inactive labels. Replace null with your HTTPS URL. The CV path, email and approved WhatsApp number are already configured. Replace the PDF at the same path to update your CV.

Replace the demo film records with real title, role, tools, caption and url values. YouTube watch/short links and Vimeo numeric URLs become lazy-loaded embeds. Direct .mp4/.webm URLs become native players; other URLs become external watch links. Demo graphics are explicitly labelled and do not claim to be actual work. For videos hosted locally, put them in dist/assets and set url to ./assets/filename.mp4. Use compressed web video and retain a separate full-resolution master.

Journey entries have completed/in-progress/upcoming labels. No historical completion dates were invented. The learning log starts with the progress confirmed on 11 November 2026; add dated entries to the log array. Deep learning/RAG projects are completed, while deeper study remains upcoming.

Brand colours, widths and font families are at the beginning of style.css. Font files are served through Google Fonts. The gear is an original stylised illustration, not exact Sony/DJI product CAD. No 3D models or texture downloads are necessary.

## Deploy to Netlify

Import this folder as a Git repository. Leave the build command empty and set publish directory to `dist` (also configured in netlify.toml). Alternatively upload dist through Netlify's manual deployment flow. Add a custom domain in the site's domain settings, then apply the DNS records Netlify supplies at your domain registrar and wait for HTTPS provisioning.

## Deploy to Vercel

Import the repository, choose Other, leave build/install commands empty and set output directory to `dist`. vercel.json supplies the static configuration. Add your domain in project domain settings, then apply the exact DNS records shown by Vercel. Do not guess DNS values.

After changing hosting, update og:url and og:image in dist/index.html to the final public origin. A private Sites deployment cannot provide public social previews. The domain must be owned/connected separately; no domain has been purchased or configured.

## Accessibility and performance

- Semantic sections, visible keyboard focus, skip link, disclosure controls, carousel labels and clipboard status.
- Reduced-motion mode disables animated reveals, autoplay and WebGL; CSS illustrations remain.
- Data-saving/low-memory devices use CSS illustrations. Mobile uses lower geometry and pixel ratio.
- Three.js loads after the initial content; gear loads near the viewport. Rendering pauses offscreen and when the tab is hidden.
- Models use primitives without textures. Videos load only when real URLs are supplied.
- Lighthouse 90+ is a target, not a measured result. Browser rendering and syntax were checked; a Lighthouse audit remains required before claiming a score.

## Differences from the reference

The reference has no 3D. This version adds original Three.js scenes with the user's approval and retains its purple/dark palette, Montserrat/Unbounded typography, glow treatment, rounded project cards and carousel concept. Layout is adapted for tech-first/media-second content; this is not a pixel-identical copy. No author portraits, screenshots, text or app source are reused.

Native IntersectionObserver replaces ScrollReveal to avoid its unresolved proprietary-use licensing requirement. Anime.js and Swiper are retained. Reveals run once, hero text is not endlessly cycled, and the carousel rewinds rather than using an insufficient-slide infinite loop. The preloader is a brief intro with a timed exit, not a false asset percentage. Portrait is replaced by original 3D. Social/project links and reels remain user-approved demo slots.


## Expanded media section

The screening-room carousel is in media.js/media.css. It supports previous/next, thumbnail selection, arrow keys and horizontal touch swipes. There is no autoplay between works. Only one player is mounted, so changing work stops the previous video. Supported players: YouTube (including Shorts), Vimeo numeric links, MP4 and WebM. Other links open on their original site.

Edit `films` in content.js: title, category, format, role, tools, caption, story, url and optional poster. Set real url and poster values to replace the labelled demo illustration. Film descriptions and attribution should describe your actual contribution. `mediaCraft`, `mediaProcess`, `mediaToolDetails`, `mediaIntro` and `gearDetails` control the expanded editorial content.
