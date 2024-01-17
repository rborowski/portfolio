<template >
  <v-container class="mt-16 mt-md-n16 d-flex px-0 px-md-10 container-max-w align-center flex-column justify-space-around  container-min-h" id="home">
    <div v-if="display.mdAndUp.value"></div>
    <div class="w-100">
      <v-row class=" d-flex justify-center gr-5 gc-sm-10">
        <div class="d-flex flex-column justify-center align-self-left">
          <v-btn icon="mdi: mdi-github" variant="text" class="text-primary d-block"/>
          <v-btn icon="mdi: mdi-linkedin" variant="text" class="text-primary d-block"/>
        </div>
        <v-avatar
          :size="display.smAndUp.value? '280' : '200'"
          class="bg-gradient order-md-last align-self-center"
        >
          <v-img  src="@/assets/img/selfie.png" position="60%"/>
        </v-avatar>
        
        <HomeCard />
      </v-row>
      <v-row class="d-block mt-7 mt-md-12 pl-8">
        <div class="text-h6">Tech stack</div>
        <div class="mt-1 d-flex align-center">
          <TechStackIconset/>
          <v-btn
            @click="appStore.scroll('about-me')"
            class="text-subtitle-1 text-primary ml-4"
            variant="text"
          >
          Show more 
          <v-icon icon="mdi: mdi-arrow-right" class="text-primary"/>
        </v-btn>
        </div>
      </v-row>
    </div>
    <div class="w-100">
      <v-btn
        v-if="display.mdAndUp.value"
        @click="appStore.scroll('about-me')"
        class="text-subtitle-1 text-primary ml-4"
        variant="text"
      >
      <v-icon icon="fas fa-mouse" class="text-primary" start/>
        Scroll down 
        <v-icon icon="mdi: mdi-arrow-down" class="text-primary" end/>
      </v-btn>  
    </div>
  </v-container>
</template>

<script setup>
import { useDisplay } from "vuetify";
import { useAppStore } from "@/store/app";

const display = useDisplay()
const appStore = useAppStore()
</script>

<style scoped lang="sass">
.container-min-h
  height: max-content
  min-height: 100dvh
  max-height: none
  overflow: hidden

.container-max-w
  max-width: 1200px

.bg-gradient
  background: linear-gradient(to top left, #0799C7, #09FFD3)
</style>