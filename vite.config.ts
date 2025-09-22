import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import tailwindcss from '@tailwindcss/vite'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

export default defineConfig({
  plugins: [react(), dts({ insertTypesEntry: true }), tailwindcss(), libInjectCss()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'ComponentsUI',
      formats: ['es', 'umd'],
      fileName: (format) => `components-ui.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
})
