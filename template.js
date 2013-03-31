/*
 * grunt ember-library template
 *
 * Copyright (c) 2013 @pangratz Clemens Müller, contributors
 * Licensed under the MIT license.
 */

// Basic template description.
exports.description = 'Create a basic Ember.js library';

// Template-specific notes to be displayed before question prompts.
exports.notes = 'This template tries to guess file and directory paths, but ' +
  'you will most likely need to edit the generated Gruntfile.js file before ' +
  'running grunt. _If you run grunt after generating the Gruntfile, and ' +
  'it exits with errors, edit the file!_';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = 'Gruntfile.js';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({}, [
    init.prompt('name'),
    init.prompt('description'),
    {
      name: 'ember_data',
      message: 'Will this library be for Ember-Data?',
      default: 'y/N',
      warning: 'Ember-Data.js will be included'
    },
    {
      name: 'namespace',
      message: 'Namespace of the library',
      default: 'App'
    },
    init.prompt('version'),
    init.prompt('repository'),
    init.prompt('homepage'),
    init.prompt('bugs'),
    init.prompt('licenses', 'MIT'),
    init.prompt('author_name'),
    init.prompt('author_email')
  ], function(err, props) {
    props.ember_data = !(/n/i.test(props.ember_data));
    props.test_task = 'qunit';
    props.file_name = '<%= pkg.name %>';

    props.devDependencies = {
      'grunt': '~0.4.1',
      'grunt-contrib-jshint': '~0.1.1',
      'grunt-contrib-qunit': '~0.1.1',
      'grunt-contrib-concat': '~0.1.2',
      'grunt-contrib-uglify': '~0.1.1',
      'grunt-contrib-watch': '~0.2.0',
      'grunt-contrib-clean': '~0.4.0',
      'falafel': '~0.2.1'
    };

    // Find the first `preferred` item existing in `arr`.
    function prefer(arr, preferred) {
      for (var i = 0; i < preferred.length; i++) {
        if (arr.indexOf(preferred[i]) !== -1) {
          return preferred[i];
        }
      }
      return preferred[0];
    }

    // Guess at some directories, if they exist.
    var dirs = grunt.file.expand({filter: 'isDirectory'}, '*').map(function(d) { return d.slice(0, -1); });
    props.lib_dir = prefer(dirs, ['lib', 'src']);
    props.test_dir = prefer(dirs, ['tests', 'test', 'unit', 'spec']);

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // exclude "tests/vendor/ember-data.js" from copying
    if (!props.ember_data) { delete files['tests/vendor/ember-data.js']; }

    // Add properly-named license files.
    init.addLicenseFiles(files, props.licenses);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

    // Generate package.json file.
    init.writePackageJSON('package.json', props);

    // All done!
    done();
  });

};