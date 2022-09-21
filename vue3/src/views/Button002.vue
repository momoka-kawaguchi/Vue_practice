<template>
  <div id="app">
    <p v-if="count == 1">Pushed once!</p>
    <p v-else-if="count == 2">Pushed twice!</p>
    <p v-else-if="count == 0"></p>
    <p v-else>Pushed {{ count }} times!</p>
    <button class="button" @click="add">Push!</button>
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
