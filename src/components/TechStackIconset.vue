<template>
    <Icon
      v-for="(icon, index) in iconList"
      :key="index"
      :icon="'logos:' + icon"
      :height="size"
      class="mr-2 my-2"
    />
</template>

<script setup>
import { Icon } from '@iconify/vue';

const props = defineProps({
  size: {
    type: Number,
    default: 50
  },
  iconList: {
    type: Array,
    required: true,
  }
})
</script>