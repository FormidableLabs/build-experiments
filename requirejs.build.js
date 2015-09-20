({
  appDir: "client",
  baseUrl: ".",
  dir: "client-requirejs-build",
  modules: [
    {
      name: "lib.min",
      create: true,
      include: ["lib"]
    },
    {
      name: "app.min",
      create: true,
      include: ["app"],
      exclude: ["lib"],       // Lib is shared dependency
      insertRequire: ["app"]  // Actually execute `app` entry point
    }
  ],
  optimize: "uglify2"
})