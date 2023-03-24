import { defineConfig } from 'vite';
import reactPlugin from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path from 'path';

export default defineConfig(({ mode }) => {
  return {
    plugins: [dts(), reactPlugin()],
    build: {
      minify: mode !== 'dev',
      lib: {
        entry: path.resolve(__dirname, './src/index.tsx'),
        fileName: (format) => 'index.mjs',
        formats: ['es'],
      },
      rollupOptions: {
        external: ['react', 'react/jsx-runtime'],
      },
    },
  };
});
