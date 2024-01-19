<template>
  <v-container
    id="contact"
    class="px-0 px-md-5 d-flex justify-space-around text-center flex-column container-max-w container-min-h"
  >
    <div>
      <v-responsive><v-img max-height="300" src="@/assets/logo.svg" /></v-responsive>  
      <div>
        <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>
        <h1 class="text-h2 font-weight-bold">Vuetify</h1>
      </div>

      <div class="py-14"></div>

      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <v-btn
            href="https://vuetifyjs.com/components/all/"
            min-width="164"
            rel="noopener noreferrer"
            target="_blank"
            variant="text"
          >
            <v-icon
              icon="mdi:mdi-view-dashboard"
              size="large"
              start
            />
            Components
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn
            color="primary"
            href="https://vuetifyjs.com/introduction/why-vuetify/#feature-guides"
            min-width="228"
            rel="noopener noreferrer"
            size="x-large"
            target="_blank"
            variant="flat"
          >
            <v-icon
              icon="mdi:mdi-speedometer"
              size="large"
              start
            />
            Get Started
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn
            href="https://community.vuetifyjs.com/"
            min-width="164"
            rel="noopener noreferrer"
            target="_blank"
            variant="text"
          >
            <v-icon
              icon="mdi:mdi-account-group"
              size="large"
              start
            />
            Community
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script setup>
  //
</script>
