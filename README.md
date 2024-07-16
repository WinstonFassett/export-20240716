# Spliffy UI - DaisyUI Experiment

This repo explores the creation of a reusable React component library and design system based on DaisyUI and TailwindCSS. 


## Recent Bundle Stats

```
❯ npm run build     

> spliffy-ui@0.0.0 build
> npm run build:lib && npm run build:demo


> spliffy-ui@0.0.0 build:lib
> vite build --config vite.config.lib.js

vite v5.3.3 building for production...
transforming (1) src/index.ts
warn - The `purge`/`content` options have changed in Tailwind CSS v3.0.
warn - Update your configuration file to eliminate this warning.
warn - https://tailwindcss.com/docs/upgrade-guide#configure-content-sources

🌼   daisyUI 4.12.10
├─ ✔︎ 2 themes added             https://daisyui.com/docs/themes
╰─ ❤︎ Support daisyUI project:   https://opencollective.com/daisyui

✓ 7 modules transformed.

[vite:dts] Start generate declaration files...
dist/style.css       15.71 kB │ gzip:  3.78 kB
dist/spliffy-ui.js  121.32 kB │ gzip: 23.07 kB
[vite:dts] Declaration files built in 726ms.

dist/style.css           15.71 kB │ gzip:  3.78 kB
dist/spliffy-ui.umd.cjs  66.32 kB │ gzip: 18.10 kB
✓ built in 1.14s

> spliffy-ui@0.0.0 build:demo
> vite build --config vite.config.app.js

vite v5.3.3 building for production...
transforming (3) src/main.tsx
warn - The `purge`/`content` options have changed in Tailwind CSS v3.0.
warn - Update your configuration file to eliminate this warning.
warn - https://tailwindcss.com/docs/upgrade-guide#configure-content-sources

🌼   daisyUI 4.12.10
├─ ✔︎ 2 themes added             https://daisyui.com/docs/themes
╰─ ★ Star daisyUI on GitHub     https://github.com/saadeghi/daisyui

transforming (222) ../node_modules/react-feather/dist/icons/pocket.js
🌼   daisyUI 4.12.10
├─ ✔︎ 2 themes added             https://daisyui.com/docs/themes
╰─ ★ Star daisyUI on GitHub     https://github.com/saadeghi/daisyui

✓ 335 modules transformed.
dist/app/index.html                   0.71 kB │ gzip:   0.39 kB
dist/app/assets/index-DEp6BnYb.css   16.18 kB │ gzip:   3.98 kB
dist/app/assets/index-G1L79Y8B.js   353.30 kB │ gzip: 118.70 kB
✓ built in 1.04s
```

## Development

To start the Storybook development server and preview the components, run the following command:

```sh
npm run storybook
```


To start the development server and preview the demo app, run the following command:

```sh
npm run dev
```


This will start the development server and open a preview in your browser.

## Build

To build the library and demo for production, run the following command:

```sh
npm run build
```

This will generate the optimized production-ready files in the `dist` directory.

