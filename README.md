## Microfrontend con Module Federation

App de prueba para ir testeando integraciones de microfrontend con diversas tecnologias

- [Link a la documentacion](https://module-federation.io/guide/start/features.html)
- Module federation proporciona varias opciones para su uso, la forma mas ocupada es la por [webpack](https://module-federation.io/guide/basic/webpack.html) pero actualmente sacaron una forma llamada [Federation Runtime](https://module-federation.io/guide/basic/runtime.html) que ya no es necesario hacer las configuraciones en el archivo webpack.
- Dependiendo del feature pueden instalar la libreria base (@module-federation/enhanced) o ir por la que necesitan [Link](https://module-federation.io/guide/start/npm-packages.html)

### Apps con Webpack 5 OLD

#### `container`

- type: Host
- React
- MF with webpack 5 (No funciona con vite, solo con webpack remotes por temas de modulos)
- App contained: auth, marketing, dashboard

#### `auth`

- type: Remote
- React
- MF with webpack 5

#### `marketing`

- type: Remote
- React
- MF with webpack 5

#### `dashboard`

- type: Remote
- Vue
- MF with webpack 5

### Apps con vite-plugin-federation o webpack 5 configurada para funcionar con modulos

[Link a la documentacion](https://module-federation.io/guide/basic/webpack.html)

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
