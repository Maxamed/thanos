(function(){
  'use strict';
  module.exports = function(grunt) {

    // Global Vars
    var _globalConfig = {
      lessDir: '_less/',
      cssDir: 'css/',
      jsDir: 'js/',
      iconsDir: 'assets/icoMoon/SVG/',
      templateDir: 'tpl/'
    };

    // Project configuration.
    grunt.initConfig({
      // Global Vars
      _globalConfig: _globalConfig,
      pkg: grunt.file.readJSON('package.json'),  

      // File Includes, https://github.com/vanetix/grunt-includes
      // TODO: set this up.
      includes: {
        files: {
          src: ['path/to/foo.html', 'path/to/bar.html'], // Source files
          dest: 'tmp', // Destination directory
          flatten: true,
          cwd: '.',
          options: {
            silent: true,
            banner: '<!-- Include File Location: <% includes.files.dest %> -->'
          }
        }
      },
      // Suit CSS Preprocessor
      suitcss: {
        options: {
          // Task-specific options go here.
          conform: false
        },
        your_target: {
          files: {
            '<%= _globalConfig.cssDir %><%= pkg.name %>-suit.dev.css': ['<%= _globalConfig.cssDir %>lib/site.css','<%= _globalConfig.cssDir %>lib/*.css'],
          }
        }
      },
      svgmin: {
        options: {
          plugins: [
            {
              removeViewBox: false
            }, {
              removeUselessStrokeAndFill: false
            }, {
              cleanupIDs: false
            }
          ]
        },
        dist: {
          files: {
            'img/svg-icons.min.svg': 'img/svg-icons.svg'
          }
        }
      },
      svgstore: {
        options: {
          prefix: 'Icon-',
          cleanup: ['fill','viewbox']
        },
        default: {
          files: {
            'img/svg-icons.svg': ['<%= _globalConfig.iconsDir %>*.svg'],
          },
        },
      },
      concat: {
        vendor: {
          src: ['<%= _globalConfig.jsDir %>vendor/*.js'],
          dest: '<%= _globalConfig.jsDir %>vendor.js',
        },
        app: {
          src: ['<%= _globalConfig.jsDir %>dev/app.js'],
          dest: '<%= _globalConfig.jsDir %>app-bundle.js',
        },

      },
      handlebars: {
        compile: {
          files: {
            "<%= _globalConfig.jsDir %>lib/_templates.js": ['<%= _globalConfig.templateDir %>*.hbs']
          },
        options: {
            namespace: 'Handlebars.templates',
            processName: function(filePath) {
                var pieces = filePath.split("/");
                return pieces[pieces.length - 1].replace('.hbs', ''); 
                }
        }
        }
      },
      watch: {
        css: {
          // Watches LESS file changes then triggers LESS compile
          files: ['<%= _globalConfig.lessDir %>**/*.less'],
          tasks: ['less:dev',]
        },
        suit: {
          // Watches Site CSS file for changes then passes to Suit-CSS preprocessor
          files: ['<%= _globalConfig.cssDir %><%= pkg.name %>-suit.css','<%= _globalConfig.cssDir %>lib/*.css'],
          tasks: ['suitcss']
        },
        svg: {
          files: ['<%= _globalConfig.iconsDir %>*.svg'],
          tasks: ['svgstore','svgmin']
        },
        hbs: {
          files: ['<%= _globalConfig.templateDir %>/*.hbs'],
          tasks: ['handlebars']
        },
        js: {
          files: ['<%= _globalConfig.jsDir %>vendor/*.js','<%= _globalConfig.jsDir %>dev/*.js'],
          tasks: ['concat']
        },
      },
    
    });
    
    // Load Plugins Found in package.json
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Grunt Tasks
    grunt.registerTask('prepsvg',['svgstore','svgmin']);
    grunt.registerTask('suitup',['watch:suit']);
    grunt.registerTask('default', ['watch']);
      
  };
}());