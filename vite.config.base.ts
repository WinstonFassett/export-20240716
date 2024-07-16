import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {    
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', 'react-feather', 'framer-motion'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
          'react-feather': 'ReactFeather',
          'framer-motion': 'FramerMotion'          
        },
      },
    },
  },
})
