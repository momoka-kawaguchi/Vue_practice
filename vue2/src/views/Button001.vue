<template>
  <div id="app">
    <button class="button" @click="add">Push!</button>
    <p>Pushed {{ count }} times!</p>
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
