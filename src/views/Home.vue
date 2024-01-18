<template >
  <v-container class="mt-16 mt-md-n16 d-flex px-0 px-md-10 container-max-w align-center flex-column justify-space-around  container-min-h" id="home">
    <div v-if="display.mdAndUp.value"></div>
    <div class="w-100">
      <v-row class="d-flex justify-center gr-5 gc-sm-10">
        <HomeSocial/>
        <HomeAvatar class="order-md-last"/>
        <HomeCard/>
      </v-row>
      <v-row class=" mt-7 mt-md-12 pl-8">
        <HomeTechStack/>
      </v-row>
    </div>
    <div class="w-100" v-if="display.mdAndUp.value">
      <HomeScrollDown/>
    </div>
  </v-container>
</template>

<script setup>
import { useDisplay } from "vuetify";

const display = useDisplay()
</script>

<style scoped lang="sass">
.container-min-h
  height: max-content
  min-height: 100dvh
  max-height: none
  overflow: hidden

.container-max-w
  max-width: 1200px
</style>