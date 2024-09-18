## Microfrontend con Module Federation

App de prueba para ir testeando integraciones de microfrontend con diversas tecnologias

### Apps

#### `container`

- type: Host
- React
- MF with webpack (No funciona con vite, solo con webpack remotes)
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

#### `host-vite-app`

- type: Host
- React-ts
- MF vite with @originjs/vite-plugin-federation
- App contained: remote-vite-app

#### `host-webpack-app`

- type: Host
- React-ts
- MF with webpack
- App contained: remote-vite-app (Funciona solo con vite)

#### `remote-vite-app`

- type: Remote
- React-ts
- MF vite with @originjs/vite-plugin-federation
