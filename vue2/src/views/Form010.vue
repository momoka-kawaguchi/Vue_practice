<template>
  <div>
    <input v-model="name" placeholder="名前" /><br />
    <input v-model="nickname" placeholder="あだな" /><br />
    <button class="button" @click="submit()">送信</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      nickname: "",
    };
  },
  methods: {
    submit() {
      alert(
        "入力した内容は" +
          "\n" +
          "名前：" +
          this.name +
          "\n" +
          "あだな：" +
          this.nickname +
          "\n" +
          "です。"
      );
    },
  },
};
</script>

<style scoped>
button {
  position: relative;
  left: 130px;
  bottom: 25px;
  color: #3333ff;
  background: #ffffff;
  border: 2px solid #ccccff;
  border-radius: 3px;
  padding: 3px 10px 3px 10px;
}
</style>
