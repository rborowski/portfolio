<template >
  <v-container class="mt-16 mt-md-n16 d-flex px-0 px-md-10 container-max-w align-center  container-min-h" id="home">
    <div class="w-100">
       <v-row class="d-flex justify-center gr-5 gc-sm-10">
        <v-avatar
          :size="display.smAndUp.value? '280' : '200'"
          class="bg-gradient order-md-last align-self-center"
        >
          <v-img src="@/assets/img/selfie.png" position="60%"></v-img>
        </v-avatar>

        <v-card :class="{'w-100': !display.mdAndUp.value }" class="flex-1-0 px-8 py-3 py-sm-10 bg-gradient">
          <div class="text-subtitle-1 text-sm-h6  font-weight-light mb-1 text-background">
            Hi, I'm Rafał
          </div>
          <h1 class="text-h5 text-sm-h3 text-md-h2 font-weight-bold text-background">
            I create websites <br/> your users will love 
          </h1>
          <div :class="display.mdAndUp.value ? 'mt-10' : 'mt-4'">
            <v-btn
              color="background"
              :min-width="display.mdAndUp.value ? '228' : '160'"
              rel="noopener noreferrer"
              :size="display.smAndUp.value ? 'x-large' : 'medium'"
              variant="outlined"
              class="text-body-2 text-sm-h6 pa-2 px-sm-4 font-weight-medium"
              @click="appStore.scroll('contact')"
              >
              Make it happen
              <v-icon
              icon="mdi: mdi-send-variant-outline"
              :class="display.smAndUp.value ? 'pl-0' : 'pl-3'"
              end
              />
            </v-btn>
          </div>
        </v-card>      
      </v-row>
      <v-row class="mt-7 mt-md-12 pl-8">
        <div class="text-h6">Tech stack</div>
        <div></div>
      </v-row>
    </div>
     
    
  </v-container>
</template>

<script setup>
import { useAppStore } from "@/store/app";
import { useDisplay } from "vuetify";

const appStore = useAppStore()
const display = useDisplay()
</script>

<style scoped lang="sass">

$heights: calc(100dvh + 0px), calc(100% + 0px)
.container-min-h
  height: max-content
  min-height: 100dvh
  max-height: none
  overflow: hidden

.container-max-w
  max-width: 1200px
.max-w 
  max-width: 600px 
.bg-gradient
  background: linear-gradient(hsl(140, 69%, 69%), hsl(220, 69%, 69%))
body, html
  height: 100%
  width: 100%
  margin: 0

</style>