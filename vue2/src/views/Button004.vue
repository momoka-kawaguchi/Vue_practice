<template>
  <div id="app">
    <input type="text" v-model="textInput" />
    <p>{{ textInput }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // テキスト入力用変数
      textInput: "",
    };
  },
};
</script>
