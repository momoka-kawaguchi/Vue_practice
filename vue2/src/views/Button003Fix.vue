<template>
  <div>
    <!-- クリックしたらずんかどこをいれる -->
    <button @click="addMessage('ずん')">ずん</button>
    <button @click="addMessage('どこ')">どこ</button>
    <br />
    <!-- ずんどこを表示 -->
    {{ message }}
    <!-- isKiyoshiがtrueだったらきよしを表示 -->
    <h1 v-if="isKiyoshi">きよし</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // ずんどこ格納用変数
      message: "",
    };
  },
  computed: {
    // messageがずんずんずんずんどこと一致していたらtrueを返す
    isKiyoshi: function () {
      return this.message === "ずんずんずんずんどこ";
    },
  },
  methods: {
    // ずんとどこを入れるメソッド
    addMessage(text) {
      // 長さチェックして、10文字だったらリセット
      this.checkLength();

      // 受け取ったテキストを追加
      this.message += text;
    },
    checkLength() {
      // 10文字だったら空文字でりせっとする
      if (this.message.length === 10) {
        this.message = "";
      }
    },
  },
};
</script>
