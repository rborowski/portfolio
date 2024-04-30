<template>
  <div class="d-block">
    <div class="mt-1 mr-n2 d-flex justify-center flex-wrap">
      <TechStackIconset :icon-list="iconList" :size="iconSize" />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useDisplay } from "vuetify";

const display = useDisplay()
const props = defineProps({
  iconList: {
    type: Array,
    required: true,
  }
})

const iconSize = computed(() => {
  if (display.sm.value) return 20
  if (display.md.value) return 22
  if (display.lgAndUp.value) return 25
  return 20
})
</script>