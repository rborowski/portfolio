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
    topTechnology: [
      { slug: "logos:dotnet", name: ".NET" },
      { slug: "logos:c-sharp", name: "C#" },
      { slug: "logos:php", name: "PHP" },
      { slug: "logos:symfony", name: "Symfony" },
      { slug: "logos:laravel", name: "Laravel" },
      { slug: "logos:docker-icon", name: "Docker" },
      { slug: "logos:linux-tux", name: "Linux" },
      { slug: "logos:bash-icon", name: "BASH" },
    ],
    wellKnown: [
      { slug: "logos:javascript", name: "JavaScript" },
      { slug: "logos:typescript-icon", name: "TypeScript" },
      { slug: "logos:vue", name: "Vue.js" },
      { slug: "logos:nuxt-icon", name: "Nuxt.js" },
      { slug: "logos:react", name: "React.js" },
      { slug: "logos:html-5", name: "HTML5" },
      { slug: "logos:css-3", name: "CSS3" },
      { slug: "logos:nodejs-icon", name: "Node.js" },
      { slug: "simple-icons:express", name: "Express.js" },
      { slug: "logos:python", name: "Python" },
      
    ],
    databases: [
      { slug: "logos:postgresql", name: "PostgreSQL" },
      { slug: "logos:mongodb-icon", name: "MongoDB" },
      { slug: "logos:firebase-icon", name: "Google Firebase" },
      { slug: "logos:mysql-icon", name: "MySQL" },
      { slug: "logos:redis", name: "Redis" },
      { slug: "cib:oracle", name: "Oracle DB" },
    ],
    uiUx: [
      { slug: "logos:vuetifyjs", name: "Vuetify.js" },
      { slug: "logos:material-ui", name: "Material UI" },
      { slug: "logos:sass", name: "Sass" },
      { slug: "logos:bulma", name: "Bulma" },
      { slug: "logos:bootstrap", name: "Bootstrap" },
      { slug: "logos:tailwindcss-icon", name: "Tailwind CSS" },
      { slug: "logos:figma", name: "Figma" },

    ],
    other: [
      { slug: "logos:github-actions", name: "Github Actions" },
      { slug: "simple-icons:podman", name: "Podman" },
      { slug: "logos:vault-icon", name: "Hashicorp Vault" },
      { slug: "logos:terraform-icon", name: "Terraform" },
      { slug: "logos:wordpress-icon", name: "Wordpress" },

    ],
    tools: [
      { slug: "logos:visual-studio", name: "Visual Studio" },
      { slug: "logos:visual-studio-code", name: "Visual Studio Code" },
      { slug: "logos:phpstorm", name: "PhpStorm" },
      { slug: "logos:terminal", name: "Terminal" },
      { slug: "logos:git-icon", name: "Git" },
      { slug: "logos:github-icon", name: "Github" },
      { slug: "logos:gitlab-icon", name: "GitLab" },
      { slug: "logos:bitbucket", name: "Bitbucket" },
      { slug: "logos:yarn", name: "Yarn" },
      { slug: "logos:postman-icon", name: "Postman"},
      
    ],
  });

  const homeIconset = ref([
    { slug: "logos:dotnet", name: ".NET" },
    { slug: "logos:c-sharp", name: "C#" },
    { slug: "logos:php", name: "PHP" },
    { slug: "logos:symfony", name: "Symfony" },
    { slug: "logos:laravel", name: "Laravel" },
    { slug: "logos:docker-icon", name: "Docker" },

    
    { slug: "logos:typescript-icon", name: "TypeScript" },
    { slug: "logos:vue", name: "Vue.js 3" },

    { slug: "logos:python", name: "Python" },
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
