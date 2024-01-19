<template>
  <div class="section-header">
    My Tech Stack
  </div>
  <div class="text-subtitle-1 mb-1">
    Languages
  </div>
  <TechStackIconset :icon-list="iconLists.languages" :size="iconSize" />
  <div class="text-subtitle-1 mb-1">
    Frontend
  </div>
  <TechStackIconset :icon-list="iconLists.frontend" :size="iconSize" />
  <div class="text-subtitle-1 mb-1">
    Backend
  </div>
  <TechStackIconset :icon-list="iconLists.backend" :size="iconSize" />
  <div class="text-subtitle-1 mb-1">
    Tools
  </div>
  <TechStackIconset :icon-list="iconLists.tools" :size="iconSize" />
  <div class="mb-15"></div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useDisplay } from "vuetify";

const display = useDisplay()

const iconLists = ref({
  languages: [
    "javascript",
    "python",
    "php",
  ],
  frontend: [
    "vue",
    "vuetifyjs",
    "sass",
    "bulma",
    "bootstrap",
    "tailwindcss-icon",
  ],
  backend: [
    "nodejs-icon",
    "wordpress-icon",
    "mongodb-icon",
    "firebase",
    "mysql-icon",

  ],
  tools: [
    "visual-studio-code",
    "pycharm",
    "terminal",
    "yarn",
    "git-icon",
    "github-icon",
    "vitejs",
    "docker-icon",
  ],
})

const iconSize = computed(() => {
  if (display.sm.value || display.md.value) return 32
  if (display.lgAndUp.value) return 37
  return 22
})
</script>