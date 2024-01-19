<template>
  <header class="text-uppercase text-h6 font-weight-black text-center">
    {{ project.name }}
  </header>
  <h1 class="text-h6 text-sm-h5 mb-5">
    <ProjectTechStack :icon-list="project.stack"/>
  </h1>
  <p class="text-body-2 text-sm-body-1">
    {{ project.description }}
  </p>
</template>

<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: true,
  }
})
</script>