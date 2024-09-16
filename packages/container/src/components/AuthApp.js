import React, { useRef, useEffect } from 'react';
import { mount } from 'auth/AuthApp';
import { useHistory } from 'react-router-dom';

const AuthApp = ({ onSignIn }) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    if (ref.current) {
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
    }
  }, []);

  return <div ref={ref} />;
};

export default AuthApp;
