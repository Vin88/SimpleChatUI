exports.config = {
  allScriptsTimeout: 11000,

  // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
  specs: [
    '*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8000/app/',

  framework: 'jasmine',
// Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
  //  showColors: true, // Use colors in the command line report
  }
};
