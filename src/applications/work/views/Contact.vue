<template>
  <v-container
    id="contact"
    class="px-0 px-md-5 d-flex justify-space-around flex-column container-max-w container-min-h"
  >
    <v-lazy
      :options="{'threshold':0.5}"
      transition="fade-transition"
    >
      <div>
        <div class="mx-md-10">
          <div class="px-5">
            <header class="section-header">
              Contact
            </header>
            <h1 class="text-h6 text-sm-h5 mb-sm-10 mb-6 ">
              Let's keep in touch 🤙
            </h1>
          </div>

          <v-row class="d-flex justify-md-space-between gr-5">
            <v-col cols="12" md="6" class=" px-0 px-md-5">
              <ContactCard/>
            </v-col>
            <v-col cols="auto" md="auto" m class="py-0 px-10" >
              <ContactFooter/>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-lazy>
  </v-container>
</template>

<script setup>
  //
</script>
