<template>
  <div>
    <input type="text" v-model="newName" placeholder="名前" /><br />
    <button class="button" @click="add()">追加</button>
    <button class="button" @click="deleteName()">削除</button>
    <ul style="text-align: left">
      <li v-for="name in names" :key="name.id">
        {{ name.data }}
      </li>
    </ul>
  </div>
</template>

<script>
import { v4 } from "uuid";
export default {
  data() {
    return {
      newName: "",
      names: [],
    };
  },
  methods: {
    add() {
      this.names.push({
        id: v4(),
        data: this.newName,
      });
      this.newName = "";
    },
    deleteName() {
      this.names.shift();
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
