<template>
  <div id="app">
    <div :style="'font-size:' + this.scale + 'px'">い</div>
    <div :style="styleObject">い</div>
    <div :style="{ 'font-size': this.scale + 'px' }">い</div>
    <!-- ↓変更必要v-modelになにを連動させるのかよく考える -->
    <input type="range" min="16" max="116" v-model="scale" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      scale: 116,
    };
  },
  computed: {
    // 公式サイトをみてstyleObjectにどんな形を渡しているか考える
    styleObject() {
      return { "font-size": this.scale + "px" };
    },
  },
};
</script>
