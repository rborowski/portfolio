<template>
  <v-row class="d-flex align-center mt-6">
    <v-col cols="auto">
      <v-btn
      color="primary"
      href="/BOROWSKI_CV_EN.pdf"
      :size="display.smAndUp.value ? 'x-large' : 'large'"
      target="_blank"
      class="text-background text-subtitle-1 text-sm-h6 px-3 px-sm-4 font-weight-medium"
      >
        Download CV
        <v-icon icon="mdi:mdi-download" end />
      </v-btn>
    </v-col>
    <v-col cols="auto">
      <v-btn
      :to="{ path: '/', hash: '#contact' }"
      :active="false"
      variant="text"
      class="text-background text-subtitle-2 px-3 px-sm-4 font-weight-medium"
      >
        Contact me
        <v-icon icon="mdi:mdi-send-variant-outline" end/>
    </v-btn>
  </v-col>
</v-row>
</template>
<script setup>
import { useDisplay } from "vuetify";

const display = useDisplay()
</script>