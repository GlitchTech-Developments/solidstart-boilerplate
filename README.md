# SolidStart - Template/Boilerplate

<p>
<img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
<a href="#" target="_blank">
    <img alt="License: UNLICENCED" src="https://img.shields.io/badge/License-UNLICENCED-yellow.svg" />
</a>
<a href="https://github.com/GlitchTech-Developments/solidstart-boilerplate/actions/workflows/workspace-ci.yml">
    <img src="https://github.com/GlitchTech-Developments/solidstart-boilerplate/actions/workflows/workspace-ci.yml/badge.svg?branch=main"/>
</a>
</p>

Everything you need to build a Solid project, powered by [`solid-start`](https://start.solidjs.com);

## Creating a project

```bash
# create a new project in the current directory
npm init solid@latest

# create a new project in my-app
npm init solid@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Solid apps are built with _adapters_, which optimise your project for deployment to different environments.

By default, `npm run build` will generate a Node app that you can run with `npm start`. To use a different adapter, add it to the `devDependencies` in `package.json` and specify in your `vite.config.js`.
