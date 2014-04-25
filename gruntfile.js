module.exports = function(grunt) {

    //Initializing the configuration object
    grunt.initConfig({

        // Task configuration
        less: {
            development: {
                options: {
                    compress: false,  //minifying the result
                    sourceMap: true,
                    sourceMapFilename: "dist/css/style.css.map",
                    sourceMapBasepath: "dist/css/"
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
                    './bower_components/jquery/dist/jquery.js',
                    './bower_components/bootstrap/dist/js/bootstrap.js',
                    './bower_components/colorbox/jquery.colorbox.js',
                    './bower_components/jquery-easing-original/jquery.easing.1.3.js',
                    './js/jquery-booklet/jquery.booklet.latest.min.js',
                    './js/main.js'
                ],
                dest: './dist/js/all.js'
            }
//            css: {
//                src: [
//                    './bower_components/colorbox/example1/colorbox.css'
//                ],
//                dest: './dist/css/colorbox.css'
//            }
//            js_backend: {
//                src: [
//                    './bower_components/jquery/jquery.js',
//                    './bower_components/bootstrap/dist/js/bootstrap.js',
//                    './app/assets/javascript/backend.js'
//                ],
//                dest: './public/assets/javascript/backend.js',
//            },
        },
//        cssmin: {
//            development: {
//                files: {
//                    //compiling frontend.less into frontend.css
//                    "./dist/css/style.reallymin.css":"./dist/css/style.css"
//                }
//            }
//        },
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
                    './bower_components/colorbox/jquery.colorbox.js',
                    './js/main.js'
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
                files: ['./less/*.less', './dist/css/jquery-booklet/*.css'],  //watched files
                tasks: ['less'],                          //tasks to run
                //tasks: ['less', 'concat:css','cssmin'],                          //tasks to run
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
//    grunt.loadNpmTasks('grunt-contrib-cssmin');

//    grunt.loadNpmTasks('grunt-phpunit');

    // Task definition
    grunt.registerTask('default', ['watch']);

};