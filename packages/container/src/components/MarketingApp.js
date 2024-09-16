import React, { useRef, useEffect } from 'react';
import { mount } from 'marketing/MarketingApp';
import { useHistory } from 'react-router-dom';

const MarketingApp = () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
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
  }, []);

  return <div ref={ref} />;
};

export default MarketingApp;
