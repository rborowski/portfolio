<template>
  <Portfolio
    id="all-projects"
    v-intersect="appStore.intersectionHandler"
  />
</template>

<script setup>
import Portfolio from "@app/views/portfolio/Portfolio";
import { useAppStore } from "@app/store/app";

const appStore = useAppStore()
</script>
