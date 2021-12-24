<template>
  <ul>
    <li v-for="point in pointMap" :key="point">
      {{ point }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["pointMap"],
  setup(props) {
    console.log(props.pointMap);
  },
});
</script>
