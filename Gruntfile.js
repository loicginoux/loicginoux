// Generated on 2013-05-20 using generator-webapp 0.1.7
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // configurable paths
    var yeomanConfig = {
        app: 'app',
        dist: 'dist'
    };

    grunt.initConfig({
        yeoman: yeomanConfig,

        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= yeoman.dist %>/*',
                        '!<%= yeoman.dist %>/.git*'
                    ]
                }]
            },
            server: '.tmp'
        },
        useminPrepare: {
            html: '<%= yeoman.app %>/index.php',
            options: {
                dest: '<%= yeoman.dist %>'
            }
        },
        usemin: {
            html: [
                '<%= yeoman.dist %>/{,*/}*.php',
                '<%= yeoman.dist %>/views/portfolio/{,*/}*.php'
            ],
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
                    src: '{,*/}*.{png,jpg,jpeg,gif}',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },
        cssmin: {
            dist: {
                otions:{
                    report:"min"
                },
                files: {
                    '<%= yeoman.dist %>/styles/style.css': [
                        // '.tmp/styles/{,*/}*.css',
                        '<%= yeoman.app %>/styles/bootstrap-modal.css',
                        '<%= yeoman.app %>/styles/fancybox.css',
                        '<%= yeoman.app %>/styles/style.css'
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
        // Put files not handled in other tasks here
        copy: {
            dist: {
                options:{
                    verbose:true
                },
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '*.{ico,txt}',
                        '.htaccess',
                        '*.php',
                        'images/{,*/}*.{webp,gif}',
                        'styles/fonts/*',
                        'styles/ie*.css',
                        'styles/style-*.css',
                        'scripts/5grid.js',
                        'php/*',
                        '*.pdf',
                        'views/portfolio/{,*/}*.php'
                    ]
                }]
            }
        },
        concurrent: {
            dist: [
                'imagemin',
                'svgmin',
                'htmlmin'
            ]
        }
    });



    grunt.registerTask('build', [
        'clean:dist',
        'useminPrepare',
        'concurrent:dist',
        'concat',
        'uglify',
        'cssmin',
        'copy',
        // 'rev',
        'usemin'
    ]);

    grunt.registerTask('default', [
        'build'
    ]);
};
