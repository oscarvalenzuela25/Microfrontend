import React from 'react';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

// Cuando se tienen las mismas librerias de framework de css, cuando se buildea el proyecto para prod
// Se generan clases con nombres iguales, para evitar esto se puede usar el metodo createGenerateClassName
// Entonces asi los hijos y padres que usen la misma libreria, no van a chocar con los nombres autogenerados
const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

const App = () => {
  return (
    <Router>
      <Switch>
        <StylesProvider generateClassName={generateClassName}>
          <div>
            <Header />
            <MarketingApp />
          </div>
        </StylesProvider>
      </Switch>
    </Router>
  );
};

export default App;
