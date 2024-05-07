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
    :max-projects-count="4"
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

const appStore = useAppStore()
</script>
