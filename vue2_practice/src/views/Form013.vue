<template>
  <div>
    <input type="text" v-model="newName" placeholder="名前" /><br />
    <button class="add" @click="addName">追加</button>
    <ul style="text-align: left">
      <li v-for="name in names" :key="name.id">
        {{ name.data }}
        <button class="delete" @click="deleteName(name.id)">削除</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { v4 } from "uuid";
export default {
  data() {
    return {
      names: [],
      newName: "",
    };
  },
  methods: {
    addName() {
      this.names.push({
        id: v4(),
        data: this.newName,
      });
      this.newName = "";
    },
    // name:コールバック関数
    deleteName(id) {
      this.names = this.names.filter((name) => {
        return name.id != id;
      });
    },
  },
};
</script>

<style scoped>
.add {
  position: relative;
  left: 110px;
  bottom: 25px;
  color: #3333ff;
  background: #ffffff;
  border: 2px solid #ccccff;
  border-radius: 3px;
  padding: 3px 10px 3px 10px;
}
.delete {
  position: relative;
  color: #3333ff;
  background: #ffffff;
  border: 2px solid #ccccff;
  border-radius: 3px;
  padding: 3px 10px 3px 10px;
}
</style>
