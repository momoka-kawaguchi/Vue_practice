<template>
  <div class="card">
    <h1 class="name">{{ userName.name }}</h1>
    <small class="tel">TEL:{{ userName.phone }}</small
    ><br /><br />
    <button class="delete" @click="deleteName(userName.id)">削除</button>
    <span class="maritalStatus">{{
      userName.isMarried ? "既婚" : "独身"
    }}</span>
  </div>
</template>

<script>
export default {
  props: {
    userName: { type: Object },
  },
  methods: {
    deleteName(id) {
      this.$emit("delete", id);
    },
  },
};
</script>

<style scoped>
.card {
  width: 500px;
  height: 90px;
  outline: 1px solid #000;
  font-size: 1.5vw;
  padding: 1%;
  margin: 30px;
  margin-left: auto;
  margin-right: auto;
}
.name {
  float: left;
}
.tel {
  float: right;
  margin-right: 20px;
}
.maritalStatus {
  float: right;
  margin-right: 20px;
}
button {
  padding: 0.5em 1em;
  background: #3333ff; /*ボタン色*/
  color: #fff;
  border-radius: 3px;
  float: right;
  margin-right: 20px;
}
</style>
