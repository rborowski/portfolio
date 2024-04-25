<template>
  <Home id="home"/>
  <AboutMe id="about-me" />
  <Portfolio :max-projects-count="4" id="portfolio"/>
  <Contact id="contact" />
</template>

<script setup>
import Home from "@app/views/Home";
import AboutMe from "@app/views/AboutMe";
import Portfolio from "@app/views/Portfolio";
import Contact from "@app/views/Contact";
</script>
