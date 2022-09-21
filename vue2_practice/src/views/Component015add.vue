<template>
  <div>
    <button @click="addMessage('ずん')">ずん</button>
    <button @click="addMessage('どこ')">どこ</button>
    <Zundoko
      v-for="zundokoCard in zundokoCards"
      :key="zundokoCard.id"
      :zundokoData="zundokoCard.zundokoData"
    >
    </Zundoko>
  </div>
</template>

<script>
import Zundoko from "@/components/Zundoko.vue";
import { v4 } from "uuid";
export default {
  components: {
    Zundoko,
  },
  data() {
    return {
      zundokoCards: [],
    };
  },
  methods: {
    addMessage(text) {
      if (this.zundokoCards.length !== 0) {
        this.checkAndReset(text);
      } else {
        this.zundokoCards.push({
          id: v4(),
          zundokoData: text,
        });
      }
    },
    checkAndReset(text) {
      const targetCardIndex = this.zundokoCards.length - 1;
      console.log(this.zundokoCards.length);
      if (this.zundokoCards[targetCardIndex].zundokoData.length < 10) {
        this.zundokoCards[targetCardIndex].zundokoData += text;
      } else {
        this.zundokoCards.push({
          id: v4(),
          zundokoData: text,
        });
      }
    },
  },
};
</script>
