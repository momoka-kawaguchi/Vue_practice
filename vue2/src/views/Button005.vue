<template>
  <div v-bind:style="styles">
    <input type="text" v-model="textInput" placeholder="名前" />
    <p v-if="isBrave1">勇者 1</p>
    <p v-if="isBrave2">勇者 2</p>
    <p v-if="isBrave3">勇者 3</p>
    <p v-if="isBrave4">勇者 4</p>
    <p v-if="isBrave5">勇者 5</p>
    <p v-if="isBrave6">勇者 6</p>
    <p v-if="isBrave8">勇者 8</p>
    <p v-if="isBrave9">勇者 9</p>
    <p v-if="isBrave10">勇者 10</p>
    <p v-if="isBrave11">勇者 11</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // テキスト入力用変数
      textInput: "",
      // テキスト色指定
      styles: {
        color: `red`,
      },
    };
  },
  computed: {
    isBrave1: function () {
      return this.textInput === "ソロ";
    },
    isBrave2: function () {
      return this.textInput === "ロラン";
    },
    isBrave3: function () {
      return this.textInput === "アルス";
    },
    isBrave4: function () {
      return this.textInput === "ソフィア";
    },
    isBrave5: function () {
      return this.textInput === "アベル";
    },
    isBrave6: function () {
      return this.textInput === "レック";
    },
    isBrave8: function () {
      return this.textInput === "エイト";
    },
    isBrave9: function () {
      return this.textInput === "ナイン";
    },
    isBrave10: function () {
      return this.textInput === "エックス";
    },
    isBrave11: function () {
      return this.textInput === "イレブン";
    },
  },
};
</script>
