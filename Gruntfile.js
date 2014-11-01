(function(){
  'use strict';
  module.exports = function(grunt) {

    // Global Vars
    var _globalConfig = {
      lessDir: '_less/',
      cssDir: 'stylesheets/',
      jsDir: 'js/',
      iconsDir: 'assets/icoMoon/SVG/',
    };

    // Project configuration.
    grunt.initConfig({
      // Global Vars
      _globalConfig: _globalConfig,
      pkg: grunt.file.readJSON('package.json'),  

      // Static Web Server
      nodestatic: {
        server: {
          options: {
            port: 9009
          }
        }
      },
      // Less Compiler
      less: {
        options: {
          ieCompat: true,
          sourceMap: true,
          sourceMapBasepath: '_less',
          outputSourceFiles: true
        },
        dev: {
          files: {
            '<%= _globalConfig.cssDir %><%= pkg.name %>.css': '<%= _globalConfig.lessDir %><%= pkg.name %>.less'
          }
        }
      },

      watch: {
        css: {
          // Watches LESS file changes then triggers LESS compile
          files: ['<%= _globalConfig.lessDir %>**/*.less'],
          tasks: ['less:dev']
        },
        // js: {
        //   files: ['<%= _globalConfig.jsDir %>**/*.js'],
        //   tasks: ['import:dev']
        // },
        // svg: {
        //   files: ['<%= _globalConfig.iconsDir %>*.svg'],
        //   tasks: ['svgstore','svgmin']
        // }
      },
    
    });
    
    // Load Plugins Found in package.json
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Grunt Tasks
    grunt.registerTask('default', ['nodestatic','watch']);
      
  };
}());