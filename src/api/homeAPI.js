import request from "@/utils/request";

export const getHomeDataAPI = function () {
  return request.get("/home/index");
};
