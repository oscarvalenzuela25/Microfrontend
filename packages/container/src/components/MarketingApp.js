import React, { useRef, useEffect } from 'react';
import { mount } from 'marketing/MarketingApp';

const MarketingApp = () => {
  // Ref para referenciar el div donde se montara el componente
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      mount(ref.current);
    }
  }, []);

  return <div ref={ref} />;
};

export default MarketingApp;
