import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  if (command === 'build') {
    return {
      ...devConfig,
      ssr: {
        // todo?
      },
    };
  }

  return devConfig;
});

const devConfig = {
  plugins: [react(), cssInjectedByJsPlugin()],

  build: {
    rollupOptions: {
      input: './src/main.tsx',
      output: {
        manualChunks: undefined,
      },
    },
  },
};
