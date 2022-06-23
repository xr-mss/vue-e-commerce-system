<template>
  <div class="user">
    <div class="user-header">
      <van-icon name="set" class="header-setting"></van-icon>
      <div class="user-avatar">
        <img :src="avatar" alt="" />
        <div class="nickname">{{ nickName }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import avatar_default from "@/assets/images/avatar_default.png";
export default {
  data() {
    return {
      avatar: avatar_default,
      nickName: "mall",
    };
  },
};
</script>

<style scoped>
.user {
  width: 100%;
  height: 100%;
  background-color: #efefef;
}
.user > div {
  margin-bottom: 10px;
}
.user-header {
  height: 130px;
  background-color: #f00000;
}
.header-setting {
  position: absolute;
  top: 0;
  right: 0;
  color: white;
  font-size: 24px;
  padding: 10px;
}
.user-avatar {
  text-align: center;
  padding-top: 30px;
}
.user-avatar img {
  width: 60px;
  height: 60px;
  border-radius: 30px;
}
.user-avatar .nickname {
  color: white;
  margin-top: 10px;
}
</style>
