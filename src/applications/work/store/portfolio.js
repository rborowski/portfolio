// portfolio projects store

import { defineStore } from "pinia";
import { ref } from "vue";

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
      onMain: 1,
      inProgress: false,
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
      onMain: 2,
      inProgress: false,
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
      onMain: 3,
      inProgress: false,
    },
    {
      id: "qwerty4",
      name: "TramRental",
      url: "",
      repository: "",
      description:
        "Example vehicle-rental website - users can choose from different types of trams and request rental for a certain amount of time",
      stack: [
        { slug: "javascript", name: "JavaScript" },
        { slug: "nuxt-icon", name: "Nuxt.js" },
        { slug: "vue", name: "Vue 3" },
        { slug: "mongodb-icon", name: "MongoDB" },
        { slug: "nodejs-icon", name: "NodeJS" },
      ],
      photo: "portfolio1.jpg",
      onMain: false,
      inProgress: true,
    },
    {
      id: "qwerty5",
      name: "OC Planner",
      url: "",
      repository: "",
      description:
        "Geocaching trip planner based on Opencaching services. Users can easily pick geocaches on map and dowlnoad a GPX file for GPS and mobile devices",
      stack: [
        { slug: "php", name: "PHP" },
        { slug: "mysql-icon", name: "MySQL" },
        { slug: "javascript", name: "JavaScript" },
        { slug: "html-5", name: "HTML 5" },
        { slug: "css-3", name: "CSS 3" },
      ],
      photo: "portfolio2.jpg",
      onMain: false,
      inProgress: true,
    },
  ]);

  return {
    projects,
  };
});
