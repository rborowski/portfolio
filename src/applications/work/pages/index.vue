<template>
  <Home />
  <AboutMe />
  <Portfolio :max-projects-count="4"/>
  <Testimonials />
  <Contact />
</template>

<script setup>
import Home from "@app/views/Home";
import AboutMe from "@app/views/AboutMe";
import Portfolio from "@app/views/Portfolio";
import Testimonials from "@app/views/Testimonials";
import Contact from "@app/views/Contact";
</script>
