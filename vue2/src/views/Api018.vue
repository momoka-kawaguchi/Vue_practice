<template>
  <div id="app">
    <div>
      <input type="text" v-model="searchWord" placeholder="検索ワード" />
      <button @click="searchRequest">検索する</button>
    </div>
    <search-books :items="items" :filterItems="filterItems"></search-books>
    <prev-next
      :page="page"
      :totalPage="totalPage"
      @change="onPageChange"
      v-if="totalPage > 0"
    />
  </div>
</template>
<script>
import SearchBooks from "@/components/SearchBooks";
import PrevNext from "@/components/PrevNext";

export default {
  components: {
    SearchBooks,
    PrevNext,
  },
  data() {
    return {
      searchWord: "",
      items: [], //表示するデータがここに入る
      page: 1, //現在のページ番号
      perPage: 5, //1ページ毎の表示件数
      count: 0, //データの総数
    };
  },
  computed: {
    filterItems() {
      return this.items.slice(
        (this.page - 1) * this.perPage,
        this.page * this.perPage
      );
    },
    totalPage() {
      return Math.ceil(this.items.length / this.perPage);
    },
  },
  methods: {
    onPageChange(page) {
      this.page = page;
      window.history.replaceState(
        { page },
        `Page${page}`,
        `${window.location.origin}/?page=${page}`
      );
    },
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
            if (item.volumeInfo) {
              names = item.volumeInfo.authors.join(",");
            }
            if (item.volumeInfo.imageLinks) {
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
