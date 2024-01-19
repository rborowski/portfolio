<template>
  <div class="d-block">
    <div class="text-h6">Tech stack</div>
    <div class="mt-1 d-flex align-center flex-wrap">
      <TechStackIconset :icon-list="iconList" :size="iconSize" />
      <v-btn
        @click="appStore.scroll('about-me')"
        class="text-subtitle-2 text-primary my-2 ml-n1 ml-sm-2"
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
  "javascript",
  "python",
  "php",
  "vue",
  "vuetifyjs",
  "vitejs",
  "nodejs-icon",
  "mongodb-icon",
  "firebase"
]

const iconSize = computed(() => {
  if (display.sm.value) return 30
  if (display.md.value) return 35
  if (display.lgAndUp.value) return 40
  return 21
})

</script>