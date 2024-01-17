<template>
  <div>
    <v-icon v-for="(icon, index) in icons" :key="index"  class="logo-icon"> <component :is="icon.component" :style="'fill:' + icon.color" size="50"/> </v-icon>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

import { 
  JavaScriptIcon,
  PythonIcon,
  PhpIcon,
  VueDotjsIcon,
  VuetifyIcon,
  ViteIcon,
  NodeDotjsIcon,
  MongoDbIcon,
  FirebaseIcon,
  MySqlIcon,
  SassIcon,
  TailwindCssIcon,
  GitIcon,
 } from "vue3-simple-icons";

const icons = [
  {
    name: "js",
    component: JavaScriptIcon,
    color: "yellow"
  },
  {
    name: "python",
    component: PythonIcon,
    color: "DodgerBlue"
  },
  {
    name: "php",
    component: PhpIcon,
    color: "MediumOrchid"
  },
  {
    name: "vue",
    component: VueDotjsIcon,
    color: "LightSeaGreen"
  },
  {
    name: "vuetify",
    component: VuetifyIcon,
    color: "DodgerBlue"
  },
  {
    name: "vite",
    component: ViteIcon,
    color: "MediumOrchid"
  },
  {
    name: "node",
    component: NodeDotjsIcon,
    color: "LightGreen"
  },
  {
    name: "mongo",
    component: MongoDbIcon,
    color: "Green"
  },
  {
    name: "firebase",
    component: FirebaseIcon,
    color: "Orange"
  },
  {
    name: "mysql",
    component: MySqlIcon,
    color: "DodgerBlue"
  },
  {
    name: "sass",
    component: SassIcon,
    color: "MediumOrchid"
  },
  {
    name: "tailwind",
    component: TailwindCssIcon,
    color: "DodgerBlue"
  },
  {
    name: "git",
    component: GitIcon,
    color: "FireBrick"
  },
]


</script>

<style scoped>
.logo-icon {
  width: 30px; 
  height: auto;
  margin-right: 10px; /* Adjust spacing between logos */
}
</style>