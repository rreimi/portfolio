module.exports = function(grunt) {

    //Initializing the configuration object
    grunt.initConfig({

        // Task configuration
        less: {
            development: {
                options: {
                    compress: true  //minifying the result
                },
                files: {
                    //compiling frontend.less into frontend.css
                    "./dist/css/style.css":"./less/style.less"
                }
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            js_frontend: {
                src: [
                    './bower_components/jquery/jquery.js',
                    './bower_components/bootstrap/dist/js/bootstrap.js',
                    './dist/js/main.js'
                ],
                dest: './dist/js/all.js'
            }
//            js_backend: {
//                src: [
//                    './bower_components/jquery/jquery.js',
//                    './bower_components/bootstrap/dist/js/bootstrap.js',
//                    './app/assets/javascript/backend.js'
//                ],
//                dest: './public/assets/javascript/backend.js',
//            },
        },
        uglify: {
            options: {
                mangle: false  // Use if you want the names of your functions and variables unchanged
            },
            frontend: {
                files: {
                    './dist/js/all.min.js': './dist/js/all.js'
                }
            }
//            backend: {
//                files: {
//                    './public/assets/javascript/backend.js': './public/assets/javascript/backend.js',
//                }
//            },
        },
        phpunit: {
            classes: {
            },
            options: {
            }
        },
        watch: {
            js_frontend: {
                files: [
                    //watched files
                    './bower_components/jquery/jquery.js',
                    './bower_components/bootstrap/dist/js/bootstrap.js',
                    './dist/js/main.js'
                ],
                tasks: ['concat:js_frontend','uglify:frontend'],     //tasks to run
                options: {
                    livereload: true                        //reloads the browser
                }
            },
//            js_backend: {
//                files: [
//                    //watched files
//                    './bower_components/jquery/jquery.js',
//                    './bower_components/bootstrap/dist/js/bootstrap.js',
//                    './app/assets/javascript/backend.js'
//                ],
//                tasks: ['concat:js_backend','uglify:backend'],     //tasks to run
//                options: {
//                    livereload: true                        //reloads the browser
//                }
//            },
            less: {
                files: ['./less/*.less'],  //watched files
                tasks: ['less'],                          //tasks to run
                options: {
                    livereload: true                        //reloads the browser
                }
            }
//            tests: {
//                files: ['app/controllers/*.php','app/models/*.php'],  //the task will run only when you save files in this location
//                tasks: ['phpunit']
//            }
        }
    });

    // Plugin loading
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
//    grunt.loadNpmTasks('grunt-phpunit');

    // Task definition
    grunt.registerTask('default', ['watch']);

};