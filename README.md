## Microfrontend con Module Federation

App de prueba para ir testeando integraciones de microfrontend con diversas tecnologias

- [Link a la documentacion](https://module-federation.io/guide/start/features.html) de module federation
- Module federation proporciona varias opciones para su uso, la forma mas ocupada es la por [webpack](https://module-federation.io/guide/basic/webpack.html) pero actualmente sacaron una forma llamada [Federation Runtime](https://module-federation.io/guide/basic/runtime.html) que ya no es necesario hacer las configuraciones en el archivo webpack.
- Federation Runtime utiliza `remoteEntry` y `mf-manifest.json` sin problemas.
- Dependiendo del feature pueden instalar la libreria base (@module-federation/enhanced) o ir por la que necesitan [Link](https://module-federation.io/guide/start/npm-packages.html)
- Ahora con `Federation Runtime` puedes tener una app host con vite e integrarlo sin problemas, pero el problema surge cuando se quiere tener una app remota con vite y querer integrarlo con un host con MF.

### Apps con MF 2.0 Webpack

#### `container`

- type: Host
- React
- MF with webpack (No funciona con vite)
- App contained: auth, marketing, dashboard

#### `auth`

- type: Remote
- React
- MF with webpack

#### `marketing`

- type: Remote
- React
- MF with webpack

#### `dashboard`

- type: Remote
- Vue
- MF with webpack

### Apps con vite-plugin-federation o webpack configurada para funcionar con vite (modulos)

[Link a la documentacion](https://github.com/originjs/vite-plugin-federation)

#### `host-vite-app`

- type: Host
- React-ts
- MF vite with @originjs/vite-plugin-federation (Solo funciona con apps vite)
- App contained: remote-vite-app

#### `host-webpack-app`

- type: Host
- React-ts
- MF with webpack 5
- App contained: remote-vite-app (Funciona solo con vite por el uso de modulos)

#### `remote-vite-app`

- type: Remote
- React-ts
- MF vite with @originjs/vite-plugin-federation
