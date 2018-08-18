module.exports = {
  entry: './src/js/app.js',
  output: {
    path: __dirname,
    filename: './bundle.js'
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  }
};