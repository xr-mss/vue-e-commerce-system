<template>
  <div>
    <!-- 搜索栏 -->
    <SearchBar></SearchBar>
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(ban, index) in banner" :key="index">
        <img :src="ban.url" height="220px" />
      </van-swipe-item>
    </van-swipe>
    <!-- 频道区 -->
    <van-grid>
      <van-grid-item
        v-for="item in channel"
        :key="item.id"
        :icon="item.iconUrl"
        :text="item.name"
      />
    </van-grid>
    <!-- 团购专区 -->
    <van-cell title="团购专区" is-link value="更多团购商品" />
    <van-card
      v-for="item in grouponList"
      :key="item.id"
      :price="item.grouponPrice | priceFormat"
      :desc="item.brief"
      :title="item.name"
      :thumb="item.picUrl"
      :origin-price="item.counterPrice | priceFormat"
    >
      <template #tags>
        <van-tag round plain type="success"
          >{{ item.grouponMember }}人成团</van-tag
        >
        <van-tag plain type="warning">{{ item.grouponDiscount }}元再减</van-tag>
      </template>
    </van-card>
    <!-- 品牌商直供 -->
    <van-cell title="品牌商直供" is-link value="更多品牌"></van-cell>
    <van-grid :column-num="2">
      <van-grid-item v-for="(item, index) in brandList" :key="index">
        <img :src="item.picUrl" style="width: 80%" />
        <div>{{ item.name }}</div>
      </van-grid-item>
    </van-grid>
    <!-- 新品首发 -->
    <van-cell title="新品首发" is-link value="更多新品"></van-cell>
    <van-row>
      <van-col
        span="12"
        v-for="(item, index) in newGoodsList"
        :key="index"
        style="text-align: center"
      >
        <img :src="item.picUrl" style="width: 180px; height: 180px" />
        <p>{{ item.names }}</p>
        <p style="color: #ab956d">￥{{ item.retailPrice | priceFormat }}</p>
      </van-col>
    </van-row>
    <!-- 人气推荐 -->
    <van-cell title="人气推荐" is-link value="更多人气推荐" />
    <van-card
      v-for="(item, index) in hotGoodsList"
      :key="index"
      :price="item.counterPrice | priceFormat"
      :desc="item.brief"
      :title="item.name"
      :thumb="item.picUrl"
      :origin-price="item.retailPrice | priceFormat"
    >
    </van-card>
    <!-- 专题精选 -->
    <van-cell title="专题精选" is-link value="更多专题精选"></van-cell>
    <van-row type="flex" align="center">
      <van-col
        span="12"
        v-for="(item, index) in topicList"
        :key="index"
        style="text-align: center; color: #ab956d"
      >
        <img :src="item.picUrl" style="width: 150px" />
        <p>{{ item.title }}</p>
        <p style="font-size: 12px">{{ item.subtitle }}</p>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { getHomeDataAPI } from "@/api/homeAPI";
import SearchBar from "@/components/searchBar.vue";
export default {
  data() {
    return {
      newGoodsList: [],
      couponList: [],
      channel: [],
      grouponList: [],
      banner: [],
      brandList: [],
      hotGoodsList: [],
      topicList: [],
      floorGoodsList: [],
    };
  },
  methods: {
    async initHomeData() {
      const { data: res } = await getHomeDataAPI();
      this.newGoodsList = res.newGoodsList;
      this.couponList = res.couponList;
      this.channel = res.channel;
      this.grouponList = res.grouponList;
      this.banner = res.banner;
      this.brandList = res.brandList;
      this.hotGoodsList = res.hotGoodsList;
      this.topicList = res.topicList;
      this.floorGoodsList = res.floorGoodsList;
      console.info(res);
    },
  },
  created() {
    this.initHomeData();
  },
  components: {
    SearchBar,
  },
};
</script>

<style scoped></style>
