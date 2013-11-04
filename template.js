'use strict';

//warn if directory contains any existing files
exports.warnOn = '*';

exports.template = function(grunt, init, done) {
  init.process([], function(err, props) {
    var files = init.filesToCopy(props);
    init.copyAndProcess(files, props);

    init.writePackageJSON('package.json', {
      name: 'grunt-template',
      node_version: '>= 0.10.0',
      devDependencies: {
        'assemble': '~0.4.0',
        'grunt-contrib-connect': '~0.5.0',
        'grunt-contrib-less': '~0.8.0',
        'grunt-contrib-watch': '~0.4.0'
      }
    });

    done();
  });
};