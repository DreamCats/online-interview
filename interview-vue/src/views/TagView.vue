<template>
  <div class="tag">
    <div class="nav-bar">
      <van-nav-bar title="标签管理" />
    </div>
    <img-bar></img-bar>
    <van-config-provider :theme-vars="themeVars">
      <div class="tag-list">
        <van-list
          v-model:loading="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <div class="t-list" v-for="item in list" :key="item">
            <van-swipe-cell>
              <template #left>
                <van-button square type="primary" text="编辑" @click="onEdit" class="edit-button"/>
              </template>
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
              <template #right>
                <van-button square type="danger" text="删除" class="delete-button"/>
              </template>
            </van-swipe-cell>
          </div>
        </van-list>
        <van-sticky :offset-bottom="100" position="bottom">
          <van-button
            type="primary"
            hairline
            round
            icon="plus"
            plain
            @click="onAdd"
            class="plus-button"
          />
        </van-sticky>
        <van-popup
          v-model:show="showEditTag"
          round
          closeable
          position="bottom"
          :style="{ height: '30%' }"
        >
          <van-form style="margin: 16px">
            <van-cell-group inset>
              <van-field
                v-model="tagName"
                name="标签"
                label="标签"
                placeholder="标签"
                :rules="[{ required: true, message: '请填写标签名称' }]"
              />
              <van-field
                v-model="tagImgUrl"
                name="标签图片"
                label="图片链接"
                placeholder="标签图片链接"
                :rules="[{ required: true, message: '请填写标签图片链接' }]"
              />
              <van-field
                v-model="tagType"
                is-link
                readonly
                name="picker"
                label="标签类型"
                placeholder="点击选择标签类型"
                @click="showTagTypePicker = true"
              />
              <van-popup v-model:show="showTagTypePicker" position="bottom">
                <van-picker
                  :columns="tagTypes"
                  @confirm="onTagTypeConfirm"
                  @cancel="showTagTypePicker = false"
                />
              </van-popup>
            </van-cell-group>
            <div style="margin: 16px">
              <van-row justify="space-between">
                <van-col offset="8" span="8">
                  <van-button
                    type="primary"
                    plain
                    round
                    hairline
                    size="small"
                    block
                    native-type="onUpdate"
                  >
                    更新
                  </van-button>
                </van-col>
                <van-col span="8" />
              </van-row>
            </div>
          </van-form>
        </van-popup>
      </div>
    </van-config-provider>
  </div>
</template>

<script>
import ImgBar from '../components/ImgBar.vue'
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const list = ref([]);
    const loading = ref(false);
    const finished = ref(false);
    const showEditTag = ref(false);
    const tagName = ref("");
    const tagImgUrl = ref("");
    const tagType = ref("");
    const showTagTypePicker = ref(false);
    const tagTypes = ['后端', '前端', '通用', '算法题'];

    const onTagTypeConfirm = (value) => {
      tagType.value = value;
      showTagTypePicker.value = false;
    };
    const router = useRouter();

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

    const onEdit = () => {
      // 更新
      showEditTag.value = true;
    };

    const onAdd = () => router.push("/add-tag");

    return {
      list,
      onLoad,
      loading,
      finished,
      themeVars,
      showEditTag,
      onEdit,
      onAdd,
      tagName,
      tagImgUrl,
      tagType,
      showTagTypePicker,
      tagTypes,
      onTagTypeConfirm,
    };
  },
  components: {
    ImgBar,
  },
};
</script>

<style scoped>
.plus-button {
  position: fixed;
  right: 0;
  z-index: 100;
}
.edit-button {
  height: 100%;
}
.delete-button {
  height: 100%;
}
</style>