<template>
  <v-row class="d-flex justify-md-space-between mt-2 mb-10" >
    <v-col
      class="px-8 d-flex flex-column justify-space-between"
      :class="{'description-max-w' : display.mdAndUp.value}"
      cols="12"
      md="6"
    >
      <ProjectDescription :project="project"/>
      <ProjectActions :project="project"/>
    </v-col>
    <v-col
      :class="{'order-md-first': index % 2 === 0}"
      class="px-0 px-md-8 "
      cols="12"
      md="6"
    >
      <v-hover v-slot="{ isHovering, props }">
        <v-card
          v-bind="props"
          :image="'/images/portfolio/' + project.photo"
          class="mx-auto w-100"
          :height="display.sm.value ? '450' : '250'"
          cover
        >
          <v-overlay
              :model-value="isHovering || project.inProgress"
              class="align-center justify-center"
              scrim="background"
              opacity="0.7"
              contained
              persistent
              no-click-animation
            >
              <div
                v-if="project.inProgress"
                class="text-h5 text-center"
              >
                In progress
              </div> 
              <ProjectActions v-else :project="project"/>
          </v-overlay>
      </v-card>
    </v-hover>
    </v-col>
  </v-row>
</template>

<script setup>
import { useDisplay } from "vuetify";

const display = useDisplay()

defineProps({
  project: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  } 
})

</script>

<style scoped lang="sass">
.description-max-w
  max-width: 650px
</style>
