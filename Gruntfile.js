module.exports = function(grunt) {

    require('jit-grunt')(grunt);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        browserify: {

            app: {
                src: './build/js/app.jsx',
                dest: './assets/js/app.js',
                options: {
                    browserifyOptions: {
                        debug: true,
                        transform: [['babelify', { presets: ["react", "es2015"] }]],
                        extensions: ['.jsx', '.js']
                    }
                }
            }

        },

        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'assets/css/styles.css': 'build/scss/styles.scss'
                }
            }
        },

        watch: {
            js: {
                files: './build/js/**',
                tasks: [
                    'browserify'
                ]
            },
            css: {
                files: './build/scss/**',
                tasks: [
                    'sass'
                ]
            }
        }

    });

    grunt.registerTask('default', ['browserify', 'sass']);

};