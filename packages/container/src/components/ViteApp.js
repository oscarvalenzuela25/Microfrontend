import React, { Suspense, lazy } from 'react'
import { loadRemote } from '@module-federation/enhanced/runtime'
import ErrorBoundary from './ErrorBoundary'

const ViteApp = () => {
  const RemoteApp = lazy(() =>
    loadRemote('vite_provider/Content')
      .then(module => {
        console.log('Remote module loaded =>', module)
        return { default: module.default }
      })
      .catch(error => {
        console.log('Error loading remote module =>', error)
        return { default: () => <div>Failed to load remote</div> }
      })
  )

  // const RemoteApp = lazy(() =>
  //   import("@module-federation/enhanced/runtime")
  //     .then(({ loadRemote }) => loadRemote("vite/Content"))
  //     .then((module) => {
  //       console.log("Remote module loaded =>", module);
  //       return { default: module.default };
  //     })
  //     .catch((error) => {
  //       console.error("Error loading remote module =>", error);
  //       return { default: () => <div>Failed to load remote</div> };
  //     })
  // );

  return (
    <ErrorBoundary>
      <Suspense fallback={<p>Loading...</p>}>
        <RemoteApp />
      </Suspense>
    </ErrorBoundary>
  )
}

export default ViteApp
