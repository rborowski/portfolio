<template>
  <v-avatar :size="display.smAndUp.value ? '280' : '200'" class="bg-gradient align-self-center">
    <v-img src="@/assets/img/selfie.png" position="60%"/>
  </v-avatar>
</template>

<script setup>
import { useDisplay } from "vuetify";
const display = useDisplay()
</script>

<style scoped lang="sass">
.bg-gradient
  background: linear-gradient(to top left, #0799C7, #09FFD3)
</style>