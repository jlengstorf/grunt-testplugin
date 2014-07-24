/*
 * grunt-testplugin
 * https://github.com/jlengstorf/grunt-testplugin
 *
 * Copyright (c) 2014 jlengstorf
 * Licensed under the MIT license.
 */

'use strict';

var fs = require('fs');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('testplugin', 'An example plugin to show the dev process.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      note: '/* Inserted using a Grunt plugin */'
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      grunt.log.writeflags(f);
      var prepended = options.note + grunt.util.linefeed + grunt.file.read(f.src);
      grunt.file.write(f.dest, prepended);
      grunt.log.ok('Note added to '+f.dest);
    });
  });

};
