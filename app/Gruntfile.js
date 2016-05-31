/**
 * @description 聚店-便民服务Grunt配置文件;
 * @date 2016-05-27;
 * @author yhm0188;
 */
 
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    //压缩js;
    uglify:  {
      options: {
        stripBanners: false
      },
      zipAll: {
        files: [{
          expand: true,
          cwd: "src/js", //js directory
          src: "**/*.js", 
          dest: "dest/js"
        }]
      }
    },
    //压缩CSS;
    cssmin: {
      options: {
        keepSpecialComments: 0
      },
      minfile: {
        expand: true,
        cwd: "src/css",
        src: ["*.css"],
        dest: "dest/css",
        ext: ".css"
      }
    },
    //合并js;
    //合并CSS;
    //Copy JS;
    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: "dest/js",
            src: ['**'],
            dest: 'js/'
          },
          {
            expand: true,
            cwd: "dest/css",
            src: ['**'],
            dest: 'css/'
          }
        ]
      }
    },
    //监听JS;
    watch: {
      js: {
        files: ['src/js/**/*.js'],
        tasks: ['newer:uglify:zipAll', 'copy']
      },
      css: {
        files: ['src/css/**/*.css'],
        tasks: ['newer:cssmin', 'copy']
      }
    }
  });
  
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-newer");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.registerTask("release", ['uglify:zipAll']);
};