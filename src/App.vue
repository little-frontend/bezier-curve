<template>
  <canvas
    style="cursor: pointer"
    ref="cvs"
    width="900"
    height="450"
    class="my-canvas"
    @mousedown="handleMouseDown"
  ></canvas>
  <br />
  <Tools :points="points" :handleClear="handleClear" :handleDraw="handleDraw" />
</template>

<script lang="ts">
import { Point } from "typings";
import { defineComponent, onMounted, reactive, ref } from "vue";

import Tools from "./components/Tools.vue";
// import Record from "./components/Record.vue";
import DrawHelper from "./utils/DrawHelper";

export default defineComponent({
  name: "App",
  components: {
    Tools,
    // Record,
  },
  setup() {
    const cvs = ref<HTMLCanvasElement>();
    const drawHelper = reactive<DrawHelper>(
      new DrawHelper(cvs.value?.getContext("2d") ?? undefined)
    );
    const points = ref<Array<Point>>([]);

    const handleMouseDown = (e: MouseEvent) => {
      points.value.push({ x: e.offsetX, y: e.offsetY });
      drawHelper.drawPoint({ x: e.offsetX, y: e.offsetY });
    };

    const handleClear = () => {
      points.value = [];
      drawHelper.clear();
    };

    const handleDraw = () => {
      drawHelper.drawBezier(points.value, 0);
    };

    onMounted(() => {
      if (cvs.value) {
        drawHelper.ctx = cvs.value.getContext("2d")!;
      }
    });

    return {
      cvs,
      points: points.value,
      drawHelper,
      handleMouseDown,
      handleClear,
      handleDraw,
    };
  },
});
</script>

<style>
html,
body,
#app {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.my-canvas {
  border: 1px #333 solid;
}
</style>
