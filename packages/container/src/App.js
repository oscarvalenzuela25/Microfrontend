import React from 'react';
import MarketingApp from './components/MarketingApp';

const App = () => {
  const domain = process?.env?.PRODUCTION_DOMAIN || '';
  console.log(domain);
  return <MarketingApp />;
};

export default App;
