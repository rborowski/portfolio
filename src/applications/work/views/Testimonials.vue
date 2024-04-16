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

      <v-carousel
        v-resize="onResize"
        cycle
        interval="10000"
        v-model="carouselModel"
        height="400"
        hide-delimiter-background
        :show-arrows="false"
        :hide-delimiters="!(getCarouselLength > 1)"
      >
        <v-carousel-item
          v-for="slide in getCarouselLength"
          :key="slide"
        >
          <v-sheet color="transparent" height="100%" class="d-flex justify-md-space-between flex-wrap">
            <div :class="{'description-max-w': display.mdAndUp.value}">
              <TestimonialDescription :testimonial="testimonialsStore.testimonials[slide-1]"/>
            </div>
            <div :class="{'description-max-w': display.mdAndUp.value}" v-if="display.mdAndUp.value && length > 0">
              <TestimonialDescription :testimonial="testimonialsStore.testimonials[slide]" />
            </div>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>

    </div>
  </v-container>
</template>

<script setup>
import { useDisplay } from "vuetify";
import { useTestimonialsStore } from "@/store/testimonials";
import { ref, computed } from "vue";

const display = useDisplay()
const testimonialsStore = useTestimonialsStore()

const carouselModel = ref(0)

const length = testimonialsStore.testimonials.length

const getCarouselLength = computed(() => {
  if (display.mdAndUp.value) {
    return Math.ceil(length / 2)
  }
  return length
})


function onResize() {
  carouselModel.value = 0  
}

</script>

<style scoped lang="sass">
.description-max-w
  width: 45%
</style>
