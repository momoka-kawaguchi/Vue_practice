<template>
  <div class="pagination">
    <div style="text-align: left">
      <a
        :href="`?page=${prevPage}`"
        class="prev"
        v-if="currentPage > 1"
        @click.prevent="onPrev"
        >前へ</a
      >
    </div>
    <div style="text-align: right">
      <a
        :href="`?page=${nextPage}`"
        class="next"
        v-if="currentPage < totalPage"
        @click.prevent="onNext"
        >次へ</a
      >
    </div>
    <div class="total">ページ {{ currentPage }}/{{ totalPage }}</div>
  </div>
</template>
<script>
export default {
  props: {
    page: {
      type: Number,
      required: true,
    },
    totalPage: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      currentPage: this.page,
    };
  },
  computed: {
    prevPage() {
      return Math.max(this.currentPage - 1, 1);
    },
    nextPage() {
      return Math.min(this.currentPage + 1, this.totalPage);
    },
  },
  methods: {
    onPrev() {
      this.currentPage = this.prevPage;
      this.$emit("change", this.currentPage);
    },
    onNext() {
      this.currentPage = this.nextPage;
      this.$emit("change", this.currentPage);
    },
  },
};
</script>
<style scoped>
.total * {
  display: inline;
}
a {
  border: 0;
  background: none;
  font-size: initial;
  cursor: pointer;
  margin: 0 1rem;
}
</style>
