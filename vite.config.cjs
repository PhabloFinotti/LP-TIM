const path = require('path');
const { defineConfig } = require('vite');

module.exports = defineConfig({
  root: '',
  base: '',
  publicDir: 'src/public',
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/index.html'),
      },
      output: {
        dir: path.resolve(__dirname, 'dist'),
      },
    },
  },
});
