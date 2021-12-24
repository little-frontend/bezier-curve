<template>
  <div>
    <div>
      <button @click="clear">Clear</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: ["handleAddPoint", "handleClear"],

  setup(props) {
    // const pointX = ref<number>(0);
    // const pointY = ref<number>(0);
    // // const removeX = ref<number>(0);
    // // const removeY = ref<number>(0);
    // const addPoint = () => {
    //   props.handleAddPoint(pointX.value, pointY.value);
    // };

    const clear = () => {
      props.handleClear();
    };
    return {
      // pointX,
      // pointY,
      // addPoint,
      clear,
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
