<template>
  <div id="app">
    <input type="text" v-model="textInput" />
    <p>{{ textInput }}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const textInput = ref("");

    return { textInput };
  },
});
</script>
