<template>
  <div>
    <div style="display: flex; gap: 20px; align-items: start">
      <button @click="handleClear">Clear</button>
      <div>
        <button :disabled="disabled" @click="handleDraw">Start draw</button>
        <p v-show="disabled">
          Please draw a few dots (>= 3) in the above drawing area first
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  props: ["points", "handleClear", "handleDraw"],

  setup(props) {
    const isDisabled = computed(() => props.points.length <= 2);

    return {
      ...props,
      disabled: isDisabled,
    };
  },
});
</script>

<style scoped>
.my-canvas {
  height: 100%;
  width: 100%;
}
</style>
