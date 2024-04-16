<template>
  <v-card :class="{'w-100': !display.mdAndUp.value }" class="flex-1-0 bg-gradient px-8 py-3 py-sm-10 bg-gradient">
    <div class="text-subtitle-1 text-sm-h6  font-weight-light mb-1 text-background">
      Hire me
    </div>
    <h1 class="text-h5 text-sm-h4 text-md-h3 font-weight-bold text-background">
      For your next <br/> big project!
    </h1>




    <div :class="display.mdAndUp.value ? 'mt-10' : 'mt-4'">
      <v-btn
        color="background"
        :min-width="display.mdAndUp.value ? '228' : '160'"
        rel="noopener noreferrer"
        :size="display.smAndUp.value ? 'x-large' : 'medium'"
        variant="outlined"
        class="text-body-2 text-sm-h6 pa-2 px-sm-4 font-weight-medium"
        href="mailto:rborowski.gdy@gmail.com"
      >
        Send email
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
import { useAppStore } from "@app/store/app";
import { useDisplay } from "vuetify";

const appStore = useAppStore()
const display = useDisplay()
</script>