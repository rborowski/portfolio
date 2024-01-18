<template >
  <v-container
    class="d-flex mt-16 mt-md-n16 px-0 px-md-5 justify-md-space-around justify-center d-flex flex-column align-center container-max-w container-min-h"
    id="home">
      <div v-if="display.mdAndUp.value" />
      <div class="w-100 ">
        <div class="d-flex justify-space-between gr-5 gc-sm-5 gc-lg-10 flex-wrap">
          <HomeSocial class="pl-3 pl-md-0" />
          <HomeAvatar class="order-md-last" />
          <div v-if="!display.mdAndUp.value" class="pr-15" />
          <HomeCard class="mx-n3 mx-md-0" />
        </div>
        <div class="mt-7 mt-md-12 ml-md-16 px-8">
          <HomeTechStack />
        </div>
      </div>
      <div class="w-100 ml-md-16 px-13" v-if="display.mdAndUp.value">
        <HomeScrollDown />
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