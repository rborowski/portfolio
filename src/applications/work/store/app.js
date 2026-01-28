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
      { slug: "logos:php", name: "PHP" },
      { slug: "logos:symfony", name: "Symfony" },
      { slug: "logos:laravel", name: "Laravel" },
      { slug: "logos:c-sharp", name: "C#" },
      { slug: "logos:docker-icon", name: "Docker" },
      { slug: "logos:linux-tux", name: "Linux" },
      { slug: "logos:bash-icon", name: "Bash" },
    ],
    wellKnown: [
      { slug: "logos:typescript-icon", name: "TypeScript" },
      { slug: "logos:vue", name: "Vue.js" },
      { slug: "logos:react", name: "React.js" },
      { slug: "logos:nodejs-icon", name: "Node.js" },
      { slug: "logos:tailwindcss-icon", name: "Tailwind CSS" },
      { slug: "logos:vuetifyjs", name: "Vuetify.js" },
      { slug: "logos:python", name: "Python" },
    ],
    databases: [
      { slug: "logos:postgresql", name: "PostgreSQL" },
      { slug: "logos:mysql-icon", name: "MySQL" },
      { slug: "vscode-icons:file-type-sql", name: "SQL Server" },
      { slug: "logos:redis", name: "Redis" },
      { slug: "logos:mongodb-icon", name: "MongoDB" },
    ],
    toolsQuality: [
      { slug: "material-icon-theme:phpunit", name: "PHPUnit" },
      { slug: "fluent-emoji-flat:house", name: "Rector PHP" },
      { slug: "vscode-icons:file-type-phpstan", name: "PHPStan" },

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
      { slug: "logos:postman-icon", name: "Postman"},
      { slug: "logos:github-actions", name: "Github Actions" },

      
    ],
  });

  const homeIconset = ref([
    { slug: "logos:php", name: "PHP" },
    { slug: "logos:symfony", name: "Symfony" },
    { slug: "logos:laravel", name: "Laravel" },
    { slug: "logos:c-sharp", name: "C#" },
    { slug: "logos:docker-icon", name: "Docker" },
    { slug: "logos:vue", name: "Vue.js 3" },
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
