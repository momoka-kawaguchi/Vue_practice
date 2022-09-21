<template>
  <form @submit.prevent="add">
    <div class="form-name">
      <span>姓</span>
      <input
        type="text"
        name="lastName"
        maxlength="10"
        class="form-control"
        placeholder="例)  山田"
        v-model="lastName"
        required
      />
      <span>名</span>
      <input
        type="text"
        name="firstName"
        maxlength="10"
        class="form-control"
        placeholder="例)  太郎"
        v-model="firstName"
        required
      /><br />
      <span>電話番号</span>
      <input
        type="tel"
        id="phone"
        name="phone"
        placeholder="例)  000-0000-0000"
        pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
        v-model="phone"
        required
      />
    </div>
    <input
      type="radio"
      id="radio1"
      name="radio"
      :value="true"
      v-model="isMarried"
      required
    />
    <label for="radio1">既婚</label>
    <input
      type="radio"
      id="radio2"
      name="radio"
      :value="false"
      v-model="isMarried"
      required
    />
    <label for="radio2">独身</label>
    <br />
    <input type="submit" value="登録" />
    <table align="center">
      <thead>
        <tr>
          <th>ID</th>
          <th>氏名</th>
          <th>電話番号</th>
          <th>既婚/独身</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="name in names" :key="name.id" class="table-tr">
          <td>{{ name.userId }}</td>
          <td>{{ name.name }}</td>
          <td>{{ name.phone }}</td>
          <td>{{ name.isMarried ? "既婚" : "独身" }}</td>
        </tr>
      </tbody>
    </table>
  </form>
</template>

<script>
import { v4 } from "uuid";
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      phone: "",
      names: [],
      isMarried: "",
    };
  },
  methods: {
    add() {
      this.names.push({
        userId: v4(),
        name: this.lastName + "　" + this.firstName,
        phone: this.phone,
        isMarried: this.isMarried,
      });
      this.firstName = "";
      this.lastName = "";
      this.phone = "";
      this.isMarried = "";
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
