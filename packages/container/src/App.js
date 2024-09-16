import React, { lazy, Suspense, useState } from 'react';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';
import Header from './components/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Progress from './components/Progress';

// Cuando se tienen las mismas librerias de framework de css, cuando se buildea el proyecto para prod
// Se generan clases con nombres iguales, para evitar esto se puede usar el metodo createGenerateClassName
// Entonces asi los hijos y padres que usen la misma libreria, no van a chocar con los nombres autogenerados
const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

const MarketingApp = lazy(() => import('./components/MarketingApp'));
const AuthApp = lazy(() => import('./components/AuthApp'));

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Header
          isSignedIn={isSignedIn}
          onSignOut={() => setIsSignedIn(false)}
        />
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route path="/auth">
              <AuthApp onSignIn={() => setIsSignedIn(true)} />
            </Route>
            <Route path="/" component={MarketingApp} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </StylesProvider>
  );
};

export default App;
