// portfolio projects store

import { defineStore } from "pinia";
import { ref } from "vue";

export const useTestimonialsStore = defineStore("testimonials", () => {
  const testimonials = ref([
    {
      id: "qwerty1",
      author: "Cynthia Juarez",
      occupancy: "CEO of XYZ",
      quote: "Scelerisque purus semper eget duis at tellus at urna condimentum. Interdum varius sit amet mattis vulputate enim. Turpis tincidunt id aliquet risus feugiat in. Convallis tellus id interdum velit laoreet id donec ultrices tincidunt. Pretium viverra suspendisse potenti nullam ac tortor vitae purus. Purus semper eget duis at tellus at. Est placerat in egestas erat imperdiet sed euismod nisi porta.",
      photo: "testimonial1.jpg",
    },
    {
      id: "qwerty2",
      author: "Joyce Frazier",
      occupancy: "Sales Manager of ABC",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      photo: "testimonial2.jpg",
    },
    {
      id: "qwerty3",
      author: "John Deuter",
      occupancy: "Manager of XXX",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      photo: "testimonial3.jpg",
    },
  ])

  return {
    testimonials
  };
});
