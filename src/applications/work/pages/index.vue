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
const observers = ref([]);
const resizeObserver = ref(null)

const threshold = ref(null)
const exceedingThreshold = 0.5

let handleResize;

function setItemRef(el) {
  if (el && !refs.value.includes(el)) {
    refs.value.push(el)
  }
}

function intersectionHandler(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (
        (entry.rootBounds.height < entry.boundingClientRect.height
        ) ||
        (entry.rootBounds.height >= entry.boundingClientRect.height
          && entry.intersectionRatio >= 0.5
        )
      ) {
        const id = entry.target.id;
        appStore.currentView = id;
      }
    }
  });
}

watch(currentView, (newView) => {
  const hash = appStore.navItems.find((item) => item.slug === newView).hash
  router.replace({ hash, params: { noScroll: true } })
})

onMounted(() => {
  const viewportHeight = ref(window.innerHeight)

  function updateObserversThreshold() {

    observers.value.forEach((observer) => {
      observer.disconnect(); // Disconnect previous observer
    });

    observers.value = []; // Reset observers array

    refs.value.forEach((ref, index) => {
      const el = ref.$el;
      const sectionHeight = el.offsetHeight;

      if (sectionHeight > (viewportHeight.value)) {
        threshold.value = ((viewportHeight.value) / sectionHeight) * exceedingThreshold
      } else {
        threshold.value = 0.6
      }
      const observer = new IntersectionObserver(
        intersectionHandler,
        { threshold: threshold.value }
      );

      observer.observe(el);
      observers.value.push(observer);

    });
  }

  handleResize = debounce(() => {
    viewportHeight.value = window.innerHeight;
    updateObserversThreshold();
  }, 500);

  window.addEventListener("resize", handleResize);

  // ResizeObserver is for lazy loading - initial height is lower
  resizeObserver.value = new ResizeObserver(handleResize);
  refs.value.forEach((ref) => {
    resizeObserver.value.observe(ref.$el);
  });

  updateObserversThreshold();
})

onBeforeUnmount(() => {
  observers.value.forEach((observer) => {
    observer.disconnect();
  });

  resizeObserver.value.disconnect();

  window.removeEventListener("resize", handleResize);
});

</script>