requirejs.config({
  baseUrl: '../dist/',
  paths: {
    prettyFocus: 'pretty-focus.min'
  }
});

requirejs(['prettyFocus'], function(prettyFocus) {
  // Run 'init' method on page load (or whenever required)
  prettyFocus.init();
});
