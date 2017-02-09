// /*
//  After you have changed the settings under responsive_images
//  run this with one of these options:
//   "grunt" alone creates a new, completed images directory
//   "grunt clean" removes the images directory
//   "grunt responsive_images" re-processes images without removing the old ones
// */

// module.exports = function(grunt) {

//   grunt.initConfig({
//     responsive_images: {
//       dev: {
//         options: {
//           engine: 'im',
//           sizes: [{
//             width: 1600,
//             suffix: '_large_2x',
//             quality: 30
//         }, {
//             width: 320,
//             height: 240,
//             suffix: '_small_2x',
//             quality: 90
//         }, {
//             width: 640,
//             suffix: '_medium_2x',
//             quality:90
//         }]
//         },

        
//         You don't need to change this part if you don't change
//         the directory structure.
        
//         files: [{
//           expand: true,
//           src: ['*.{gif,jpg,png}'],
//           cwd: 'images_src/',
//           dest: 'images/'
//         }]
//       }
//     },

//     /* Clear out the images directory if it exists */
//     clean: {
//       dev: {
//         src: ['images'],
//       },
//     },

//     /* Generate the images directory if it is missing */
//     mkdir: {
//       dev: {
//         options: {
//           create: ['images']
//         },
//       },
//     },

//   });

//   grunt.loadNpmTasks('grunt-responsive-images');
//   grunt.loadNpmTasks('grunt-contrib-clean');
//   grunt.loadNpmTasks('grunt-contrib-copy');
//   grunt.loadNpmTasks('grunt-mkdir');
//   grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images']);

// };


module.exports = function (grunt) {
  grunt.initConfig({
    image: {
      static: {
        options: {
          pngquant: true,
          optipng: false,
          zopflipng: true,
          jpegRecompress: false,
          jpegoptim: true,
          mozjpeg: true,
          gifsicle: true,
          svgo: true
        },
        files: {
          'dist/img.png': 'src/img.png',
          'dist/img.jpg': 'src/img.jpg',
          'dist/img.gif': 'src/img.gif',
          'dist/img.svg': 'src/img.svg'
        }
      },
      dynamic: {
        files: [{
          expand: true,
          cwd: 'images/',
          src: ['**/*.{png,jpg,gif,svg}'],
          dest: 'img/'
        }]
      }
    }
  });
 
  grunt.loadNpmTasks('grunt-image');
  grunt.registerTask('default', ['image']);
};