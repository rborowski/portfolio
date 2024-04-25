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
        variant="text"
        :active="false"
        v-for="navItem in appStore.navItems"
        :key="navItem.id"
        :class="{'text-primary' : navItem === appStore.currentView}"
        :to="{ path: '/', hash: `#${navItem}` }"
        @click="appStore.drawer = false"
      >
        {{ getPropperNavName(navItem) }}
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { useAppStore } from "@app/store/app";

const appStore = useAppStore()

function getPropperNavName(navName) {
  return (navName.charAt(0).toUpperCase() + navName.slice(1)).replace("-", " ")
}

</script>