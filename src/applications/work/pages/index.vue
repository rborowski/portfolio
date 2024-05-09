<template>
  <Home
    v-intersect="appStore.intersectionHandler"
    id="home"
  />
  <AboutMe
    v-intersect="appStore.intersectionHandler"
    id="about-me"
  />
  <Portfolio
    v-intersect="appStore.intersectionHandler"
    id="portfolio"
  />
  <Contact
    v-intersect="appStore.intersectionHandler"
    id="contact"
  />
</template>

<script setup>
import Home from "@app/views/Home";
import AboutMe from "@app/views/AboutMe";
import Portfolio from "@app/views/PortfolioPreview";
import Contact from "@app/views/Contact";
import { useAppStore } from "@app/store/app";
import { useRouter, useRoute } from "vue-router";
import { watch } from "vue";
import { storeToRefs } from "pinia";

const appStore = useAppStore()
const { currentView } = storeToRefs(appStore)
const router = useRouter();
const route = useRoute();

watch(currentView, (newView) => {
    const hash = appStore.navItems.find((item) => item.slug === newView).hash
    router.replace({ path: route.path, hash})
  })
</script>
