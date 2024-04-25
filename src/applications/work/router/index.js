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
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        block: "start", 
        inline: "nearest"
      }
    }
  }
})

export default router
