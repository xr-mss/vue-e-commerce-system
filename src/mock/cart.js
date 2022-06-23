let cart = {
  cartTotal: {
    goodsCount: 2,
    checkedGoodsCount: 2,
    goodsAmount: 4078,
    checkedGoodsAmount: 4078,
  },
  cartList: [
    {
      id: 3,
      userId: 1,
      goodsId: 1109008,
      goodsSn: "1109008",
      goodsName: "云端沙发组合",
      productId: 140,
      price: 3999,
      number: 1,
      specifications: ["标准"],
      checked: true,
      picUrl:
        "http://yanxuan.nosdn.127.net/c5be2604c0e4186a4e7079feeb742cee.png",
      addTime: "2022-01-08 20:57:12",
      updateTime: "2022-01-11 15:03:40",
      deleted: false,
    },
    {
      id: 4,
      userId: 1,
      goodsId: 1057036,
      goodsSn: "1057036",
      goodsName: "日式纯色水洗亚麻抱枕",
      productId: 71,
      price: 79,
      number: 1,
      specifications: ["标准"],
      checked: true,
      picUrl:
        "http://yanxuan.nosdn.127.net/8a9ee5ba08929cc9e40b973607d2f633.png",
      addTime: "2022-01-08 20:57:31",
      updateTime: "2022-01-11 15:03:40",
      deleted: false,
    },
  ],
};
export default {
  "get|http://localhost:8080/wx/cart/index": () => {
    return cart;
  },
};
