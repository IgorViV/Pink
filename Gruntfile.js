"use strict";

module.exports = function(grunt) {

  require("load-grunt-tasks")(grunt);

  grunt.initConfig({
    copy: {
      build: {
        files: [{
          expand: true,
          cwd: "source",
          src: [
            "fonts/**/*.{woff,woff2}",
            "js/**"
          ],
          dest: "build"
        }]
      }
    },
    clean: {
      build: ["build"]
    },
    less: {
      style: {
        files: {
          "build/css/style.css": "source/less/style.less"
        }
      }
    },
    postcss: {
      style: {
        options: {
          processors: [
            require("autoprefixer")()
          ]
        },
        src: "build/css/*.css"
      }
    },
    csso: {
      style: {
        options: {
          report: "gzip"
        },
        files: {
          "build/css/style.min.css": ["build/css/style.css"]
        }
      }
    },
    imagemin: {
      images: {
        options: {
          optimizationlevel: 3,
          progressive: true
        },
        files: [
          {
            expand: true,
            cwd: 'source/img',
            src: ['**/*.{jpg,png,svg}'],
            dest: 'build/img'
          }
        ]
      }
    },
    cwebp: {
      images: {
        options: {
          q: 80
        },
        files: [{
          expand: true,
          cwd: 'source/img',
          src: ['**/*.{jpg,png}'],
          dest: 'build/img'
        }]
      }
    },
    svgstore: {
      options: {
        includeTitleElement: false
      },
      sprite: {
        files: {
          "build/img/sprite.svg": ["source/img/icon-*.svg"]
        }
      }
    },
    posthtml: {
      options: {
        use: [
          require("posthtml-include")()
        ]
      },
      html: {
        files: [{
          expand: true,
          cwd: "source",
          src: ["*.html"],
          dest: "build"
        }]
      }
    },
    browserSync: {
      server: {
        bsFiles: {
          src: [
            "build/*.html", "build/css/*.css"
          ]
        },
        options: {
          server: "build/",
          watchTask: true
        }
      }
    },
    watch: {
      html: {
        files: ["source/*.html"],
        tasks: ["posthtml"]
      },
      style: {
        files: ["source/less/**/*.less"],
        tasks: ["less", "postcss", "csso"]
      }
    }
  });

  grunt.registerTask("serve", ["browserSync", "watch"]);
  grunt.registerTask("build", [
    "clean",
    "copy",
    "less",
    "postcss",
    "csso",
    "imagemin",
    "cwebp",
    "svgstore",
    "posthtml"
  ]);
};
