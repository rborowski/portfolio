<template>
  <v-app-bar flat fixed color="background" :location="display.mdAndUp.value? 'top' :'bottom'">
    <v-container class="max-w d-flex">
      <v-app-bar-title class="d-flex align-center"> 
        <v-btn
          :to="{ path: '/', hash: '' }"
          :active="false"
          class="text-none text-h6"
        >
          Rafał Borowski
        </v-btn>
      </v-app-bar-title>
      
      <v-spacer></v-spacer>
      <v-list bg-color="transparent">
        <template v-if="display.mdAndUp.value">
          <v-btn
            variant="text"
            :active="false"
            v-for="(navItem, index) in appStore.navItems"
            :key="index"
            :class="{'text-primary' : navItem.slug === appStore.currentView}"
            :to="{ path: navItem.page, hash: navItem.hash }"
          >
            {{ navItem.title }}
              <AppBarSubmenu
                v-if="navItem.submenu && navItem.submenu.length != 0"
                :submenu="navItem.submenu"
              >
              </AppBarSubmenu>
          </v-btn>
        </template>  
        <v-btn variant="text" icon="mdi: mdi-theme-light-dark" @click="appStore.toggleTheme"></v-btn>
        <v-app-bar-nav-icon @click="appStore.drawer = !appStore.drawer" v-if="!display.mdAndUp.value"></v-app-bar-nav-icon>
      </v-list>
    </v-container>
  </v-app-bar>
</template>

<script setup>
import { useAppStore } from "@app/store/app";
import { useDisplay } from "vuetify";
import AppBarSubmenu from './AppBarSubmenu.vue'

const display = useDisplay()
const appStore = useAppStore()

</script>
<style scoped lang="sass">
.max-w
  max-width: 1200px
.v-spacer
  flex-grow: 0
</style>