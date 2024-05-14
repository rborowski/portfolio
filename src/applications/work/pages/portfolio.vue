<template>
  <Portfolio
    id="all-projects"
  />
</template>

<script setup>
import Portfolio from "@app/views/portfolio/Portfolio";

import { useHeadSafe } from '@unhead/vue'

useHeadSafe({
  title: 'Portfolio - Rafał Borowski - personal site',
})
</script>
