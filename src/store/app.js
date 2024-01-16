// Main state management store

import { defineStore } from "pinia";
import { useTheme } from 'vuetify'
import { ref } from "vue";


export const useAppStore = defineStore("app", () => {
  const theme = useTheme()
  
  // environment variables accessible globally 
  const appName = import.meta.env.VITE_APP_NAME;

  //Views and navigation
  const drawer = ref(false)
  const navItems = ref(["home", "about-me", "portfolio", "testimonials", "contact"])
  const currentView = ref("home")

  function scroll(refName) {
    const elem = document.getElementById(refName);
    elem.scrollIntoView({behavior: "smooth"})
  }
  
  function toggleTheme() {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  }

  return {
    appName,
    drawer,
    navItems,
    currentView,
    scroll,
    toggleTheme,
  };
});
