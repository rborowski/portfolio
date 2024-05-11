// useResizeObserver.js
import { ref, onMounted, onBeforeUnmount } from 'vue';

export function useResizeObserver(targets, handler) {
    const resizeObserver = ref(null);
    
    console.log("I'm in composable useResizeObserver yay")

    onMounted(() => {
      resizeObserver.value = new ResizeObserver(handler);
      console.log(targets)
      targets.value.forEach((target) => {
        resizeObserver.value.observe(target);
      });
    });

    onBeforeUnmount(() => {
      if (resizeObserver.value) {
        resizeObserver.value.disconnect();
      }
    });

}