<template>
  <v-container
  class="px-0 px-md-5 d-flex justify-space-between flex-column container-max-w container-min-h"
  style="position:relative"
  >
    <div>
      <div class="w-100 d-flex">
        <PortfolioCard class="mb-10 mb-sm-16 mt-3 mx-n3 mx-md-5"/>
      </div>
      <Project
        v-for="(project, index) in visibleProjects"
        :key="project.id"
        :project="project"
        :index="index"
      />
    </div>
    <div class="d-flex justify-center w-100 my-5">
      <v-pagination
        rounded="pill"
        :total-visible="7"
        v-model="page"
        :length="Math.ceil(portfoiloStore.projects.length/perPage)"
      >
      </v-pagination>
    </div>
  </v-container>
</template>

<script setup>
import { usePortfolioStore } from "@app/store/portfolio";
import { useAppStore } from "@app/store/app";
import { computed, ref, onBeforeMount } from "vue";

const portfoiloStore = usePortfolioStore()
const appStore = useAppStore()

const page = ref(1)

const perPage = ref(4)

const visibleProjects = computed(() => {
  return portfoiloStore.projects.slice((page.value - 1) * perPage.value, page.value * perPage.value)
})

onBeforeMount(() => appStore.currentView = "")
</script>
