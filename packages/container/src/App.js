import React from 'react';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <div>
          <Header />
          <MarketingApp />
        </div>
      </Switch>
    </Router>
  );
};

export default App;
