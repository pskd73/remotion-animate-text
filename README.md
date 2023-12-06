# Remotion Library Starter

This Turborepo template:

- allows you to develop your own Remotion libraries and components
- includes best practices for developing Remotion libraries out of the box
- includes an example package for testing your library

## Getting started

To create your own library, [use this repository as a template](https://github.com/new?owner=remotion-dev&template_name=library-starter&template_owner=remotion-dev).

After cloning the resulting library, start developing it:

```
pnpm i
pnpm run dev
```

Open the browser on http://localhost:3000 to see the testbed.
Edit the `packages/library` folder to change your library and edit `packages/example` to edit your testbed.

## Linting

To lint your code, run:

```sh
pnpm run lint
```

either from the root or from an individual package.

## Changing the library name

Before publishing, you should change the default name of `my-library` to your library name.

1. Stop all commands such as `pnpm run dev`
1. Ensure your desired NPM package name is available.
1. Find and replace all occurrences of `my-library` with your library name in the project, except for the occurence in `pnpm-lock.yaml`
1. Run `pnpm i`.

Also change your name in `packages/library/LICENSE.md` and `packages/library/package.json` as well as adjust the `packages/library/README.md`.

## Publishing

1. Run `pnpm run build` to build your library.
1. Increment the version of your library in `packages/library/package.json`.
1. Run `pnpm recursive publish` to publish your library to NPM.

## Cleaning

You can clear all caches and dependencies by running the following command in the root:

```bash
pnpm run clean
```

## Credits

This package was authored by [Mohit Yadav](https://github.com/Just-Moh-it/) and inspired by [Create-t3-turbo](https://github.com/t3-oss/create-t3-turbo/).
