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
<script lang="ts">
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  setup() {
    // dataの代わり
    const message = ref("");

    // methodsの代わり
    const addMessage = (text: string) => {
      checkLength();
      message.value += text;
    };
    const checkLength = () => {
      if (message.value.length === 10) {
        message.value = "";
      }
    };

    // computedの代わり
    const isKiyoshi = computed(() => {
      return message.value === "ずんずんずんずんどこ";
    });

    return {
      message,
      addMessage,
      isKiyoshi,
    };
  },
});
</script>
