// Plugins
import Components from 'unplugin-vue-components/vite'
import Vue from '@vitejs/plugin-vue'
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import ViteFonts from 'unplugin-fonts/vite'
import Layouts from 'vite-plugin-vue-layouts'
import VueRouter from 'unplugin-vue-router/vite'

// Utilities
import { defineConfig } from 'vite'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      routesFolder: ["src/applications/work/pages"]
    }
    ),
    Layouts({
      layoutsDirs: "layouts",
      pagesDirs: "pages",
    }
    ),
    Vue({
      template: { transformAssetUrls }
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
    Vuetify({
      autoImport: true,
      styles: {
        configFile: '../../styles/settings.scss',
      },
    }),
    Components({
      dirs: ['../../../src/components'],
    }),
    ViteFonts({
      google: {
        families: [{
          name: 'Ruda',
          styles: 'wght@100;300;400;500;700;900',
        }],
      },
    }),
  ],
  envDir: "../../../",
  root: "./src/applications/work", //where index.html entry file located
  publicDir:"../../../public",
  build: {
    outDir: '../../../dist/work', // Target catalog for build
    emptyOutDir: true,
    rollupOptions: {
      input: {work: "./src/applications/work/index.html"},
      output: {  // here define naming pattern and directories for assets
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        
        assetFileNames: ({name}) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')){
              return 'assets/images/[name]-[hash][extname]';
          }
          
          if (/\.css$/.test(name ?? '')) {
              return 'assets/css/[name]-[hash][extname]';   
          }

          if (/\.(ttf|woff2?|eot)$/.test(name ?? '')){
            return 'assets/fonts/[name]-[hash][extname]';
          }
 
          // default value
          // ref: https://rollupjs.org/guide/en/#outputassetfilenames
          return 'assets/[name]-[hash][extname]';
        },
      },
    }
  },
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // Alias for common assets and components
      '@app': resolve(__dirname, 'src/applications/work'), // Alias for application resources
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },
  server: {
    port: 3000,
  },
})
