/**
 * router/index.ts
 *
 * Automatic routes for `./src/applications/work/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  extendRoutes: (routes) => setupLayouts(routes),
  scrollBehavior(to, from, savedPosition) {
    const scrollSettings = { 
      behavior: 'smooth',
      block: "start", 
      inline: "nearest"
    }

    if (to.hash) {
      return {
        el: to.hash,
        ...scrollSettings
      } 
    } else {
      return {
         top: 0,
         ...scrollSettings
         }
    }
  }
})

export default router
