import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';
import Pricing from './components/Pricing';
import Landing from './components/Landing';

// Cuando se tienen las mismas librerias de framework de css, cuando se buildea el proyecto para prod
// Se generan clases con nombres iguales, para evitar esto se puede usar el metodo createGenerateClassName
// Entonces asi los hijos y padres que usen la misma libreria, no van a chocar con los nombres autogenerados
const generateClassName = createGenerateClassName({
  productionPrefix: 'ma',
});

const App = () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router>
        <Switch>
          <Route path="/pricing" component={Pricing} />
          <Route path="/" component={Landing} />
        </Switch>
      </Router>
    </StylesProvider>
  );
};

export default App;
