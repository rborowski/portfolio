<template>
  <NotFound
    id="not-found"
  />
</template>

<script setup>
import NotFound from "@app/views/NotFound";
import { useHead } from '@unhead/vue'
import { onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';

let redirect
const router = useRouter()

useHead({
  title: '404: not found!',
  meta: {name: "robots", content: "noindex"},
})

onMounted(() => {
  redirect = setTimeout(() => router.push({ path: '/'}),9000);
})

onBeforeUnmount(() => clearTimeout(redirect))
</script>