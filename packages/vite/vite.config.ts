import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

export default defineConfig({
  server: {
    origin: "http://localhost:8083",
    port: 8083,
  },
  base: "http://localhost:8083/",
  plugins: [
    react(),
    federation({
      name: "vite_provider",
      filename: "remoteEntry.js",
      // remotes: {
      //   esm_remote: {
      //     type: "module",
      //     name: "esm_remote",
      //     entry: "https://[...]/remoteEntry.js",
      //   },
      //   var_remote: "var_remote@https://[...]/remoteEntry.js",
      // },
      exposes: {
        "./Content": "./src/App.tsx",
      },
      shared: { 
        react: { 
          singleton: true,
          version: '^17.0.1',
        }, 
        "react-dom": {
          singleton: true,
          version: '^17.0.1',
        }
      }
    }),
  ],
  build: {
    target: 'chrome89',
  },
});
