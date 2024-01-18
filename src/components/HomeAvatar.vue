<template>
  <v-avatar :size="getSize" class="bg-gradient align-self-center">
    <v-img src="@/assets/img/selfie.png" position="60%"/>
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

<style scoped lang="sass">
.bg-gradient
  background: linear-gradient(to top left, #0799C7, #09FFD3)
</style>