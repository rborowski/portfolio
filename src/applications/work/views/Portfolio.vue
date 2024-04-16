<template>
  <v-container
    id="portfolio-a"
    class="px-0 px-md-5 d-flex justify-space-around flex-column container-max-w container-min-h mb-10"
    style="position:relative"
  >
  <div id="portfolio" style="position: absolute; top: -48px; left: 0"></div> 
    <div class="mx-md-10">
      <div class="px-5">
        <header class="section-header">
          Portfolio
        </header>
        <h1 class="text-h6 text-sm-h5 mb-sm-10 mb-6 ">
          Each project is a unique piece of code 🍰
        </h1>
      </div>
      <!-- 1 row per project, each row switch columns -->
      <v-row
        v-for="(project, index) in portfoiloStore.projects"
        :key="project.id"
        class="d-flex justify-md-space-between mb-10"
      >
        <v-col cols="12" md="6" class="description-max-w px-8 d-flex flex-column justify-space-between">
          <ProjectDescription :project="project"/>
          <ProjectActions :project="project"/>
        </v-col>
        <v-col cols="12" md="6" class="px-0 px-md-8 " :class="{'order-md-first': index % 2 === 0}">
          <v-card
            :image="'portfolio/' + project.photo"
            class="mx-auto w-100"
            :height="250"
            cover
          /> 
        </v-col>
      </v-row>
    </div>
    <div class="d-flex align-center w-100 mt-5 mx-6 mx-md-16" v-if="maxProjectsCount && portfoiloStore.projects.length > 4">
      <v-btn
      @click="$router.push('/portfolio')"
      variant="outlined"
      class="text-background text-subtitle-2 px-3 px-sm-4 font-weight-medium"
      >
        Show more projects
        <v-icon icon="mdi:mdi-arrow-right" end/>
      </v-btn>
    </div>
  </v-container>
</template>

<script setup>
import { usePortfolioStore } from "@app/store/portfolio";

const portfoiloStore = usePortfolioStore()

const props = defineProps({
    maxProjectsCount: {
      type: Number,
      default: 0 // if maxProjectsCount === 0 then throw all projects. 
    }
  })
</script>

<style scoped lang="sass">
.description-max-w
  max-width: 650px
</style>
