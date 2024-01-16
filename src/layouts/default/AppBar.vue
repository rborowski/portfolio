<template>
  <v-app-bar flat fixed color="background" :location="display.mdAndUp.value? 'top' :'bottom'">
    <v-container class="max-w d-flex">
      <v-app-bar-title class="d-flex align-center">
        Rafał Borowski
      </v-app-bar-title>
      
        <v-spacer></v-spacer>
        <v-list bg-color="transparent">
          <template v-if="display.mdAndUp.value">
          <v-btn
            v-for="navItem in appStore.navItems"
            :class="{'text-primary' : navItem === appStore.currentView}"
            @click="appStore.scroll(navItem)"
            variant="text"
          >
          {{ getPropperNavName(navItem) }}
          </v-btn>
        </template>  
        <v-btn variant="text" icon="mdi: mdi-theme-light-dark" @click="appStore.toggleTheme"></v-btn>
        <v-app-bar-nav-icon @click="appStore.drawer = !appStore.drawer" v-if="!display.mdAndUp.value"></v-app-bar-nav-icon>
        </v-list>
    </v-container>
        

  </v-app-bar>
</template>

<script setup>
import { useAppStore } from "@/store/app";
import { useDisplay } from "vuetify";

const display = useDisplay()
const appStore = useAppStore()

function getPropperNavName(navName) {
  return (navName.charAt(0).toUpperCase() + navName.slice(1)).replace("-", " ")
}
</script>
<style scoped lang="sass">
.max-w
  max-width: 1200px
.v-spacer
  flex-grow: 0
</style>