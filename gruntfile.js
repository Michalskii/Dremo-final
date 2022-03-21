module.exports = function(grunt) {
// config

    grunt.initConfig({
        concat: {
            js:  {
                src: ['*.js'],
                dest: 'build/scripts.js'
            },
            css: {
                src: ['*css'], 
                dest: 'build/styles.css'
            }

       
        }

});
// load plugins
grunt.loadNpmTask('grunt-contrib-concat');


// register taks

grunt.registerTask('concat-js', ['concat:js']);
grunt.registerTask('concat-css', ['concat:css']);



};