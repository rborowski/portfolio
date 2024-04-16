<template>
  <v-navigation-drawer
    v-model="appStore.drawer"
    color="background"
    location="bottom"
    width="280"
    disable-resize-watcher
    fixed
    flat
  >
    <v-list>
      <v-list-item
      v-for="navItem in appStore.navItems"
      :class="{'text-primary' : navItem === appStore.currentView}"
      @click="handleMenuClick(navItem)"
      variant="text"
      >
        {{ getPropperNavName(navItem) }}
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { useAppStore } from "@/store/app";

const appStore = useAppStore()

function getPropperNavName(navName) {
  return (navName.charAt(0).toUpperCase() + navName.slice(1)).replace("-", " ")
}

function handleMenuClick(navItem){
  appStore.scroll(navItem)
  appStore.drawer = false
}
</script>