// portfolio projects store

import { defineStore } from "pinia";
import { ref } from "vue";

export const usePortfolioStore = defineStore("portfolio", () => {
  const projects = ref([
    {
      id: "qwerty1",
      name: "Bank Transaction Import System",

      repository: "https://github.com/rborowski/transaction-import-system",
      description:
        "A full stack web application written in Laravel for importing and processing bank transactions from CSV, JSON, and XML files. The system validates transaction data, stores successful records, logs errors, and provides a user-friendly interface for managing imports.",
      stack: [
        { slug: "logos:php", name: "PHP"},
        { slug: "logos:laravel", name: "Laravel" },
        { slug: "logos:vue", name: "Vue 3" },
        { slug: "logos:mysql-icon", name: "MySQL" },
        { slug: "logos:tailwindcss-icon", name: "Tailwind CSS" },
        { slug: "logos:docker-icon", name: "Docker" },
      ],
      photo: "transaction-import-system1.png",
      onMain: 1,
      inProgress: false,
    },
    {
      id: "qwerty2",
      name: "Pixel Positions",
      url: "https://pixel-positions.rborowski.pl/",
      repository: "https://github.com/rborowski/pixel-positions",
      description:
        "Simple Laravel job board. Browse and filter offers by tags, salary range, and employer — or post your own. Built following SOLID principles and Laravel best practices.",
      stack: [
        { slug: "logos:php", name: "PHP" },
        { slug: "logos:laravel", name: "Laravel" },
        { slug: "logos:mysql-icon", name: "MySQL" },
        { slug: "logos:tailwindcss-icon", name: "Tailwind CSS" },
      ],
      photo: "pixel-positions1.png",
      onMain: 2,
      inProgress: false,
    },
    {
      id: "qwerty3",
      name: "Promotions Engine",
      repository: "https://github.com/rborowski/promotions-engine",
      description:
        "Symfony 7 microservice for product pricing with promotions. REST API calculates lowest prices using filter/modifier patterns, supports multiple promotion types, includes Redis caching, DTO validation, and Doctrine ORM.",
      stack: [
        { slug: "logos:php", name: "PHP" },
        { slug: "logos:symfony", name: "Symfony" },
        { slug: "logos:postgresql", name: "PostgreSQL" },
        { slug: "logos:docker-icon", name: "Docker" },
      ],
      photo: "portfolio2.jpg",
      onMain: 3,
      inProgress: false,
    },
    {
      id: "qwerty4",
      name: "Opencaching.pl",
      url: "https://opencaching.pl/",
      repository: "https://github.com/opencaching/opencaching-pl",
      description:
          "The project provides a fully featured geocaching service, used by multiple national communities i.a. Poland, the Netherlands, Romania, and United Kingdom. The platform is written in PHP and has been maintained by international volunteers since 2006. By participating in the project, I gained hands-on experience with distributed development workflows, legacy architecture, open-source collaboration and heavy-traffic production database.",
        stack: [
        { slug: "logos:php", name: "PHP" },
        { slug: "logos:mysql-icon", name: "MySQL" },
        { slug: "logos:javascript", name: "JavaScript" },
        { slug: "logos:html-5", name: "HTML 5" },
        { slug: "logos:css-3", name: "CSS 3" },
      ],
      photo: "opencaching1.png",
      onMain: 4,
      inProgress: false,
    },
    {
      id: "qwerty5",
      name: "Chordly",
      url: "https://chordly.netlify.app/",
      repository: "https://github.com/rborowski/chordly",
      description:
        "Chordly is an app that was created to hone musicians' skills. Chordly will force user to expect the unexpected and help them react spontaneously to every chord change.",
      stack: [
        { slug: "logos:javascript", name: "JavaScript" },
        { slug: "logos:html-5", name: "HTML 5" },
        { slug: "logos:css-3", name: "CSS 3" },
      ],
      photo: "chordly1.png",
      onMain: false,
      inProgress: false,
    },
    {
      id: "qwerty6",
      name: "Lasernik.pl",
      url: "https://lasernik.pl/",
      description:
        "This was an alive e-commerce website creadted for Polish engraver's shop. The shop was closed in 2025.",
      stack: [
        { slug: "logos:wordpress-icon", name: "Wordpress" },
        { slug: "logos:php", name: "PHP"},
        { slug: "logos:html-5", name: "HTML 5" },
        { slug: "logos:css-3", name: "CSS 3" },
      ],
      photo: "lasernik1.png",
      onMain: false,
      inProgress: false,
    },
    {
      id: "qwerty7",
      name: "Noteballs",
      url: "https://my-noteballs.netlify.app/",
      repository: "https://github.com/rborowski/noteballs",
      description:
        "This is a simple todos app. Users can create accounts and store their important notes here.",
      stack: [
        { slug: "logos:javascript", name: "JavaScript" },
        { slug: "logos:vue", name: "Vue 3" },
        { slug: "logos:bulma", name: "Bulma" },
        { slug: "logos:firebase-icon", name: "Google Firebase" },
        { slug: "logos:nodejs-icon", name: "NodeJS" },
      ],
      photo: "noteballs1.png",
      onMain: false,
      inProgress: false,
    },
    {
      id: "qwerty8",
      name: "CacheAtlas",
      url: "",
      repository: "",
      description:
        "Geocaching trip planner based on Opencaching services. Users can easily pick geocaches on map and dowlnoad a GPX file for GPS and mobile devices",
      stack: [
        { slug: "logos:php", name: "PHP" },
        { slug: "logos:symfony", name: "Symfony" },
        { slug: "logos:vue", name: "Vue 3" },
        { slug: "logos:nodejs-icon", name: "NodeJS" },
        { slug: "logos:mysql-icon", name: "PostgreSQL" },
        { slug: "logos:tailwindcss-icon", name: "Tailwind CSS" },
      ],
      photo: "portfolio1.jpg",
      onMain: false,
      inProgress: true,
    },
    // {
    //   id: "qwerty4",
    //   name: "TramRental",
    //   url: "",
    //   repository: "",
    //   description:
    //     "Example vehicle-rental website - users can choose from different types of trams and request rental for a certain amount of time",
    //   stack: [
    //     { slug: "javascript", name: "JavaScript" },
    //     { slug: "nuxt-icon", name: "Nuxt.js" },
    //     { slug: "vue", name: "Vue 3" },
    //     { slug: "mongodb-icon", name: "MongoDB" },
    //     { slug: "nodejs-icon", name: "NodeJS" },
    //   ],
    //   photo: "portfolio1.jpg",
    //   onMain: false,
    //   inProgress: true,
    // },
  ]);

  return {
    projects,
  };
});
