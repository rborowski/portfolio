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
import { useRouter } from "vue-router";
import { watch, ref, onMounted, onBeforeUnmount } from "vue";
import { storeToRefs } from "pinia";
import { useResizeObserver } from "@/composables/useResizeObserver";
import { useEventListener } from "@/composables/useEvent";

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

const observers = ref([]);

const exceedingThreshold = 0.5
const nonExceedingThreshold = 0.6

const handleResize = debounce(() => {
  console.log("handle resize")
  updateObserversThreshold(refs.value, nonExceedingThreshold, exceedingThreshold);
}, 500);


function intersectionHandler(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      appStore.currentView = id;
    }
  });
}

function updateObserversThreshold(targets, nonExceedingThreshold, exceedingThreshold) {

  const threshold = ref(null)
  const viewportHeight = window.innerHeight

  observers.value.forEach((observer) => {
    observer.disconnect(); // Disconnect previous observer
  });

  observers.value = []; // Reset observers array

  targets.forEach((el, index) => {
    const sectionHeight = el.offsetHeight;

    if (sectionHeight > (viewportHeight)) {
      threshold.value = ((viewportHeight) / sectionHeight) * exceedingThreshold
    } else {
      threshold.value = nonExceedingThreshold
    }
    const observer = new IntersectionObserver(
      intersectionHandler,
      { threshold: threshold.value }
    );

    observer.observe(el);
    observers.value.push(observer);

  });
}

useResizeObserver(refs.value, handleResize)

useEventListener(window, "resize", handleResize)


watch(currentView, (newView) => {
  const hash = appStore.navItems.find((item) => item.slug === newView).hash
  router.replace({ hash, params: { noScroll: true } })
})

onMounted(() => {

  updateObserversThreshold(refs.value, nonExceedingThreshold, exceedingThreshold);
})

onBeforeUnmount(() => {
  observers.value.forEach((observer) => {
    observer.disconnect();
  });

});

</script>