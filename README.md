# RWR Hotkey Editor

[![codecov](https://codecov.io/gh/Kreedzt/rwr-imba-qq-bot/branch/master/graph/badge.svg?token=MWGXZH7GO9)](https://codecov.io/gh/Kreedzt/rwr-imba-qq-bot)
![build status](https://github.com/Kreedzt/rwr-imba-qq-bot/actions/workflows/ci.yml/badge.svg?branch=master)
![rwr_version](https://badgen.net/badge/RWR/1.96/orange)

Quick edit `hotkeys.xml` file tool

English | [简体中文](README_zhCN.md)

## Quick Start
Download latest [Release](https://github.com/Kreedzt/rwr-hotkey-editor/releases), double-click exe to run app.

Available features:

-   [x] Save by group
-   [x] Quick overwrite

For `Windows 7` users, please [download](https://developer.microsoft.com/en-us/microsoft-edge/webview2/#download-section) webview2 runtime.

## Development

This project is based on [tauri](https://tauri.app/),  depend on the following 2 language environments at the same time:

-   [Nodejs](https://nodejs.org/en/)
-   [Rust](https://www.rust-lang.org/)

After installing the environment, this project relies on `pnpm` for front-end package management

1. Install `pnpm`

```bash
npm i -g pnpm
```

2. Use `pnpm` install dependencies

```bash
pnpm i
```

3. Start development server

```
pnpm tauri dev
```

## Build

Refer to the [tauri](https://tauri.app/zh/v1/guides/building/) documentation, and use the following command to build.

```bash
pnpm tauri build
```

## License

-   [GPLv3](https://opensource.org/licenses/GPL-3.0)


