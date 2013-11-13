module.exports = function(grunt) {
	grunt.initConfig({
		//Metadata
		pkg: grunt.file.readJSON('package.json'),

		//Task configuration
		watch: {
			html: {
				files: ['src/templates/**/*.hbs'],
				tasks: ['assemble']
			},
			less: {
				files: ['src/less/**/*.less'],
				tasks: ['less']
			},
			livereload: {
        options: {
          livereload: true
        },
        files: [
          '<%= pkg.destination %>/**/*.html',
          '<%= pkg.destination %>/assets/css/**/*.css',
          '<%= pkg.destination %>/assets/js/**/*.js'
        ]
      }
		},

		connect: {
			server: {
				options: {
					hostname: '0.0.0.0',
					port: 8000,
					base: "<%= pkg.destination %>/"
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
          '<%= pkg.destination %>/': ['src/templates/pages/*.hbs']
        }
      }
		},

		less: {
			development: {
				options: {
					paths: ['src/less'],
				}, files: {
					'<%= pkg.destination %>/assets/css/styles.css': 'src/less/styles.less'
				}
			}
		}
	});

	grunt.loadNpmTasks('assemble');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	//Default task
	grunt.registerTask('default', ['less']);

	grunt.registerTask('dev', ['connect', 'watch']);

};
