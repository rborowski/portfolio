<template>
  <v-card :class="{'w-100': !display.mdAndUp.value }" class="flex-1-0 bg-gradient px-8 py-3 py-sm-10 bg-gradient">
    <div class="text-subtitle-1 text-sm-h6  font-weight-light mb-1 text-background">
      Hi, I'm Rafał
    </div>
    <h1 class="text-h5 text-sm-h3 text-md-h2 font-weight-bold text-background">
      I create software <br/> your users will love 
    </h1>
    <div :class="display.mdAndUp.value ? 'mt-10' : 'mt-4'">
      <v-btn
        color="background"
        :min-width="display.mdAndUp.value ? '228' : '160'"
        rel="noopener noreferrer"
        :size="display.smAndUp.value ? 'x-large' : 'medium'"
        variant="outlined"
        class="text-body-2 text-sm-h6 pa-2 px-sm-4 font-weight-medium"
        :to="{ path: '/', hash: '#contact' }"
        :active="false"
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
import { useDisplay } from "vuetify";

const display = useDisplay()
</script>