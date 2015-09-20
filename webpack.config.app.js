var path = require("path");
var webpack = require("webpack");

module.exports = {
  context: path.join(__dirname, "client"),
  entry: {
    app: "./app.js"
  },
  output: {
    path: path.join(__dirname, "dist/webpack"),
    filename: "[name].js"
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: path.join(__dirname, "client"),
      manifest: require("./dist/webpack/lib-manifest.json")
    })
  ]
};
