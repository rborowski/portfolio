// portfolio projects store

import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const usePortfolioStore = defineStore("portfolio", () => {
  const projects = ref([
    {
      id: "qwerty1",
      name: "Chordly",
      url: "https://chordly.netlify.app/",
      repository: "https://github.com/rborowski/chordly",
      description: "Chordly is an app that was created to hone musicians' skills. Chordly will force user to expect the unexpected and help them react spontaneously to every chord change.",
      stack: [
        "javascript",
        "html-5",
        "css-3",
      ],
      photo: "chordly1.png",
    },
    {
      id: "qwerty3",
      name: "Noteballs",
      url: "https://my-noteballs.netlify.app/",
      repository: "https://github.com/rborowski/noteballs",
      description: "This is a simple todos app. Users can create accounts and store their important notes here.",
      stack: [
        "javascript",
        "vue",
        "bulma",
        "firebase",
        "nodejs-icon",
      ],
      photo: "noteballs1.png",
    },
  ])

  return {
    projects
  };
});
