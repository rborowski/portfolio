<template>
  <v-container
  class="px-0 px-md-5 pt-4 pt-md-16 mb-10 d-flex justify-space-around flex-column container-max-w container-min-h"
  style="position:relative"
  >
  <v-lazy
    :options="{'threshold':0.5}"
    transition="fade-transition"
  >
    <div class="mx-md-10">
      <div class="px-5">
        <header class="section-header">
          Portfolio
        </header>
        <h1 class="text-h6 text-sm-h5 mb-sm-10 mb-6 ">
          Each project is a unique piece of code 🍰
        </h1>
      </div>
      <Project
        v-for="(project, index) in exposedProjects"
        :key="index"
        :project="project"
        :index="index"
      >
      </Project>
      <div
        class="d-flex justify-center w-100 mt-5"
        v-if="portfoiloStore.projects.length > exposedProjects.length"
      >
        <v-btn
        @click="$router.push('/portfolio')"
        class="text-background text-subtitle-1 text-sm-h6 px-3 px-sm-4 font-weight-medium"
        size="large"
        >
          Show more projects
          <v-icon icon="mdi:mdi-arrow-right" end/>
        </v-btn>
      </div>
    </div>
  </v-lazy>
  </v-container>
</template>

<script setup>
import { usePortfolioStore } from "@app/store/portfolio";
import { computed } from "vue";

const portfoiloStore = usePortfolioStore()

const exposedProjects = computed(() => {
  return portfoiloStore.projects
    .filter((project) => project.onMain)
    .sort((a, b) => a.onMain - b.onMain)
})

</script>
