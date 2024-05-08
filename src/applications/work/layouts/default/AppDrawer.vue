<template>
  <v-navigation-drawer
    v-model="appStore.drawer"
    v-if="!display.mdAndUp.value"
    color="background"
    location="bottom"
    width="280"
    disable-resize-watcher
    fixed
    flat
  >
    <v-list>
      <template
        v-for="(navItem, index) in appStore.navItems"
        :key="index"
      >
        <v-list-item
          variant="text"
          :active="false"
          :class="{'text-primary' : navItem.slug === appStore.currentView}"
          :to="{ path: navItem.page, hash: navItem.hash }"
          @click="appStore.drawer = false"
        >
          {{ navItem.title }}
        </v-list-item>
        
        <template v-if="navItem.submenu && navItem.submenu.length != 0">
          <v-list-item
            v-for="(item, index) in navItem.submenu"
            :key="index"  
            :active="false"
            :to="{ path: item.page, hash: item.hash }"
            variant="text"
            class="pl-10"
            :class="item.slug === appStore.currentView ? 'text-primary' :'text-medium-emphasis'"
            @click="appStore.drawer = false"
          >
            {{ item.title }}
          </v-list-item>
        </template>

      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { useAppStore } from "@app/store/app";
import { useDisplay } from "vuetify";

const display = useDisplay()
const appStore = useAppStore()

</script>