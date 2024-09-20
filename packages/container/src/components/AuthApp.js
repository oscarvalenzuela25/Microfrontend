import React, { useRef, useEffect, Suspense } from 'react';
import { useHistory } from 'react-router-dom';
import { loadRemote } from '@module-federation/enhanced/runtime';
import ErrorBoundary from './ErrorBoundary';

const AuthApp = ({ onSignIn }) => {
  const ref = useRef(null);
  const history = useHistory();

  const mountMicrofrontend = async () => {
    const { mount } = await loadRemote('auth/AuthApp');

    // Con esto corregimos el problema del routeo cuando el hijo tiene navegacion interna
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathName }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathName) {
          history.push(nextPathName);
        }
      },
      onSignIn,
    });
    // Con este callback podemos escuchar los cambios de navegacion del hijo
    history.listen(onParentNavigate);
  };

  useEffect(() => {
    mountMicrofrontend();
  }, []);

  return (
    <ErrorBoundary>
      <Suspense fallback={<p>Loading...</p>}>
        <div ref={ref} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default AuthApp;
