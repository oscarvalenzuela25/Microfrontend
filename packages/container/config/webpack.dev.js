const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
// const packageJson = require('../package.json');

// Importacion vieja
// const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

// Importacion nueva
// const {
//   ModuleFederationPlugin,
// } = require('@module-federation/enhanced/webpack');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8080/',
  },
  devServer: {
    port: 8080,
    historyApiFallback: {
      historyApiFallback: true,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  // Forma de hacerlo con ModuleFederationPlugin OLD
  // plugins: [
  //   new ModuleFederationPlugin({
  //     name: 'container',
  //     // remotes: {
  //     //   // Para hacer uso de esto, por ejemplo, se usa el marketing y despues se van a las carpetas que importamos
  //     //   // import { mount } from 'marketing/MarketingApp';
  //     //   marketing: 'marketing@http://localhost:8081/remoteEntry.js',
  //     //   auth: 'auth@http://localhost:8082/remoteEntry.js',
  //     //   dashboard: 'dashboard@http://localhost:8083/remoteEntry.js',
  //     // },
  //     // // shared: ['react', 'react-dom'],
  //     // shared: packageJson.dependencies,
  //   }),
  // ],
};

module.exports = merge(commonConfig, devConfig);
