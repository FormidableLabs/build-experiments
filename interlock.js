var path = require("path");
var Interlock = require("interlock");

var ilk = new Interlock({
  srcRoot: __dirname,
  destRoot: path.join(__dirname, "dist/interlock"),

  entry: {
    "./client/app.js": "app.js"
  },
  split: {
    "./client/lib.js": "lib.js"
  },

  includeComments: true
});

ilk.build();
