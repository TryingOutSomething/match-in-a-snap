module.exports = {
  transpileDependencies: ['vuetify'],

  devServer: {
    host: 'localhost',
    hot: true,
    port: 8080,
    open: 'Chrome',
    disableHostCheck: true,
    proxy: {
      '^/api': {
        disableHostCheck: true,
        target: 'http://localhost:5000',
        secure: false,
        changeOrigin: true
      }
    },
    overlay: {
      warnings: true,
      errors: true
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/matchInASnap' : '/',
  productionSourceMap: false
};
