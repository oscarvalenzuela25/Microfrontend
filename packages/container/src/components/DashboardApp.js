import React, { useRef, useEffect, Suspense } from 'react';
import { loadRemote } from '@module-federation/enhanced/runtime';
import ErrorBoundary from './ErrorBoundary';

const DashboardApp = () => {
  const ref = useRef(null);

  const mountMicrofrontend = async () => {
    const { mount } = await loadRemote('dashboard/DashboardApp');
    mount(ref.current);
  };

  useEffect(() => {
    mountMicrofrontend();
  }, []);

  return (
    <ErrorBoundary>
      <Suspense fallback={<p>Loading...</p>}>
        <div ref={ref} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default DashboardApp;
