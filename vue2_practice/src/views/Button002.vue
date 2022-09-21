<template>
  <div>
    <button @click="add">Button</button>
    <p v-if="count === 1">Pushed once!</p>
    <p v-else-if="count === 0"></p>
    <p v-else-if="count === 2">Pushed twice!</p>
    <p v-else>Pushed {{ count }} times!</p>
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
