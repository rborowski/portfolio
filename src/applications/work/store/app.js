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
  const navItems = ref(["home", "about-me", "portfolio", "contact"])
  const currentView = ref("")
  
  function toggleTheme() {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  }

  const intersectionHandler = ref({
    handler: onIntersect,
    options: {
      threshold: [0, 0.5, 1.0]
    }
  })

  const intersecting = ref(false)

  function onIntersect(isIntersecting, entries, observer) {
    const intersecting_element = ref(entries[0])
    intersecting.value = intersecting_element.value.intersectionRatio >= 0.5
    if(intersecting.value){
      let id = intersecting_element.value.target.id
      currentView.value = id
      // location.hash = id
    }
  }


  return {
    intersectionHandler,
    appName,
    drawer,
    navItems,
    currentView,
    toggleTheme,
  };
});
