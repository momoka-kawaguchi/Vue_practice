<template>
  <div id="app">
    <button class="button" @click="add">Push!</button>
    <p>Pushed {{ count }} times!</p>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    // dataの代わり
    const count = ref(0);

    // methodsの代わり
    const add = () => {
      count.value += 1;
    };

    return {
      count,
      add,
    };
  },
});
</script>
