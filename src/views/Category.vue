<template>
  <div>
    <!-- 搜索栏 -->
    <SearchBar></SearchBar>
    <!-- 分类选择 -->
    <div>
      <!-- 左侧 -->
      <van-sidebar
        class="fl"
        style="height: 100%"
        v-model="activeIndex"
        @change="sidebarChange"
      >
        <van-sidebar-item
          v-for="(item, index) in categoryList"
          :key="index"
          :title="item.name"
        />
      </van-sidebar>
      <!-- 右侧 -->
      <div class="right-content">
        <div class="right-top">
          <img :src="currentCategory.picUrl" style="width: 250px" />
          <p class="desc">{{ currentCategory.desc }}</p>
        </div>
        <van-grid :column-num="3">
          <van-grid-item
            v-for="(item, index) in currentSubCategory"
            :key="index"
          >
            <img :src="item.picUrl" style="width: 70px" />
            <p class="desc">{{ item.name }}</p>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getCategoryDataAPI,
  getCurrentCategoryDataAPI,
} from "@/api/catagoryAPI";
import SearchBar from "@/components/searchBar.vue";
export default {
  data() {
    return {
      activeIndex: 0,
      currentCategory: {},
      categoryList: [],
      currentSubCategory: [],
    };
  },
  methods: {
    async initCategoryData() {
      const { data: res } = await getCategoryDataAPI();
      this.currentCategory = res.currentCategory;
      this.categoryList = res.categoryList;
      this.currentSubCategory = res.currentSubCategory;
    },
    async sidebarChange(index) {
      console.log(index);
      this.currentCategory = this.categoryList[index];
      const { data: res } = await getCurrentCategoryDataAPI(
        this.categoryList[index].id
      );
      console.info(res);
      this.currentSubCategory = res.currentSubCategory;
    },
  },
  created() {
    this.initCategoryData();
  },
  components: {
    SearchBar,
  },
};
</script>

<style lang="css" scoped>
.fl {
  float: left;
}
.right-cotent {
  margin-left: 80px;
}
.right-top {
  text-align: center;
}
.right-top .desc {
  margin-top: 10px;
}
</style>
