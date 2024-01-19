// portfolio projects store

import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const usePortfolioStore = defineStore("portfolio", () => {
  const projects = ref([
    {
      id: "qwerty1",
      name: "Tram Rental",
      url: "https://rborowski.netlify.app/",
      repository: "https://github.com/rborowski/portfolio-first",
      description: "A tram rental website allows to rent trams for personal and business use. This is a fully-functional system for searching, comparing and reserving trams.",
      stack: [
        "javascript",
        "vue",
        "vuetifyjs",
        "nodejs-icon",
        "firebase",
      ],
      photo: "portfolio1.jpg",
    },
    {
      id: "qwerty2",
      name: "OcPlanner",
      url: "https://rborowski.netlify.app/",
      repository: "https://github.com/rborowski/portfolio-first",
      description: "A planner app for geocaching that integrates all websites in Opencaching ecosystem. Ocplanner makes planning tripps and cache management easier.",
      stack: [
        "javascript",
        "php",
        "vue",
        "vuetifyjs",
        "mysql-icon",
      ],
      photo: "portfolio2.jpg",
    },
    {
      id: "qwerty3",
      name: "HowTimely",
      url: "https://rborowski.netlify.app/",
      repository: "https://github.com/rborowski/portfolio-first",
      description: "A planner app for public transport that integrates all major public transport authorities. HowTimely makes planning tripps easier.",
      stack: [
        "javascript",
        "php",
        "vue",
        "vuetifyjs",
        "mysql-icon",
      ],
      photo: "portfolio3.jpg",
    },
  ])

  return {
    projects
  };
});
