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
        :length="paginationLength"
        @update:model-value="setQueryPage(page)"
      >
      </v-pagination>
    </div>
  </v-container>
</template>

<script setup>
import { usePortfolioStore } from "@app/store/portfolio";
import { useAppStore } from "@app/store/app";
import { computed, ref, onBeforeMount, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const portfoiloStore = usePortfolioStore()
const appStore = useAppStore()
const route = useRoute()
const router = useRouter()

const page = ref(1)

const perPage = ref(4)

const paginationLength = computed(() => Math.ceil(portfoiloStore.projects.length/perPage.value))

const visibleProjects = computed(() => {
  return portfoiloStore.projects.slice((page.value - 1) * perPage.value, page.value * perPage.value)
})

function setQueryPage(page){
  router.replace({ path: 'portfolio', query: {...route.query, page }})
}

onBeforeMount(() => appStore.currentView = "all-projects")

onMounted(() =>{
  if (route.query.page >= 1 && route.query.page <= paginationLength.value) {
    return page.value = parseInt(route.query.page)
  } else if (!route.query.page){
    return
  }
  return setQueryPage(1)
})
</script>
