import request from "@/utils/request";

export function login(user) {
  return request({
    url: "login",
    method: "post",
    data: user,
  });
}
