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
    <NameCard
      v-for="name in names"
      :userName="name"
      :key="name.id"
      @delete="deleteName"
    >
    </NameCard>
  </form>
</template>

<script>
import NameCard from "@/components/NameCard.vue";
import { v4 } from "uuid";
export default {
  components: {
    NameCard,
  },
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
        id: v4(),
        name: this.lastName + "　" + this.firstName,
        phone: this.phone,
        isMarried: this.isMarried,
      });
      this.firstName = "";
      this.lastName = "";
      this.phone = "";
      this.isMarried = "";
    },
    deleteName(id) {
      this.names = this.names.filter((x) => {
        return x.id != id;
      });
    },
  },
};
</script>
