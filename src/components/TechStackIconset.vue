<template>
  <v-tooltip
  v-for="(icon, index) in iconList" :key="index"
  location="bottom"
  :text="icon.name"
  theme="light"
  open-on-click
  >
    <template v-slot:activator="{ props }">
      <Icon 
      v-bind="props"
      :icon="'logos:' + icon.slug"
      :height="size"
      class="mr-2 my-1 svg-shadow"
      />
    </template>
  </v-tooltip>
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

<style scoped >
.svg-shadow {
  filter: 
    drop-shadow(0px 1px 0px rgb(250, 250, 250 )) 
    drop-shadow(1px 0px 0px rgb(250, 250, 250 )) 
    drop-shadow(-1px 0px 0px rgb(250, 250, 250))
    drop-shadow(0px -1px 0px rgb(250, 250, 250))
}
</style>