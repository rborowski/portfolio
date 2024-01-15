<template>
  <v-navigation-drawer fixed v-model="drawer" location="bottom" flat color="background">
      <!--  -->

    </v-navigation-drawer>
  <v-app-bar flat style="position:fixed" color="background" class="px-12" absolute>
    <v-app-bar-title>
      {{ appStore.appName }}
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <div>
      <v-btn
        v-for="navItem in navItems"
        :class="{'text-primary' : navItem === currentComponent}"
        @click="scroll(navItem)"
        variant="text"
      >
      {{ getPropperNavName(navItem) }}
      </v-btn>
      <v-btn variant="text" icon="mdi: mdi-theme-light-dark" @click="toggleTheme"></v-btn>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </div>
  </v-app-bar>
</template>

<script setup>
import { useAppStore } from "@/store/app";
import { ref } from "vue";
import { useTheme } from 'vuetify'

const theme = useTheme()

const appStore = useAppStore()
const drawer = ref(false)
const currentComponent = ref("home")
const navItems = ["home", "about-me", "portfolio", "testimonials", "contact"]

function getPropperNavName(navName) {
  return (navName.charAt(0).toUpperCase() + navName.slice(1)).replace("-", " ")
}

function scroll(refName) {
  const elem = document.getElementById(refName);
  elem.scrollIntoView({behavior: "smooth"})
}

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>