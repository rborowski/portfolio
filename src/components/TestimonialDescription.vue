<template>
  <div class="d-flex mt-5">
    <h1 class="text-primary text-h1 text-sm-h1 mb-5 mt-n15 pr-2 pl-0">
      „
    </h1>
    <p class="text-body-2 text-sm-body-1">
      {{ testimonial.quote }}
    </p>
  </div>

  <v-list 
  class="mt-5"
  bg-color="transparent"
  >
    <v-list-item class="pl-11">
    <template #prepend>
      <v-avatar class="elevation-4" :image="'/images/testimonials/' + testimonial.photo" size="x-large"></v-avatar>
    </template>
    <v-list-item-title class="font-weight-black text-uppercase"> 
      {{ testimonial.author }}
    </v-list-item-title>
    <v-list-item-subtitle>
      {{ testimonial.occupancy }}
    </v-list-item-subtitle>
    </v-list-item>
  
  </v-list>
</template>

<script setup>
const props = defineProps({
  testimonial: {
    type: Object,
    required: true,
  }
})
</script>