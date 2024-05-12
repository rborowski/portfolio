// useResizeObserver.js
import { ref, onMounted, onBeforeUnmount } from "vue";

export function useResizeObserver(targets, handler) {
  const resizeObserver = ref(null);

  onMounted(() => {
    resizeObserver.value = new ResizeObserver(handler);
    targets.forEach((target) => {
      resizeObserver.value.observe(target);
    });
  });

  onBeforeUnmount(() => {
    if (resizeObserver.value) {
      resizeObserver.value.disconnect();
    }
  });
}
