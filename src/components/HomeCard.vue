<template>
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
        <template #append>
          <v-icon
            icon="mdi: mdi-send-variant-outline"
            :class="display.smAndUp.value ? 'pl-0' : 'pl-3'"
          />  
        </template>
      </v-btn>
    </div>
  </v-card>
</template>

<script setup>
import { useAppStore } from "@/store/app";
import { useDisplay } from "vuetify";

const appStore = useAppStore()
const display = useDisplay()
</script>

<style scoped lang="sass">
.bg-gradient
  background: linear-gradient(to top left, #0799C7, #09FFD3)
</style>