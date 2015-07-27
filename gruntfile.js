module.exports = function(grunt){

	grunt.initConfig({
		jshint:{
			all: ['js/app/app.js', 'js/app/services/services.js', 'js/app/directives/directives.js']
		},
		concat:{
			dist:{
				src: ['js/app/app.js', 'js/app/services/services.js', 'js/app/directives/directives.js'],
				dest: 'ngTableGrid.js'
			}
		},
		uglify:{
			dist:{
				src: 'ngTableGrid.js',
				dest: 'ngTableGrid.min.js'
			}
		}
	});


	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['jshint', 'concat', 'uglify']);

}
