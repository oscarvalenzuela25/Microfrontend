import React, { useRef, useEffect, Suspense } from 'react';
import { useHistory } from 'react-router-dom';
import { loadRemote } from '@module-federation/enhanced/runtime';
import ErrorBoundary from './ErrorBoundary';

const MarketingApp = () => {
  const ref = useRef(null);
  const history = useHistory();

  const mountMicrofrontend = async () => {
    // Esta es la forma para obtener funciones de un modulo remoto
    const { mount } = await loadRemote('marketing/MarketingApp');

    // Con esto corregimos el problema del routeo cuando el hijo tiene navegacion interna
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathName }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathName) {
          history.push(nextPathName);
        }
      },
    });
    // Con este callback podemos escuchar los cambios de navegacion del hijo
    history.listen(onParentNavigate);
  };

  useEffect(() => {
    mountMicrofrontend();
  }, []);

  // Esto es con la forma vieja de module federation 1.0
  // useEffect(() => {
  //   // Con esto corregimos el problema del routeo cuando el hijo tiene navegacion interna
  //   const { onParentNavigate } = mount(ref.current, {
  //     initialPath: history.location.pathname,
  //     onNavigate: ({ pathname: nextPathName }) => {
  //       const { pathname } = history.location;
  //       if (pathname !== nextPathName) {
  //         history.push(nextPathName);
  //       }
  //     },
  //   });
  //   // Con este callback podemos escuchar los cambios de navegacion del hijo
  //   history.listen(onParentNavigate);
  // }, []);

  return (
    <ErrorBoundary>
      <Suspense fallback={<p>Loading...</p>}>
        <div ref={ref} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default MarketingApp;
