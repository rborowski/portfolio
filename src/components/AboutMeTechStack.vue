<template>
  <div class="section-header">
    My Tech Stack
  </div>
  <div class="text-subtitle-1 mb-1">
    Primary technologies
  </div>
  <TechStackIconset :icon-list="iconLists.topTechnology" :size="iconSize" />
  <div class="text-subtitle-1 mb-1">
    Supporting technologies
  </div>
  <TechStackIconset :icon-list="iconLists.wellKnown" :size="iconSize" />
  <div class="text-subtitle-1 mb-1">
    Database technology
  </div>
  <TechStackIconset :icon-list="iconLists.databases" :size="iconSize" />
  <div class="text-subtitle-1 mb-1">
   Testing and code quality tools
  </div>
  <TechStackIconset :icon-list="iconLists.toolsQuality" :size="iconSize" />
  <div class="text-subtitle-1 mb-1">
    Development Tools
  </div>
  <TechStackIconset :icon-list="iconLists.tools" :size="iconSize" />
  <div class="mb-15"></div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useDisplay } from "vuetify";
import { useAppStore } from "@app/store/app";

const appStore = useAppStore()
const display = useDisplay()

const iconLists = appStore.aboutMeIconset

const iconSize = computed(() => {
  if (display.sm.value || display.md.value) return 32
  if (display.lgAndUp.value) return 37
  return 22
})
</script>