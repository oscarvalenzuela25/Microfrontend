import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { init } from '@module-federation/enhanced/runtime';

init({
  name: 'container',
  remotes: [
    {
      name: 'marketing',
      entry: 'http://localhost:8081/mf-manifest.json',
      alias: 'marketing',
    },
    {
      name: 'auth',
      entry: 'http://localhost:8082/mf-manifest.json',
      alias: 'auth',
    },
    {
      name: 'vite_provider',
      entry: 'http://localhost:8083/remoteEntry.js',
      type: 'module',
      alias: 'vite'
    },
  ],
  shared: {
    react: {
      version: '^17.0.1',
      scope: 'default',
      lib: () => React,
      shareConfig: {
        singleton: true,
      },
    },
    'react-dom': {
      version: '^17.0.1',
      scope: 'default',
      lib: () => ReactDOM,
      shareConfig: {
        singleton: true,
      },
    },
  },
});

ReactDOM.render(<App />, document.querySelector('#root'));
