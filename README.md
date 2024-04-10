template from https://portfolio-tailwind.preview.uideck.com/demos/personal/
admin CMS: https://github.com/sveltia/sveltia-cms
admin auth: https://github.com/sveltia/sveltia-cms-auth
hosting: Netlify

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |


## 👀 Want to learn more?

Feel free to check [the Astro documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).


## Deployment

This project is deployed to Netlify. The site is built and deployed automatically when a commit is pushed to the `master` branch.
Any PR that is opened will also be deployed to a preview URL.

## Add new portfolio item

- add item in `/src/data/projects.json`
- add detail page in FR and EN in `/src/data/portfolio/en` and `/src/data/portfolio/fr`
- add images in `/public/images/portfolio/`: intro.jpg (236*136), 1_med.jpg, 1_small.jpg (x*200px), etc...