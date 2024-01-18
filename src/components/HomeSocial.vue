<template >
  <v-list class="d-flex flex-column justify-center" bg-color="transparent">
    <v-btn
      v-for="(social, index) in socials"
      :key="index"
      :icon="social.icon"
      :href="social.link"
      target="_blank"
      class="text-primary"
      variant="text"
    />
  </v-list>
</template>

<script setup>
const socials = [
  {
    link: "http://github.com/rborowski",
    icon: "fab fa-github",
  },
  {
    link: "http://linkedin.com/in/r-borowski",
    icon: "fab fa-linkedin-in",
  },
]

</script>

