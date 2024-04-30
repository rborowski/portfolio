<template>
  <div class="d-flex align-center mt-5">
    <v-btn
      color="primary"
      variant="outlined"
      :href="project.url"
      target="_blank"
      class="text-background text-subtitle-2 px-3 px-sm-4 font-weight-medium"
    >
      Show page
      <v-icon icon="mdi:mdi-open-in-new" end />
    </v-btn>
    <v-btn
      v-if="project.repository"
      :href="project.repository"
      target="_blank"
      variant="text"
      class="text-background text-subtitle-2 px-3 px-sm-4 font-weight-medium"
    >
      Go to GitHub
      <v-icon icon="mdi:mdi-github" end/>
    </v-btn>
  </div>
</template>

<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: true,
  }
})
</script>