<template>
  <div>
    <input type="text" v-model="braveName" placeholder="名前" />
    <div class="braveName">
      <p v-if="braveName === 'ソロ'">勇者 1</p>
      <p v-else-if="braveName === 'ロラン'" color="red">勇者 2</p>
      <p v-else-if="braveName === 'アルス'">勇者 3</p>
      <p v-else-if="braveName === 'ソフィア'">勇者 4</p>
      <p v-else-if="braveName === 'アベル'">勇者 5</p>
      <p v-else-if="braveName === 'レック'">勇者 6</p>
      <p v-else-if="braveName === 'エイト'">勇者 8</p>
      <p v-else-if="braveName === 'ナイン'">勇者 9</p>
      <p v-else-if="braveName === 'エックス'">勇者 10</p>
      <p v-else-if="braveName === 'イレブン'">勇者 11</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      braveName: "",
    };
  },
};
</script>

<style scoped>
.braveName {
  color: red;
}
</style>
