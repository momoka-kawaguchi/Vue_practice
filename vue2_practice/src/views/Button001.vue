<template>
  <div>
    <button class="button" @click="add">Push!</button>
    <p>Pushed {{ count }} times!</p>
  </div>
</template>

<script>
export default {
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
