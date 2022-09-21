<template>
  <div id="app">
    <div>
      <input type="text" v-model="searchWord" placeholder="検索ワード" />
      <button @click="searchRequest">検索する</button>
    </div>
    <search-books :items="items"></search-books>
  </div>
</template>

<script>
import SearchBooks from "@/components/SearchBooks";
export default {
  components: {
    SearchBooks,
  },
  data() {
    return {
      searchWord: "",
      items: [],
    };
  },
  methods: {
    searchRequest() {
      // urlからデータを読み込む
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.searchWord}`)
        // データを受け取って、加工
        .then((response) => {
          if (response) {
            // jason はオブジェクト（連想配列）
            return response.json();
          } else {
            return;
          }
        })
        .then((data) => {
          this.items = data.items.map((item) => {
            return {
              id: item.id,
              title: item.volumeInfo.title,
              description: item.volumeInfo.description,
            };
          });
        })
        // 通信にエラーが発生した場合
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
