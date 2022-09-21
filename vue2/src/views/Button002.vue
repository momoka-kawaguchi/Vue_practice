<template>
  <div id="app">
    <p v-if="count == 1">Pushed once!</p>
    <p v-else-if="count == 2">Pushed twice!</p>
    <p v-else-if="count == 0"></p>
    <p v-else>Pushed {{ count }} times!</p>
    <button class="button" @click="add">Push!</button>
  </div>
</template>

<script>
export default {
  name: "Button001",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    add() {
      this.count += 1;
    },
  },
};
</script>
