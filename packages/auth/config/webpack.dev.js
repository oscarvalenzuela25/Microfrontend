const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// Importacion vieja
// const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
// Importacion nueva
const {
  ModuleFederationPlugin,
} = require('@module-federation/enhanced/webpack');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8082/', // Ruta base que tomara en modo desarrollo
  },
  devServer: {
    port: 8082,
    historyApiFallback: {
      historyApiFallback: true,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'auth',
      filename: 'remoteEntry.js',
      exposes: {
        // Aqui se crea como si fuera una carpeta, carpeta AuthApp y dentro tiene un index.js
        './AuthApp': './src/bootstrap',
      },
      // shared: ['react', 'react-dom'],
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
