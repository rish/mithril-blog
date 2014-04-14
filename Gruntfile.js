module.exports = function(grunt) {

	grunt.initConfig({
		md2html: {
			blog: {
				options: {layout: "layout/layout.html"},
				files: [{cwd: "articles", src: ["*.md"], dest: "./", expand: true, ext: ".html"}]
			},
			rss: {
				options: {layout: "layout/rss.xml"},
				files: [{src: ["articles/building-a-seinfeld-app.md"], dest: "feed.xml"}]
			}
		}
	});
	
	grunt.loadNpmTasks("grunt-md2html");
	
	grunt.registerTask("default", ["md2html"]);

};