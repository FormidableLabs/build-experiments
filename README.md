Build Experiments
=================

A quick skim of JS builders.

## Sizes

Minified bundle sizes (and w/ gzip total):

|      File      | webpack | requirejs | interlock |
|----------------|---------|-----------|-----------|
| Loader         | `0`     | `2878`    | `0`       |
| `lib.js`       | `467`   | `132`     | `397`     |
| `app.js`       | `399`   | `108`     | `2255`    |
| Total          | `866`   | `3118`    | `2652`    |
| Total (gzip'd) | `535`   | `1652`    | `1221`    |

Here are the estimated **runtime overheads**:

| File | webpack | requirejs | interlock |
|------|---------|-----------|-----------|
| Loader          | `0`   | `2878`                  | `???` |
| Per Module      | `20`  | `0`                     | `???` |
| Per Dependency  | `3`   | `4` + `PATH_STR.length` | `???` |

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
| Runtime overhead | **243b + 20b per module + 4b per dependency** | 2.8kb + 0b per module + (3b + X) per dependency | `???` |

♦ in production mode (opposite in development mode)

X is the length of the path string

RequireJS runtime overhead assumes `almond` loader replacement.

## Loader Boilerplate

### Webpack

Basically, it's this:

```js
/******/ (function(modules) { // webpackBootstrap
/******/  // The module cache
/******/  var installedModules = {};

/******/  // The require function
/******/  function __webpack_require__(moduleId) {

/******/    // Check if module is in cache
/******/    if(installedModules[moduleId])
/******/      return installedModules[moduleId].exports;

/******/    // Create a new module (and put it into the cache)
/******/    var module = installedModules[moduleId] = {
/******/      exports: {},
/******/      id: moduleId,
/******/      loaded: false
/******/    };

/******/    // Execute the module function
/******/    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/    // Flag the module as loaded
/******/    module.loaded = true;

/******/    // Return the exports of the module
/******/    return module.exports;
/******/  }


/******/  // expose the modules object (__webpack_modules__)
/******/  __webpack_require__.m = modules;

/******/  // expose the module cache
/******/  __webpack_require__.c = installedModules;

/******/  // __webpack_public_path__
/******/  __webpack_require__.p = "";

/******/  // Load entry module and return exports
/******/  return __webpack_require__(0);
/******/ })
```

And minifies to about `200` bytes.

### RequireJS

Almond is the slim loader, and definitely bigger than Webpack.
It minifies to about `2878` bytes. The unminified
[`almond.js`](https://github.com/jrburke/almond/blob/master/almond.js) is
available on GitHub.

### Interlock

`TODO: Insert loader analysis`
