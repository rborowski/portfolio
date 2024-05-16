// Main state management store

import { defineStore } from "pinia";
import { useTheme } from "vuetify";
import { ref } from "vue";

export const useAppStore = defineStore("app", () => {
  const theme = useTheme();

  // environment variables accessible globally
  const appName = import.meta.env.VITE_APP_NAME;

  //Views and navigation
  const drawer = ref(false);

  const navItems = ref([
    {
      title: "Home",
      slug: "home",
      page: "/",
      hash: "",
      submenu: [],
    },
    {
      title: "About me",
      slug: "about-me",
      page: "/",
      hash: "#about-me",
      submenu: [],
    },
    {
      title: "Portfolio",
      slug: "portfolio",
      page: "/",
      hash: "#portfolio",
      submenu: [
        {
          title: "All projects",
          slug: "all-projects",
          page: "/portfolio",
          hash: "",
        },
      ],
    },
    {
      title: "Contact",
      slug: "contact",
      page: "/",
      hash: "#contact",
      submenu: [],
    },
  ]);

  const currentView = ref("");

  function toggleTheme() {
    theme.global.name.value = theme.global.current.value.dark
      ? "light"
      : "dark";
  }


  const aboutMeIconset = ref({
    languages: [
      { slug: "javascript", name: "JavaScript" },
      { slug: "python", name: "Python" },
      { slug: "php", name: "PHP" },
    ],
    frontend: [
      { slug: "vue", name: "Vue.js 3" },
      { slug: "vuetifyjs", name: "Vuetify.js 3" },
      { slug: "nuxt-icon", name: "Nuxt.js 3" },
      { slug: "sass", name: "Sass" },
      { slug: "bulma", name: "Bulma" },
      { slug: "bootstrap", name: "Bootstrap" },
      { slug: "tailwindcss-icon", name: "Tailwind CSS" },
    ],
    backend: [
      { slug: "nodejs-icon", name: "Node.js" },
      { slug: "express", name: "Express.js" },
      { slug: "wordpress-icon", name: "Wordpress" },
      { slug: "mongodb-icon", name: "MongoDB" },
      { slug: "firebase", name: "Google Firebase" },
      { slug: "mysql-icon", name: "MySQL" },
    ],
    tools: [
      { slug: "visual-studio-code", name: "Visual Studio Code" },
      { slug: "pycharm", name: "PyCharm" },
      { slug: "terminal", name: "Terminal" },
      { slug: "yarn", name: "Yarn" },
      { slug: "git-icon", name: "Git" },
      { slug: "github-icon", name: "Github" },
      { slug: "github-actions", name: "Github Actions" },
      { slug: "vitejs", name: "ViteJS" },
      { slug: "docker-icon", name: "Docker" },
      { slug: "postman-icon", name: "Postman"},

    ],
  });

  const homeIconset = ref([
    { slug: "javascript", name: "JavaScript" },
    { slug: "vue", name: "Vue.js 3" },
    { slug: "vuetifyjs", name: "Vuetify.js 3" },
    { slug: "nodejs-icon", name: "Node.js" },
    { slug: "mongodb-icon", name: "MongoDB" },
    { slug: "firebase", name: "Google Firebase" },
    { slug: "python", name: "Python" },
    { slug: "php", name: "PHP" },
    { slug: "mysql-icon", name: "MySQL" },
  ]);

  return {
    appName,
    drawer,
    navItems,
    currentView,
    toggleTheme,
    homeIconset,
    aboutMeIconset,
  };
});
