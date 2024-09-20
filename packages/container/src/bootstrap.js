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
      name: 'dashboard',
      entry: 'http://localhost:8083/mf-manifest.json',
      alias: 'dashboard',
    },
  ],
  shared: {
    react: {
      version: '17.0.1',
      scope: 'default',
      lib: () => React,
      shareConfig: {
        singleton: true,
        requiredVersion: '^17.0.1',
      },
    },
    'react-dom': {
      version: '17.0.1',
      scope: 'default',
      lib: () => ReactDOM,
      shareConfig: {
        singleton: true,
        requiredVersion: '^17.0.1',
      },
    },
  },
});

ReactDOM.render(<App />, document.querySelector('#root'));
