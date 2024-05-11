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

const { debounce } = useDebounce();
const appStore = useAppStore()
const { currentView } = storeToRefs(appStore)
const router = useRouter();

const refs = ref([])

function setItemRef(el) {
  if (el && !refs.value.includes(el)) {
    refs.value.push(el)
  }
}

const observers = ref([]);
const resizeObserver = ref(null)

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

  targets.forEach((ref, index) => {
    const el = ref.$el;
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



watch(currentView, (newView) => {
  const hash = appStore.navItems.find((item) => item.slug === newView).hash
  router.replace({ hash, params: { noScroll: true } })
})

onMounted(() => {

  window.addEventListener("resize", handleResize);

  // ResizeObserver is for lazy loading - initial height is lower
  resizeObserver.value = new ResizeObserver(handleResize);
  refs.value.forEach((ref) => {
    resizeObserver.value.observe(ref.$el);
  });

  updateObserversThreshold(refs.value, nonExceedingThreshold, exceedingThreshold);
})

onBeforeUnmount(() => {
  observers.value.forEach((observer) => {
    observer.disconnect();
  });

  resizeObserver.value.disconnect();

  window.removeEventListener("resize", handleResize);
});

</script>