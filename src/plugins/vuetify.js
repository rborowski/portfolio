/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@fortawesome/fontawesome-free/css/all.css'
import '@mdi/font/css/materialdesignicons.css'
//import 'vuetify/styles'
import '@/styles/settings.scss'

// Composables
import { createVuetify } from 'vuetify'
import { md3 } from 'vuetify/blueprints'
import { aliases, fa } from 'vuetify/iconsets/fa4'
import { mdi } from 'vuetify/iconsets/mdi'
import colors from 'vuetify/lib/util/colors';

// custom colors for dark and light mode
const appTheme = {
  dark: {
    colors: {
      primary: "0B6B5A",
      accent: "#FF4081",
      secondary: "#21dc79",
      success: "#86af3f",
      info: "#f34fc6",
      warning: "#FB8C00",
      error: "#FF5252",
      background: "#002423"
    }
  },
  light: {
    colors: {
    primary: "0B6B5A",
    accent: "#ff6b99",
    secondary: "#26ff8c",
    success: "#a5d64c",
    info: "#ff53d0",
    warning: "#ff8e00",
    error: "#ff5252"
    } 
  }
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  blueprint: md3,
  theme: {
    defaultTheme: "dark",
    themes: {
      light: appTheme.light,
      dark: appTheme.dark
    }
  },
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa, mdi
    },
  },
})
