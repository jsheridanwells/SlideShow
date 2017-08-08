module.exports = function (grunt) {
	grunt.initConfig({
		jshint: {
			files: ['../js/**/*.js'],
			options: {
				predef: ['document', 'console', '$', 'window', 'jQuery'],
				esnext: true,
				globalstrict: true,
				globals: {'Slides': true}
			}
		},
		watch: {
			js: {
				files: ['../js/**/*.js'],
				tasks: ['jshint']
			}
		}
	});
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
	grunt.registerTask('default', ['jshint', 'watch']);
};
