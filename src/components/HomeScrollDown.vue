<template>
  <v-btn
    :active="false"
    :to="{ path: '/', hash: '#about-me' }"
    class="text-subtitle-1 text-primary"
    variant="text"
  >
    <v-icon icon="mdi: mdi-mouse" class="text-primary" start />
    Scroll down
    <v-icon icon="mdi: mdi-arrow-down" class="text-primary" end />
  </v-btn>
</template>

<script setup>
//
</script>