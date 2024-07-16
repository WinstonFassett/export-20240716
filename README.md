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

✓ 13 modules transformed.

[vite:dts] Start generate declaration files...
dist/style.css      41.65 kB │ gzip:  7.04 kB
dist/spliffy-ui.js  67.65 kB │ gzip: 12.74 kB
[vite:dts] Declaration files built in 877ms.

dist/style.css           41.65 kB │ gzip: 7.04 kB
dist/spliffy-ui.umd.cjs  27.16 kB │ gzip: 8.99 kB
✓ built in 1.48s

> spliffy-ui@0.0.0 build:demo
> vite build --config vite.config.app.js

vite v5.3.3 building for production...

(!) outDir /Users/winston/dev/interviews/nabis-ui/dist/app is not inside project root and will not be emptied.
Use --emptyOutDir to override.

transforming (2) ../vite/modulepreload-polyfill.js
warn - The `purge`/`content` options have changed in Tailwind CSS v3.0.
warn - Update your configuration file to eliminate this warning.
warn - https://tailwindcss.com/docs/upgrade-guide#configure-content-sources

🌼   daisyUI 4.12.10
├─ ✔︎ 2 themes added             https://daisyui.com/docs/themes
╰─ ❤︎ Support daisyUI project:   https://opencollective.com/daisyui

transforming (217) ../node_modules/react-feather/dist/icons/plus-circle.js
🌼   daisyUI 4.12.10
├─ ✔︎ 2 themes added             https://daisyui.com/docs/themes
╰─ ★ Star daisyUI on GitHub     https://github.com/saadeghi/daisyui

✓ 339 modules transformed.
../dist/app/index.html                   0.71 kB │ gzip:  0.39 kB
../dist/app/assets/index-BEU-B_iV.css   42.12 kB │ gzip:  7.21 kB
../dist/app/assets/index-1eo0KjJP.js   179.38 kB │ gzip: 56.54 kB
✓ built in 1.10s
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

