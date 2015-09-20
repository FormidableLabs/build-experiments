Build Experiments
=================

A quick skim of JS builders.

## Sizes

These are _minified_, but **not** _gzipped_ byte sizes

| File | webpack | requirejs | interlock |
|------|---------|-----------|-----------|
| Loader    | `0`   | `5223`  | `???` |
| `lib.js`  | `478` | `114`   | `???` |
| `app.js`  | `399` | `108`   | `???` |
| Total     | `877` | `5445`  | `???` |

## Features

Based on [Webpack's Matrix](http://webpack.github.io/docs/comparison.html)

| Feature | webpack | requirejs | interlock |
|---------|---------|-----------|-----------|
| CommonJs `require` | **yes** | only wrapping in `define` | `???` |
| CommonJs `require.resolve` | **yes** | no | `???` |
| CommonJs `exports` | **yes** | only wrapping in `define` | `???` |
| AMD `define` | **yes** | **yes** | `???` |
| AMD `require` | **yes** | **yes** | `???` |
| AMD `require` loads on demand | **yes** | with manual configuration | `???` |
| generate a single bundle | **yes** | yes♦ | `???` |
| load each file separate | no | yes | `???` |
| multiple bundles | **yes** | with manual configuration | `???` |
| additional chunks are loaded on demand | **yes** | **yes** | `???` |
| multi pages build with common bundle | with manual configuration | **yes** | `???` |
| concat in require `require("./fi" + "le")` | **yes** | no♦ | `???` |
| indirect require `var r = require; r("./file")` | **yes** | no♦ | `???` |
| expressions in require (guided) `require("./templates/" + template)` | **yes (all files matching included)** | no♦ | `???` |
| expressions in require (free) `require(moduleName)` | with manual configuration | no♦ | `???` |
| requirable files | file system | **web** | `???` |
| plugins | **yes** | yes | `???` |
| preprocessing | **loaders, [transforms](https://github.com/webpack/transform-loader)** | loaders | `???` |
| watch mode | yes | not required | `???` |
| debugging support | **SourceUrl, SourceMaps** | not required | `???` |
| node.js built-in libs `require("path")` | **yes** | no | `???` |
| other node.js stuff | process, __dir/filename, global | - | `???` |
| replacement for browser | `web_modules`, `.web.js`, package.json field, alias config option | alias option | `???` |
| minimizing | uglify | uglify, closure compiler | `???` |
| mangle path names | **yes** | no | `???` |
| Runtime overhead | **243b + 20b per module + 4b per dependency** | 14.7kb + 0b per module + (3b + X) per dependency | `???` |

♦ in production mode (opposite in development mode)

X is the length of the path string
