import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Signin from './components/Signin';
import Signup from './components/Signup';

// Cuando se tienen las mismas librerias de framework de css, cuando se buildea el proyecto para prod
// Se generan clases con nombres iguales, para evitar esto se puede usar el metodo createGenerateClassName
// Entonces asi los hijos y padres que usen la misma libreria, no van a chocar con los nombres autogenerados
const generateClassName = createGenerateClassName({
  productionPrefix: 'au',
});

const App = ({ history, onSignIn }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin">
              <Signin onSignIn={onSignIn} />
            </Route>
            <Route path="/auth/signup">
              <Signup onSignIn={onSignIn} />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};

export default App;
