<template>
  <div class="content">
    <div class="nav-bar">
      <van-nav-bar title="内容管理" />
    </div>
    <img-bar></img-bar>
    <van-config-provider :theme-vars="themeVars">
      <div class="content-list">
        <van-list
          v-model:loading="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <div class="t-list" v-for="item in list" :key="item">
            <van-cell-group class="card-class" inset>
              <van-row justify="space-between">
                <van-col span="12">
                  <van-image
                    round
                    width="3rem"
                    height="3rem"
                    fit="cover"
                    src="https://imgs.heiye.site/wx/java.png"
                  />
                </van-col>
                <van-col span="6" offset="6">
                  <van-cell value="Java" />
                </van-col>
              </van-row>
            </van-cell-group>
          </div>
        </van-list>
      </div>
    </van-config-provider>
  </div>
</template>

<script>
import ImgBar from '../components/ImgBar.vue'
import { ref } from "vue";
export default {
  setup() {
    const list = ref([]);
    const loading = ref(false);
    const finished = ref(false);

    const themeVars = {
      cellGroupInsetPadding: "10px",
      cellGroupInsetBorderRadius: "20px",
      cellGroupBackgroundColor: "#dff9fb",
      cellBackgroundColor: "#dff9fb",
    };

    const onLoad = () => {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 3; i++) {
          list.value.push(list.value.length + 1);
        }

        // 加载状态结束
        loading.value = false;
        finished.value = true;
      }, 1000);
    };
    return {
      list,
      onLoad,
      loading,
      finished,
      themeVars,
    };
  },
  components: {
    ImgBar,
  },
};
</script>

<style>
</style>