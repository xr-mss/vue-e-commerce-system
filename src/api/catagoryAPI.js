import request from "@/utils/request";

export function getCategoryDataAPI() {
  return request.get("/category/index");
}

export function getCurrentCategoryDataAPI() {
  return request.get("/category/index");
}
