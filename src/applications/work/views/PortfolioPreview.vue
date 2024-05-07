<template>
  <v-container
  class="px-0 px-md-5 d-flex justify-space-around flex-column container-max-w container-min-h mb-10"
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
        v-for="(project, index) in projectsCurrentList"
        :key="project.id"
        :project="project"
        :index="index"
      >
      </Project>
      <div
        class="d-flex justify-center w-100 mt-5"
        v-if="portfoiloStore.projects.length >= maxProjectsCount"
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

const projectsCurrentList = computed(() => {
  if (props.maxProjectsCount > 0) {
    return portfoiloStore.projects.slice(0, props.maxProjectsCount)
  } else {
    return portfoiloStore.projects
  }
})

const props = defineProps({
    maxProjectsCount: {
      type: Number,
      default: 0 // if maxProjectsCount <= 0 then throw all projects. 
    }
  })
</script>
