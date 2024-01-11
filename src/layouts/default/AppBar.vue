<template>
  <v-navigation-drawer v-model="drawer" location="right" flat color="background">
      <!--  -->
    </v-navigation-drawer>
  <v-app-bar flat color="background" class="px-12">
    <v-btn>
      <v-icon color="primary" left class="mr-2" icon="fas fa-signature" ></v-icon>
    </v-btn>
    <v-app-bar-title>
      {{ appStore.appName }}
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <div>
      <v-btn
        v-for="navItem in navItems"
        :class="{'text-primary' : navItem === 'home'}"
        @click="scroll(navItem)"
        variant="text"
      >
      {{ navItem.charAt(0).toUpperCase() + navItem.slice(1) }}
      </v-btn>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </div>
  </v-app-bar>
</template>

<script setup>
import { useAppStore } from "@/store/app";
import { ref } from "vue";

const appStore = useAppStore()

const drawer = ref(false)

const navItems = ["home", "about", "portfolio", "services", "page", "blog", "contact"]

function scroll(refName) {
  const elem = document.getElementById(refName);
  elem.scrollIntoView({behavior: "smooth"})
}
</script>