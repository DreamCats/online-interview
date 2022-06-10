<template>
  <div class="login">
    <div class="nav-bar">
      <van-nav-bar title="管理员登录" />
    </div>
    <img-bar></img-bar>
    <van-form style="margin: 10px" @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block plain type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import ImgBar from "../components/ImgBar.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const username = ref("");
    const password = ref("");
    const router = useRouter()
    const onSubmit = (values) => {
      console.log("submit", values);
      console.log(username, password)
      if (username.value === 'maifeng' && password.value === 'maifeng') {
          // 路由
          router.push('/tag')
      }
    };

    return {
      username,
      password,
      onSubmit,
    };
  },
  components: {
    ImgBar,
  },
};
</script>

<style>
</style>