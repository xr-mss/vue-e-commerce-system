<template>
  <div>
    <div class="cart-header">
      <van-icon :name="isEditor ? 'success' : 'editor'"></van-icon>
      <span @click="isEditor = !isEditor">{{
        isEditor ? "完成" : "编辑"
      }}</span>
    </div>
    <van-checkbox-group v-model="checkedGoods" @change="groupChange">
      <van-swipe-cell
        :disabled="!isEditor"
        v-for="(item, index) in cartList"
        :key="index"
      >
        <div class="goods-item">
          <van-checkbox
            v-model="item.checked"
            :name="item.id"
            style="margin-left: 10px"
          ></van-checkbox>
          <van-card
            :num="item.number"
            :price="item.price | priceFormat"
            :title="item.goodsName"
            class="goods-card"
            :thumb="item.picUrl"
          >
            <template #tags>
              <van-tag
                v-for="(s, index) in item.specifications"
                :key="index"
                plain
                >{{ s }}</van-tag
              >
            </template>
            <template #footer>
              <div v-if="!isEditor">添加日期：{{ item.addTime }}</div>
              <van-stepper
                v-else
                v-model="item.number"
                @change="numChange(item)"
              ></van-stepper>
            </template>
          </van-card>
        </div>
        <template #right>
          <van-button
            square
            text="删除"
            type="danger"
            class="delete-button"
            @click="delItem(item)"
          />
        </template>
      </van-swipe-cell>
    </van-checkbox-group>
    <van-empty description="购物车空" v-if="!cartList.length" />
    <van-submit-bar
      style="bottom: 50px"
      :loading="loading"
      :price="totalPrice"
      :button-text="isEditor ? '删除' : '结算'"
      label="总计"
      @submit="cartSubmit"
    >
      <van-checkbox v-model="checkedAll" @click="checkedAllChange"
        >全选</van-checkbox
      >
    </van-submit-bar>
  </div>
</template>

<script>
import { getCartDataAPI } from "@/api/cartAPI";
import _ from "lodash";
export default {
  data() {
    return {
      isEditor: false,
      checkedGoods: [],
      checkedAll: false,
      loading: false,
      cartTotal: {
        goodsCount: 0,
        checkedGoodsCount: 0,
        goodsAmount: 0,
        checkedGoodsAmount: 0,
      },
      cartList: [],
    };
  },
  created() {
    this.initCartData();
    this.getCheckedList();
  },
  computed: {
    totalPrice() {
      return this.cartList.reduce((total, item) => {
        return (total +=
          this.checkedGoods.indexOf(item.id) !== -1
            ? item.price * item.number * 100
            : 0);
      }, 0);
    },
  },
  methods: {
    groupChange() {
      this.checkedAll = this.checkedGoods.length === this.cartList.length;
      let checkedArray = [];
      let uncheckedArray = [];
      _.each(this.cartList, (item) => {
        if (checkedData.indexOf(item.id) !== -1) {
          checkedArray.push(item.productId);
        } else {
          uncheckedArray.push(item.productId);
        }
      });
    },
    numChange(item) {},
    cartSubmit() {
      if (this.isEditor) {
        let delArray = [];
        this.cartList.forEach((item) => {
          delArray.push(item.productId);
        });
        this.cartList = [];
        this.isEditor = false;
      } else {
        this.loading = true;
      }
    },
    checkedAllChange() {
      if (this.checkedAll) {
        this.cartList.forEach((p) => {
          this.checkedGoods.push(p.id);
        });
      } else {
        this.checkedGoods = [];
      }
    },
    async initCartData() {
      const { data: res } = await getCartDataAPI();
      console.log(res);
      this.cartTotal = res.cartTotal;
      this.cartList = res.cartList;
    },
    getCheckedList() {
      this.cartList.forEach((p) => {
        if (p.checked) {
          this.checkedGoods.push(p.id);
        }
      });
    },
    delItem(item) {
      let delArray = [item.productId];
      let index = _.findIndex(this.cartList, (e) => e.id == item.id);
      this.cartList.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.cart-header {
  text-align: right;
  height: 46px;
  line-height: 46px;
  margin-right: 20px;
}
.goods-card {
  width: 100%;
  background-color: white;
}

.delete-button {
  height: 100%;
}
.goods-item {
  display: flex;
}
</style>
