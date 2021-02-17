const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // 目标地址
        changeOrigin: true // 开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
      }

    }
  },
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}
