import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

const mount = (el, { onNavigate, onSignIn, defaultHistory, initialPath }) => {
  // Creamos esto para poder compartir el historial de navegacion desde el padre al hijo
  // Esto sucede cuando el hijo contiene navegacion interna
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} onSignIn={onSignIn} />, el);

  return {
    onParentNavigate: ({ pathname: nextPathName }) => {
      const { pathname } = history.location;
      if (pathname !== nextPathName) {
        history.push(nextPathName);
      }
    },
  };
};

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#_auth-dev-root');
  if (el) {
    // Para evitar problemas en ambientes de desarrollo, se crea un historial de navegacion
    mount(el, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };
