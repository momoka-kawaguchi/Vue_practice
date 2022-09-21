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
      this.searchWord;
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
            let names = "";
            let image = "";
            if (item.volumeInfo.authors) {
              names = item.volumeInfo.authors.join(",");
            }
            if (
              item.volumeInfo.imageLinks &&
              item.volumeInfo.imageLinks.thumbnail
            ) {
              image = item.volumeInfo.imageLinks.thumbnail;
            }
            return {
              id: item.id,
              title: item.volumeInfo.title,
              authors: names,
              publishedDate: item.volumeInfo.publishedDate,
              description: item.volumeInfo.description,
              image: image,
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
