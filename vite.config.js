import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/bomalogic/',
  build: {
    assetsInlineLimit: 4096, // Inline small assets as base64
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)) {
            return `images/[name]-[hash][extname]`;
          }
          return `[name]-[hash][extname]`;
        }
      }
    }
  }
});
