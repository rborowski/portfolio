<template >
  <v-container
    class="mt-md-n16 px-0 px-md-5 d-flex justify-space-around flex-column container-max-w container-min-h"
  >
      <div v-if="display.mdAndUp.value" />
      <div class="w-100">
        <div class="d-flex justify-space-between gr-5 gc-sm-5 gc-lg-10 flex-wrap">
          <HomeSocial class="pl-3 pl-md-0" />
          <HomeAvatar class="order-md-last" />
          <div v-if="!display.mdAndUp.value" class="pr-15" />
          <HomeCard class="mx-n3 mx-md-0" />
        </div>
        <div class=" mt-7 mt-md-12 mx-md-16 px-5 px-md-10">
          <HomeTechStack />
        </div>
      </div>
      <div class=" mx-md-16 px-10" v-if="display.mdAndUp.value">
        <HomeScrollDown />
      </div>
  </v-container>
</template>

<script setup>
import { useDisplay } from "vuetify";

const display = useDisplay()
</script>
