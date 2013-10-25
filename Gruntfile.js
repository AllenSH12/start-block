module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON( 'package.json' ),

    watch: {
      less: {
        files: ['src/less/**/*.less'],
        tasks: ['less']
      },
      html: {
        files: ['src/templates/**/*.hbs'],
        tasks: 'assemble:dev'
      },
      livereload: {
        options: {
          livereload: true
        },
        files: [
          'dev/**/*.html',
          'dev/assets/css/{,*/}*.css',
          'dev/assets/js/**/*.js'
        ]
      }
    },

    connect: {
      server: {
        options: {
          port: 8000,
          base: 'dev/'
        }
      }
    },

    less: {
      development: {
        options: {
          paths: ["src/less"],
          yuicompress: true
        }, files: {
          "dev/assets/css/style.css": "src/less/style.less"
        }
      }
    },

    assemble: {
      options: {
        flatten: true,
        layout: 'layout.hbs',
        layoutdir: 'src/templates/layouts',
        partials: ['src/templates/pages/*.hbs', 'src/templates/parts/*.hbs']
      },
      dev: {
        options: {
          data: ['src/data/*.{json}']
        },
        files: {
          'dev/': ['src/templates/pages/*.hbs']
        }
      }
    }

  });

  // Default task
  grunt.registerTask('default', ['connect','watch']);

  grunt.registerTask('dev', ['less:development', 'connect', 'watch']);

  grunt.loadNpmTasks('assemble');
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
};
