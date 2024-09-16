const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8082,
    historyApiFallback: {
      index: '/index.html',
    },
  },
  output: {
    publicPath: 'http://localhost:8082/', // Ruta base que tomara en modo desarrollo
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
  ],
};

module.exports = merge(commonConfig, devConfig);
