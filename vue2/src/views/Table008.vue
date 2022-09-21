<template>
  <table align="center">
    <thead>
      <tr>
        <th>ライダー</th>
        <th>俳優</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="rider in riders" :key="rider.id">
        <td>{{ rider.name }}</td>
        <td>{{ rider.actor }}</td>
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
    };
  },
};
</script>
