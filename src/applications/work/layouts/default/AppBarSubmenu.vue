<template>
  <v-menu
    location="bottom center"
    activator="parent"
    open-on-hover
    open-on-focus
    close-on-content-click
  >
    <v-list bg-color="background" rounded="xl">
      <v-list-item
        v-for="(item, index) in submenu"
        :key="index"
        :active="false"
        :to="{ path: item.page, hash: item.hash }"
        variant="text"
        :class="item.slug === appStore.currentView ? 'text-primary' :'text-medium-emphasis'"
      >
        {{ item.title }}
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup>
import { useAppStore } from "@app/store/app";

const appStore = useAppStore()

defineProps({
  submenu: {
    type: Array,
    required: true,
  }
})

</script>