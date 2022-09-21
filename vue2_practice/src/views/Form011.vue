<template>
  <div>
    <input type="text" placeholder="名前" v-model="newName" />
    <button @click="add()">追加</button>
    <ul style="text-align: left">
      <li v-for="(name, i) in names" :key="i">
        {{ name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newName: "",
      names: [],
    };
  },
  methods: {
    add() {
      this.names.push(this.newName);
      this.newName = "";
    },
  },
};
</script>

<style scoped>
button {
  position: relative;
  color: #3333ff;
  background: #ffffff;
  border: 2px solid #ccccff;
  border-radius: 3px;
  padding: 3px 10px 3px 10px;
}
</style>
