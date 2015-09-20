({
  appDir: "client",
  baseUrl: ".",
  dir: "client-requirejs-build",
  modules: [
    {
      name: "lib"
    },
    {
      name: "app",
      exclude: ["lib"],       // Lib is shared dependency
      insertRequire: ["app"]  // Actually execute `app` entry point
    }
  ],
  optimize: "uglify2"
})