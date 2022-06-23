<template>
  <div><van-search placeholder="搜索" @click="toSearch"></van-search></div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    toSearch() {
      this.$router.push("/search");
    },
  },
};
</script>

<style scoped></style>
