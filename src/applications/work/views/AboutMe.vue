<template>
  <v-container
    id="about-me"
    class="px-5 d-flex justify-space-around flex-column container-max-w container-min-h"
  >
    <v-lazy
      :options="{'threshold':0.5}"
      transition="fade-transition"
    >
      <div class="mx-md-10">
        <v-row class="d-flex justify-md-space-between gr-5">
          <v-col cols="12" md="6" class="description-max-w ">
            <AboutMeDescription/>
            <AboutMeActions/>
          </v-col>
          <v-col cols="auto" md="auto" >
            <AboutMeTechStack/>
          </v-col>
        </v-row>
      </div>
    </v-lazy>
  </v-container>
</template>

<style scoped lang="sass">
.description-max-w
  max-width: 650px
</style>