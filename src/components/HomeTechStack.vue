<template>
  <div class="d-block">
    <div class="text-h6">Tech stack</div>
    <div class="mt-1 d-flex align-center">
      <TechStackIconset />
      <v-btn
        @click="appStore.scroll('about-me')"
        class="text-subtitle-1 text-primary ml-4"
        variant="text"
      >
        Show more
        <v-icon icon="mdi: mdi-arrow-right" class="text-primary" />
      </v-btn>
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from "@/store/app";
const appStore = useAppStore()
</script>