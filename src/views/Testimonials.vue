<template>
  <v-container
    id="testimonials"
    class="px-5 d-flex justify-center flex-column container-max-w container-min-h mt-15 mt-md-0"
  >
    <div class="mx-md-10">
      <div>
        <header class="section-header">
          Testimonials
        </header>
        <h1 class="text-h6 text-sm-h5 mb-sm-10 mb-6 ">
          Bringing a personal touch ✨
        </h1>
      </div>

      <div class="d-flex justify-md-space-between gr-5 gr-md-0 flex-wrap">
        <div
        :class="{'description-max-w': display.mdAndUp.value}"
        v-for="testimonial in testimonialsStore.testimonials"
        >
          <TestimonialDescription :testimonial="testimonial"/>
        </div>

      </div>
    </div>

  </v-container>
</template>

<script setup>
import { useDisplay } from "vuetify";
import { useTestimonialsStore } from "@/store/testimonials";

const display = useDisplay()
const testimonialsStore = useTestimonialsStore()
</script>

<style scoped lang="sass">
.description-max-w
  width: 45%
</style>