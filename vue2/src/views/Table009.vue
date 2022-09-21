<template>
  <table align="center">
    <thead>
      <tr>
        <th>ライダー</th>
        <th>俳優</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="rider in riders"
        :key="rider.id"
        :class="{ checked: isSelected(rider.id) }"
        class="table-tr"
      >
        <td>{{ rider.name }}</td>
        <td>{{ rider.actor }}</td>
        <td>
          <input type="checkbox" v-model="selectedMembers" :value="rider.id" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { v4 } from "uuid";
export default {
  data() {
    return {
      riders: [
        { id: v4(), name: "仮面ライダー1号", actor: "藤岡弘" },
        { id: v4(), name: "仮面ライダー2号", actor: "佐々木剛" },
        { id: v4(), name: "仮面ライダーV3", actor: "宮内洋" },
      ],
      selectedMembers: [],
    };
  },
  methods: {
    isSelected(id) {
      return this.selectedMembers.includes(id);
    },
    // isSelected2(id) {
    //   let isSelected = false;
    //   this.selectedMembers.forEach((userId) => {
    //     if (userId === id) {
    //       isSelected = true;
    //     }
    //   });
    //   return isSelected;
    // },
  },
};
</script>
<style scoped>
table {
  border-collapse: collapse;
}
.checked {
  background: #9999ff;
}
</style>
