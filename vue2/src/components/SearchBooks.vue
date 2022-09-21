<template>
  <div>
    <table align="center">
      <tr
        v-for="(item, index) in filterItems"
        :key="index"
        class="flex"
        :v-if="items"
        target="SearchBooks"
      >
        <figure v-if="item.image !== ''" class="image">
          <img :src="item.image" />
        </figure>
        <p v-else>画像情報なし</p>
        <div class="right">
          <h1 class="title">{{ item.title }}</h1>
          <p class="text">出版日：{{ item.publishedDate }}</p>
          <p v-if="item.authors !== ''" class="text">{{ item.authors }}</p>
          <p v-else>著者情報なし</p>
          <p class="text">{{ item.description }}</p>
        </div>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    filterItems: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.flex {
  display: flex; /*横並び*/
  border-bottom: 1px solid gray;
  margin: 30;
  padding: 80px 150px 80px;
}
.flex .image {
  margin: 30;
  padding: 30;
  position: relative;
  width: 100px;
}
.flex .right {
  margin: 0 0 0 20px;
  padding: 0;
}
.flex .title {
  margin: 0;
  padding: 0;
  font-weight: bold;
  font-size: 18px;
  text-align: left;
}
.flex .text {
  margin: 10px 0 0;
  padding: 0;
  text-align: left;
}
.flex.p {
  margin-bottom: 100px;
}
</style>
