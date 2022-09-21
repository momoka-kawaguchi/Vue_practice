<template>
  <div class="card">
    <p>{{ zundokoData }}</p>
    <h1 v-if="isKiyoshi">きよし!</h1>
  </div>
</template>

<script>
export default {
  props: {
    zundokoData: { type: String },
  },
  computed: {
    isKiyoshi() {
      return this.zundokoData === "ずんずんずんずんどこ";
    },
  },
};
</script>

<style scoped>
.card {
  width: 300px;
  height: 80px;
  outline: 1px solid #000;
  font-size: 1.5vw;
  padding: 1%;
  margin: 30px;
  margin-left: auto;
  margin-right: auto;
}
.name {
  float: left;
  right: 25px;
}
.tel {
  float: right;
  margin-right: 20px;
}
button {
  padding: 0.5em 1em;
  background: #3333ff; /*ボタン色*/
  color: #fff;
  border-radius: 3px;
}
</style>
