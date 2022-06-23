<template>
  <div>
    <UserAvatar></UserAvatar>
    <div>
      <van-cell title="我的订单" isLink value="全部订单"></van-cell>
      <van-grid :column-num="4">
        <van-grid-item
          icon="daifukuan"
          text="待付款"
          :badge="2"
        ></van-grid-item>
        <van-grid-item icon="daifahuo" text="待发货" :badge="2"></van-grid-item>
        <van-grid-item icon="wuliu" text="待收货" :badge="2"></van-grid-item>
        <van-grid-item
          icon="shouhouguanli"
          text="已完成"
          :badge="2"
        ></van-grid-item>
      </van-grid>
    </div>
    <div>
      <van-cell title="我的优惠劵" isLink value="全部优惠券"></van-cell>
      <van-grid :column-num="3" icon-size="24px">
        <van-grid-item icon="coupon" text="待使用" :badge="2"></van-grid-item>
        <van-grid-item icon="coupon-used" text="已使用"></van-grid-item>
        <van-grid-item icon="coupon-due" text="已过期"></van-grid-item>
      </van-grid>
    </div>
    <div>
      <van-cell title="我的收藏" is-link icon="shoucang" />
      <van-cell title="收货地址" is-link icon="dingwei" />

      <van-cell title="服务中心" is-link icon="kefu" />
    </div>
  </div>
</template>

<script>
import UserAvatar from "@/components/UserAvatar.vue";
export default {
  data() {
    return {};
  },
  components: {
    UserAvatar,
  },
};
</script>

<style scoped></style>
