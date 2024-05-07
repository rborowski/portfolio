<template>
  <v-container
  class="mt-16 mt-md-n16 px-0 px-md-5 d-flex justify-space-around flex-column container-max-w container-min-h mb-10"
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
        v-for="(project, index) in visibleProjects"
        :key="project.id"
        :project="project"
        :index="index"
      >
      </Project>
      <div class="d-flex justify-center w-100 mt-5">
        <v-pagination
          rounded="pill"
          :total-visible="7"
          v-model="page"
          :length="Math.ceil(portfoiloStore.projects.length/perPage)"
        >
        </v-pagination>
      </div>
    </div>
  </v-lazy>
  </v-container>
</template>

<script setup>
import { usePortfolioStore } from "@app/store/portfolio";
import { computed, ref } from "vue";

const portfoiloStore = usePortfolioStore()

const page = ref(1)

const perPage = ref(4)

const visibleProjects = computed(() => {
  return portfoiloStore.projects.slice((page.value - 1) * perPage.value, page.value * perPage.value)
})

</script>
