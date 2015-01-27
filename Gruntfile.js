'use strict';
var LIVERELOAD_PORT = 35729;
var SERVER_PORT = 9000;
var lrSnippet = require('connect-livereload')({
    port: LIVERELOAD_PORT
});
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

module.exports = function (grunt) {
    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);
    grunt.loadNpmTasks('css-sprite');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-svgmin');
    grunt.loadNpmTasks('grunt-grunticon');

    // configurable paths
    var yeomanConfig = {
        app: 'app',
        dist: 'dist'
    };

    grunt.initConfig({
        yeoman: yeomanConfig,
        watch: {
            options: {
                nospawn: true,
                livereload: true
            },
            livereload: {
                options: {
                    livereload: grunt.option('livereloadport') || LIVERELOAD_PORT
                },
                files: [
                '<%= yeoman.app %>/*.html',
                '<%= yeoman.app %>/*.php',
                '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
                '<%= yeoman.app %>/scripts/templates/*.{ejs,mustache,hbs}'
                ]
            },
            sass: {
                files: ['<%= yeoman.app %>/styles/{,*/}*.scss'],
                tasks: ['sass']
            },
            js: {
                files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
                tasks: ['jshint']
            },
            handlebars: {
                files: [
                '<%= yeoman.app %>/scripts/modules/*/templates/*.hbs'
                ],
                tasks: ['handlebars']
            },
            test: {
                files: ['<%= yeoman.app %>/scripts/{,*/}*.js', 'test/spec/**/*.js'],
                tasks: ['test:true']
            }
        },
        connect: {
            options: {
                port: grunt.option('port') || SERVER_PORT,
                // change this to '0.0.0.0' to access the server from outside
                hostname: '0.0.0.0'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                        lrSnippet,
                        mountFolder(connect, '.tmp'),
                        mountFolder(connect, yeomanConfig.app)
                        ];
                    }
                }
            },
            test: {
                options: {
                    port: 9001,
                    middleware: function (connect) {
                        return [
                        lrSnippet,
                        mountFolder(connect, '.tmp'),
                        mountFolder(connect, 'test'),
                        mountFolder(connect, yeomanConfig.app)
                        ];
                    }
                }
            },
            dist: {
                options: {
                    middleware: function (connect) {
                        return [
                        mountFolder(connect, yeomanConfig.dist)
                        ];
                    }
                }
            }
        },
        open: {
            server: {
                path: 'http://localhost:<%= connect.options.port %>'
            },
            test: {
                path: 'http://localhost:<%= connect.test.options.port %>'
            }
        },
        clean: {
            dist: ['.tmp', '<%= yeoman.dist %>/*',
            '!<%= yeoman.dist %>/.git{,*/}*',
            '!<%= yeoman.dist %>/Procfile',
            '!<%= yeoman.dist %>/package.json',
            '!<%= yeoman.dist %>/node_modules',
            '!<%= yeoman.dist %>/data',
            '!<%= yeoman.dist %>/.env'
            ],
            server: '.tmp'
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
            'Gruntfile.js',
            '<%= yeoman.app %>/scripts/{,*/}*.js',
            '!<%= yeoman.app %>/scripts/vendor/*',
            'test/spec/{,*/}*.js'
            ]
        },
        mocha: {
            all: {
                options: {
                    run: true,
                    src: ['http://localhost:<%= connect.test.options.port %>/index.html']
                }
            }
        },
        requirejs: {
            dist: {
                // Options: https://github.com/jrburke/r.js/blob/master/build/example.build.js
                options: {
                    baseUrl: '<%= yeoman.app %>/scripts',
                    optimize: 'none',
                    //bower components here need to match main.js or build will fail
                    paths: {
                        'templates': '../../.tmp/scripts/templates',
                        'jquery': '../../<%= yeoman.app %>/bower_components/jquery/dist/jquery',
                        'jqueryui': '../../<%= yeoman.app %>/bower_components/jquery-ui/jquery-ui',
                        'underscore': '../../<%= yeoman.app %>/bower_components/underscore/underscore',
                        'backbone': '../../<%= yeoman.app %>/bower_components/backbone/backbone',
                        'jqueryCustomSelect': '../../<%= yeoman.app %>/bower_components/jquery.customSelect/jquery.customSelect.min',
                        'foundation': '../../<%= yeoman.app %>/bower_components/foundation/js/foundation.min',
                        'handlebars': '../../<%= yeoman.app %>/bower_components/handlebars/handlebars'
                    },
                    // TODO: Figure out how to make sourcemaps work with grunt-usemin
                    // https://github.com/yeoman/grunt-usemin/issues/30
                    //generateSourceMaps: true,
                    // required to support SourceMaps
                    // http://requirejs.org/docs/errors.html#sourcemapcomments
                    preserveLicenseComments: false,
                    useStrict: true
                    //uglify2: {} // https://github.com/mishoo/UglifyJS2
                }
            }
        },
        useminPrepare: {
            html: '<%= yeoman.app %>/index.html',
            options: {
                dest: '<%= yeoman.dist %>'
            }
        },
        usemin: {
            html: ['<%= yeoman.dist %>/{,*/}*.html'],
            css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
            options: {
                dirs: ['<%= yeoman.dist %>']
            }
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },
        cssmin: {
            dist: {
                files: {
                    '<%= yeoman.dist %>/styles/main.css': [
                    '.tmp/styles/{,*/}*.css',
                    '<%= yeoman.app %>/styles/{,*/}*.css'
                    ]
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    /*removeCommentsFromCDATA: true,
                    // https://github.com/yeoman/grunt-usemin/issues/44
                    //collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true*/
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>',
                    src: '*.html',
                    dest: '<%= yeoman.dist %>'
                }]
            }
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                    '*.{ico,txt}',
                    '.htaccess',
                    'images/{,*/}*.{png,jpg,jpeg,gif,webp}',
                    'fonts/*.{eot,svg,ttf,woff}',
                    'styles/fonts/{,*/}*.*',
                    'scripts/json/*.json',
                    'scripts/vendor/{,*/}*.js',
                    'scripts/social/*.js',
                    'assets/{,*/}*.*',
                    '*.php',
                    'includes/**/*',
                    'bower_components/foundation-icon-fonts/*.*',
                    'web.js'
                    ]
                }]
            },
            dev: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                    '*.{ico,txt}',
                    '.htaccess',
                    'images/{,*/}*.{png,jpg,jpeg,gif,webp}',
                    'fonts/*.{eot,svg,ttf,woff}',
                    'styles/fonts/{,*/}*.*',
                    'scripts/json/*.json',
                    'scripts/vendor/{,*/}*.js'
                    ]
                }]
            }
        },
        bower: {
            all: {
                rjsConfig: '<%= yeoman.app %>/scripts/main.js'
            }
        },
        sass: {
            options: {
                sourceMap: true,
                includePaths : ['<%= yeoman.app %>/bower_components']
            },
            dev: {
                files: {
                    '.tmp/styles/main.css': '<%= yeoman.app %>/styles/main.scss'
                }
            },
            dist: {
                files: {
                    '<%= yeoman.dist %>/styles/main.css': '<%= yeoman.app %>/styles/main.scss'
                }
            }

        },
        // documentation - https://github.com/aslansky/css-sprite
        css_sprite: {
            options: {
                'cssPath': '../images',
                'processor': 'css',
                // 'base64': true,
                'orientation': 'vertical',
                'margin': 6,
                'prefix': 'sprite' //,
                // Comment back in for retina support, note: (your images must be double sized!)
                //'retina': true
            },
            sprite: {
                options: {
                    'style': '<%= yeoman.app %>/styles/scss/helper/_sprite.scss'
                },
                src: ['<%= yeoman.app %>/images/sprite/*'],
                dest: '<%= yeoman.app %>/images/sprite/'
            }
        },
        svgmin: { //minimize SVG files
            options: {
                plugins: [{
                    removeViewBox: false
                }, {
                    removeUselessStrokeAndFill: false
                }]
            },
            dist: {
                expand: true,
                cwd: '<%= yeoman.app %>/images/svg',
                src: ['*.svg'],
                dest: '.tmp/images/svg'
            }
        },
        grunticon: {
            dev: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images/svg',
                    src: ['*.svg', '*.png'],
                    dest: '<%= yeoman.app %>/styles/scss/helper'
                }],
                options: {
                    datasvgcss: '_icons.data.svg.scss',
                    datapngcss: '_icons.data.png.scss',
                    urlpngcss: '_icons.fallback.scss',
                    cssprefix: '.svg-'
                }
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images/svg',
                    src: ['*.svg', '*.png'],
                    dest: '<%= yeoman.dist %>/styles/scss/helper'
                }],
                options: {
                    datasvgcss: '_icons.data.svg.scss',
                    datapngcss: '_icons.data.png.scss',
                    urlpngcss: '_icons.fallback.scss',
                    cssprefix: '.svg-'
                }
            }
        },
        handlebars: {
            compile: {
                options: {
                    namespace: 'JST',
                    amd: true
                },
                files: {
                    '.tmp/scripts/templates.js': ['<%= yeoman.app %>/scripts/modules/*/templates/*.hbs']
                }
            }
        },
        autoprefixer: {
            // prefix all files
            single_file: {
                src: '<%= yeoman.dist %>/styles/main.css', // -> src/css/file1.css, src/css/file2.css
                dest: '<%= yeoman.dist %>/styles/main.css' // -> dest/css/file1.css, dest/css/file2.css
            }
        },
        buildcontrol: {
            options: {
                dir: 'dist',
                commit: true,
                push: true,
                message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
            },
            heroku: {
                options: {
                    login: 'roy@roy-martin.com',
                    remote: 'git@heroku_roymartin:roy-martin.git',
                    branch: 'master'

                }
            }
        }
    });

    grunt.registerTask('createDefaultTemplate', function () {
        grunt.file.write('.tmp/scripts/templates.js', 'this.JST = this.JST || {};');
    });

    grunt.registerTask('server', function (target) {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run(['serve' + (target ? ':' + target : '')]);
    });

    grunt.registerTask('serve', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'open:server', 'connect:dist:keepalive']);
        }

        if (target === 'dev') {
            return grunt.task.run(['dev', 'open:server', 'connect:dist:keepalive']);
        }

        if (target === 'test') {
            return grunt.task.run([
                'clean:server',
                'createDefaultTemplate',
                'handlebars',
                'connect:test',
                'open:test',
                'watch'
                ]);
            }

            grunt.task.run([
                'clean:server',
                'createDefaultTemplate',
                'handlebars',
                'sass',
                'grunticon:dev',
                'connect:livereload',
                'open:server',
                'watch'
                ]);
            });

            grunt.registerTask('test', function (isConnected) {
                isConnected = Boolean(isConnected);
                var testTasks = [
                'clean:server',
                'createDefaultTemplate',
                'handlebars',
                'connect:test',
                'mocha',
                ];

                if (!isConnected) {
                    return grunt.task.run(testTasks);
                } else {
                    // already connected so not going to connect again, remove the connect:test task
                    testTasks.splice(testTasks.indexOf('connect:test'), 1);
                    return grunt.task.run(testTasks);
                }
            });

            grunt.registerTask('dev', [
            'clean:dist',
            'createDefaultTemplate',
            'handlebars',
            'svgmin',
            'grunticon',
            'sass',
            'useminPrepare',
            'requirejs',
            'imagemin',
            'htmlmin',
            'concat',
            'cssmin',
            'copy:dev',
            'usemin'
            ]);

            grunt.registerTask('build', [
            'clean:dist',
            'createDefaultTemplate',
            'handlebars',
            'svgmin',
            'grunticon',
            'sass',
            'css_sprite',
            'useminPrepare',
            'requirejs',
            'imagemin',
            'htmlmin',
            'concat',
            'cssmin',
            'uglify',
            'copy',
            'autoprefixer',
            'usemin'
            ]);

            grunt.registerTask('default', [
            'jshint',
            'test',
            'build'
            ]);

            grunt.registerTask('deploy', ['build', 'buildcontrol']);
        };
