import { resolve } from 'path'
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts';
import baseConfig from './vite.config.base.js';

export default defineConfig({
  ...baseConfig,
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'SpliffyUI',
      // the proper extensions will be added
      fileName: 'spliffy-ui',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', 'react-dom', 'react/jsx-runtime', '@chakra-ui/react', 'react-feather', 'framer-motion'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
          '@chakra-ui/react': 'ChakraUIReact',
          'react-feather': 'ReactFeather',
          'framer-motion': 'FramerMotion'          
        },
      },
    },
  },
  
});