import request from "@/utils/request";

export const getCartDataAPI = function () {
  return request.get("/cart/index");
};
