<template>
  <div id="bar">
    <van-tabbar route v-model="active">
      <van-tabbar-item replace to="/tag" icon="bookmark-o">
        标签管理
      </van-tabbar-item>
      <van-tabbar-item replace to="/content" icon="notes-o">
        知识管理
      </van-tabbar-item>
      <van-tabbar-item replace to="/blog" icon="records">
        博客管理
      </van-tabbar-item>
      <van-tabbar-item replace to="/user" icon="user-o">
        用户管理
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const active = ref(0);
    return { active };
  },
};

</script>
