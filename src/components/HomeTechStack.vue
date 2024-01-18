<template>
  <div class="d-block">
    <div class="text-h6">Tech stack</div>
    <div class="mt-1 d-flex align-center flex-wrap">
      <TechStackIconset :icon-list="iconList" :size="iconSize" />
      <v-btn
        @click="appStore.scroll('about-me')"
        class="text-subtitle-2 text-primary my-2 ml-n1"
        variant="outlined"
      >
        Show more
        <v-icon icon="mdi: mdi-arrow-right" class="text-primary" end />
      </v-btn>
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from "@/store/app";
import { computed } from "vue";
import { useDisplay } from "vuetify";

const display = useDisplay()
const appStore = useAppStore()

const iconList = [
  "js",
  "python",
  "php",
  "vue",
  "vuetify",
  "vite",
  "node",
  "mongo"
]

const iconSize = computed(() => {
  if (display.sm.value) return 70
  if (display.md.value) return 90
  if (display.lgAndUp.value) return 120
  return 25
})

</script>