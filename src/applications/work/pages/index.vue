<template>
  <Home :ref="setItemRef" id="home" />
  <AboutMe :ref="setItemRef" id="about-me" />
  <Portfolio :ref="setItemRef" id="portfolio" />
  <Contact :ref="setItemRef" id="contact" />
</template>

<script setup>
import Home from "@app/views/Home";
import AboutMe from "@app/views/AboutMe";
import Portfolio from "@app/views/PortfolioPreview";
import Contact from "@app/views/Contact";
import { useDebounce } from '@/composables/useDebounce';
import { useAppStore } from "@app/store/app";
import { useResizeObserver } from "@/composables/useResizeObserver";
import { useEventListener } from "@/composables/useEvent";
import { useIntersectionObserver } from "@/composables/useIntersectionObserver";
import { useRouter } from "vue-router";
import { watch, ref } from "vue";
import { storeToRefs } from "pinia";

const { debounce } = useDebounce();
const appStore = useAppStore()
const { currentView } = storeToRefs(appStore)
const router = useRouter();

const refs = ref([])

function setItemRef(ref) {
  if (ref && !refs.value.includes(ref.$el)) {
    refs.value.push(ref.$el)
  }
}

function onIntersect(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      appStore.currentView = id;
    }
  });
}

watch(currentView, (newView) => {
  const hash = appStore.navItems.find((item) => item.slug === newView).hash
  router.replace({ hash, params: { noScroll: true } })
})

const { updateObservers } = useIntersectionObserver(refs.value, onIntersect)

const handleResize = debounce(updateObservers, 500);

useResizeObserver(refs.value, handleResize)

useEventListener(window, "resize", handleResize)

</script>