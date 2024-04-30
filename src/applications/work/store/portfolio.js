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
      description:
        "Chordly is an app that was created to hone musicians' skills. Chordly will force user to expect the unexpected and help them react spontaneously to every chord change.",
      stack: [
        { slug: "javascript", name: "JavaScript" },
        { slug: "html-5", name: "HTML 5" },
        { slug: "css-3", name: "CSS 3" },
      ],
      photo: "chordly1.png",
    },
    {
      id: "qwerty2",
      name: "Lasernik.pl",
      url: "https://lasernik.pl/",
      description:
        "This is alive e-commerce website created for Polish engraver's shop.",
      stack: [
        { slug: "wordpress-icon", name: "Wordpress" },
        { slug: "php", name: "PHP"},
        { slug: "html-5", name: "HTML 5" },
        { slug: "css-3", name: "CSS 3" },
      ],
      photo: "lasernik1.png",
    },
    {
      id: "qwerty3",
      name: "Noteballs",
      url: "https://my-noteballs.netlify.app/",
      repository: "https://github.com/rborowski/noteballs",
      description:
        "This is a simple todos app. Users can create accounts and store their important notes here.",
      stack: [
        { slug: "javascript", name: "JavaScript" },
        { slug: "vue", name: "Vue 3" },
        { slug: "bulma", name: "Bulma" },
        { slug: "firebase", name: "Google Firebase" },
        { slug: "nodejs-icon", name: "NodeJS" },
      ],
      photo: "noteballs1.png",
    },
  ]);

  return {
    projects,
  };
});
