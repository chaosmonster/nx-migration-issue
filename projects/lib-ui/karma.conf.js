// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-jasmine-html-reporter"),
      require("karma-coverage"),
      require("@angular-devkit/build-angular/plugins/karma"),
      require("karma-spec-reporter"),
    ],
    client: {
      jasmine: {
        random: true,
      },
      clearContext: false,
    },
    mime: {
      "text/x-typescript": ["ts", "tsx"],
    },
    jasmineHtmlReporter: {
      suppressAll: true, // removes the duplicated traces
    },
    coverageReporter: {
      dir: require("path").join(__dirname, "../../coverage/lib-ui"),
      subdir: ".",
      reporters: [{ type: "html" }, { type: "text-summary" }],
    },
    specReporter: {
      maxLogLines: 10, // limit number of lines logged per test
      suppressErrorSummary: false, // do not print error summary
      suppressFailed: false, // do not print information about failed tests
      suppressPassed: false, // do not print information about passed tests
      suppressSkipped: true, // do not print information about skipped tests
      showSpecTiming: true, // print the time elapsed for each spec
      failFast: false, // test would finish with error when a first fail occurs.
    },
    reporters: ["spec", "coverage"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["ChromeHeadlessNoSandbox"],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: "ChromeHeadless",
        // prettier-ignore
        flags: [
          '--no-sandbox',
          '--disable-gpu',
          '--disable-setuid-sandbox',
          '--js-flags="--max_old_space_size=8192"'],
      },
    },
    singleRun: false,
    restartOnFileChange: true,
    browserDisconnectTolerance: 2,
    browserDisconnectTimeout: 150000,
    browserNoActivityTimeout: 600000,
    captureTimeout: 150000,
    processKillTimeout: 50000,
    reportSlowerThan: 500,
    failOnEmptyTestSuite: 0,
  });
};
