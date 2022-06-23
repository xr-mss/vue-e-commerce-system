<template>
  <div>
    <UserAvatar></UserAvatar>
    <div>
      <van-field
        v-model="username"
        left-icon="username"
        placeholder="请输入用户名"
        clearable
      ></van-field>
      <van-field
        v-model="password"
        left-icon="lock"
        placeholder="请输入密码"
        :type="passwdVisible ? 'text' : 'password'"
        @click-right-icon="passwdVisible = !passwdVisible"
        :right-icon="password ? (passwdVisible ? 'eye-open' : 'eye-close') : ''"
      ></van-field>
    </div>
    <div
      class="cleargix"
      style="margin: 10px 30px; height: 30px; line-height: 30px"
    >
      <div class="fl">免费注册</div>
      <div class="fr">忘记密码</div>
    </div>
    <div style="margin: 0 15px">
      <van-button style="width: 100%" type="danger" @click="dologin"
        >登录</van-button
      >
    </div>
  </div>
</template>
<script>
import UserAvatar from "@/components/UserAvatar.vue";
import { login } from "@/api/login.js";
import { setToken } from "@/utils/token.js";
export default {
  name: "MallMobileLogin",
  data() {
    return {
      username: "",
      password: "",
      passwdVisible: false,
    };
  },
  methods: {
    dologin() {
      login({ username: this.username, password: this.password }).then(
        (resp) => {
          if (resp.data.errno == 0) {
            setToken(resp.data.token);
            console.info(this.$route.query.redirect);
            this.$router.push(
              this.$route.query.redirect ? this.$route.query.redirect : "/user"
            );
          }
        }
      );
    },
  },
  components: {
    UserAvatar,
  },
};
</script>

<style scoped></style>
