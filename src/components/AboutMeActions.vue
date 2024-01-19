<template>
  <v-row class="d-flex align-center mt-10">
    <v-col cols="auto">
      <v-btn
      color="primary"
      href="/BOROWSKI_CV_EN.pdf"
      :size="display.smAndUp.value ? 'x-large' : 'large'"
      target="_blank"
      class="text-background"
      >
        DOWNLOAD CV
        <v-icon icon="mdi:mdi-download" end />
      </v-btn>
    </v-col>
    <v-col cols="auto">
      <v-btn
      @click="appStore.scroll('contact')"
      variant="text"
      >
        Contact me
        <v-icon icon="mdi:mdi-send-variant-outline" end/>
    </v-btn>
  </v-col>
</v-row>
</template>
<script setup>
import { useAppStore } from "@/store/app";
import { useDisplay } from "vuetify";

const display = useDisplay()
const appStore = useAppStore()
</script>