<template>
  <v-btn @click="appStore.scroll('about-me')" class="text-subtitle-1 text-primary" variant="text">
    <v-icon icon="fas fa-mouse" class="text-primary" start />
    Scroll down
    <v-icon icon="mdi: mdi-arrow-down" class="text-primary" end />
  </v-btn>
</template>

<script setup>
import { useAppStore } from "@app/store/app";
const appStore = useAppStore()
</script>