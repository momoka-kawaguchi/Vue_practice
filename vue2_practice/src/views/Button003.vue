<template>
  <div>
    <button @click="addMessage('ずん')">ずん</button>
    <button @click="addMessage('どこ')">どこ</button>
    <p>{{ zundoko }}</p>
    <h1 v-if="isKiyoshi()">きよし!</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      zundoko: "",
    };
  },
  computed: {
    isKiyoshi() {
      return this.zundoko === "ずんずんずんずんどこ";
    },
  },
  methods: {
    addMessage(text) {
      this.zundoko += text;
      this.checkAndReset();
    },
    checkAndReset() {
      if (this.zundoko.length > 11) {
        this.zundoko = "";
      }
    },
  },
};
</script>
