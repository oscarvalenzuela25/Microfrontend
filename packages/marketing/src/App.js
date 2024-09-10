import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core';
import Pricing from './components/Pricing';
import Landing from './components/Landing';

const App = () => {
  return (
    <StylesProvider>
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
