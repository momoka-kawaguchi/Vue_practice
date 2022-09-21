<template>
  <div id="app">
    <button @click="Zun">ずん</button>
    <button @click="Doko">どこ</button>
    <p>{{ add }}</p>
    <p>{{ kiyoshi2 }}</p>
  </div>
</template>

<script>
export default {
  name: "zundokoButton",
  data() {
    return {
      zun: "",
      doko: "",
      kiyoshi: "",
    };
  },
  computed: {
    add: function () {
      return this.zun + this.doko;
    },
    kiyoshi2: function () {
      return this.kiyoshi;
    },
  },
  methods: {
    Zun() {
      if (this.add.length === 12) {
        this.zun = "";
        this.doko = "";
      } else {
        this.zun += "ずん";
      }
      this.Kiyoshi();
    },
    Doko() {
      if (this.add.length === 12) {
        this.zun = "";
        this.doko = "";
      } else {
        this.doko += "どこ";
      }
      this.Kiyoshi();
    },
    Kiyoshi() {
      if (this.add === "ずん" + "ずん" + "ずん" + "ずん" + "どこ") {
        this.kiyoshi = "きよし";
      } else {
        this.kiyoshi = "";
      }
    },
  },
};
</script>
