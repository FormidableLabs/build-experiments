var path = require("path");

var Interlock = require("interlock");
var share = require("interlock-share");
var uglify = require("interlock-uglify");

var OPTIMIZE = process.env.OPTIMIZE === "true";
var DEST = path.join(__dirname, "dist");

var ilkLib = new Interlock({
  srcRoot: __dirname,
  destRoot: DEST,

  split: {
    "./client/lib.js": "interlock/lib.js"
  },

  includeComments: true,
  pretty: !OPTIMIZE,

  plugins: [
    share.give("interlock/manifest.json")
  ].concat(OPTIMIZE ? [
    uglify({}, true)
  ] : [])
});

var ilkApp = new Interlock({
  srcRoot: __dirname,
  destRoot: DEST,

  entry: {
    "./client/app.js": "interlock/app.js"
  },

  includeComments: true,
  pretty: !OPTIMIZE,

  plugins: [
    share.take(path.join(DEST, "interlock/manifest.json"), DEST)
  ].concat(OPTIMIZE ? [
    uglify({}, true)
  ] : [])
});

ilkLib.build().then(function () {
  return ilkApp.build();
});
