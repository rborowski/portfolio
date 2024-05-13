<template>
  <v-avatar :size="getSize" class="bg-gradient align-self-center elevation-4" >
    <v-img src="@/assets/img/selfie.png" position="0 20%"/>
  </v-avatar>
</template>

<script setup>
import { computed } from "vue";
import { useDisplay } from "vuetify";
const display = useDisplay()

const getSize = computed(() => {
  if (display.sm.value || display.md.value) return "230"
  if (display.lgAndUp.value) return "300" 
  return '180'
})
</script>