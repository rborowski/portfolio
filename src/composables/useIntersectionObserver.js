// useIntersectionObserver.js
// This is modified version for (multiple) elements, also larger than viewport
// threshold is calculated based on element height and therefore ignored if passed in options
// use nonExceedingThreshold and exceedingThreshold arguments instead

import { ref, onMounted, onBeforeUnmount } from "vue";

export function useIntersectionObserver(
  targets,
  handler,
  nonExceedingThreshold = 0.6,
  exceedingThreshold = 0.5,
  options = {}
) {
  const observers = ref([]);

  function disconectObservers() {
    observers.value.forEach((observer) => {
      observer.disconnect(); // Disconnect observers
    });
    observers.value = []; // Reset observers array
  }

  function calculateThreshold(sectionHeight) {
    const viewportHeight = window.innerHeight;

    if (sectionHeight > viewportHeight) {
      return (viewportHeight / sectionHeight) * exceedingThreshold;
    }
    return nonExceedingThreshold;
  }

  function updateObservers() {
    disconectObservers(); // Disconnect previous observers

    targets.forEach((el) => {
      const sectionHeight = el.offsetHeight;
      const threshold = calculateThreshold(sectionHeight);

      const observer = new IntersectionObserver(handler, {
        ...options,
        threshold
      });

      observer.observe(el);
      observers.value.push(observer);
    });
  }

  onMounted(() => {
    updateObservers(nonExceedingThreshold, exceedingThreshold);
  });

  onBeforeUnmount(() => {
    disconectObservers();
  });

  return { updateObservers };
}
