const StyleLintPlugin = require('stylelint-webpack-plugin');
const path = require('path');
const apiMocker = require('mocker-api');

module.exports = {
  // webpack-dev-serverに関する設定を行うオプション
  devServer: {
    port: 8888,
    disableHostCheck: true,
    before(app) {
      apiMocker(app, path.resolve('@/../mock/api-mock.js'), {
        proxy: {
          '/api/(.*)': 'http://localhost:8888/',
        },
        changeHost: true,
      });
    },
  },
  transpileDependencies: ['vuetify'],
  configureWebpack: {
    plugins: [
      // ホットリロード時に stylelint を実行する
      new StyleLintPlugin({
        files: ['src/**/*.{vue,scss}'],
      }),
    ],
  },
};
