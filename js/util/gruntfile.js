module.exports = function(grunt){

	grunt.initConfig({

		jshint: {
			all: ['../app/']
		},

		concat: {
			dist:{
				src: ['../app/app.js', '../app/directives/directives.js'],
				dest: '../lib/ngTableGrid.js'
			}
		},

		uglify: {
			dist:{
				src: 'ngTableGrid.js',				
				dest: '../lib/ngTableGrid.min.js',
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// grunt.registerTask('default', ['jshint']);
	grunt.registerTask('default', ['jshint', 'concat', 'uglify']);

}