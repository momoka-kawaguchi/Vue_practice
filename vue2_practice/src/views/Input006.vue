<template>
  <div>
    <div :style="styleObject">い</div>
    <input type="range" min="16" max="116" v-model="scale" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      scale: 16,
    };
  },
  computed: {
    styleObject() {
      return { "font-size": this.scale + "px" };
    },
  },
};
</script>
