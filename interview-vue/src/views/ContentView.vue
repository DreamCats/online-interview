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
            <van-cell-group class="card-class" @click="onClick(item)" inset>
              <van-row justify="space-between">
                <van-col span="12">
                  <van-image
                    round
                    width="3rem"
                    height="3rem"
                    fit="cover"
                    :src="item.url"
                  />
                </van-col>
                <van-col span="10" offset="2">
                  <van-cell :value="item.tag_name" />
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
import ImgBar from '../components/ImgBar.vue';
import { getTagListAll, getTagDetail, updateTag, deleteTag } from "../api/api";
import { ref } from "vue";
import { Toast } from 'vant';
import { useRouter } from "vue-router";
export default {
  setup() {
    const list = ref([]);
    const loading = ref(false);
    const finished = ref(false);
    const router = useRouter();

    const themeVars = {
      cellGroupInsetPadding: "10px",
      cellGroupInsetBorderRadius: "20px",
      cellGroupBackgroundColor: "#dff9fb",
      cellBackgroundColor: "#dff9fb",
    };

    const onLoad = () => {
      // 异步更新数据
      getTagListAll().then((res) => {
        if (res.status == 200) {
          console.log('getTagListAll:', res.data.data);
          list.value = res.data.data;
          loading.value = false;
          finished.value = true;
        }
      }).catch((err) => {
        console.log(err);
      });
    };

    const onClick = (item) => {
      router.push({
        path: '/content-list',
        query: {
          uuid: item.uuid,
          imgUrl: item.url,
        }
      });
    };
    return {
      list,
      onLoad,
      loading,
      finished,
      themeVars,
      onClick,
    };
  },
  components: {
    ImgBar,
  },
};
</script>

<style>
</style>