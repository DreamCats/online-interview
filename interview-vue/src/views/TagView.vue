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
                <van-button square type="primary" text="编辑" @click="onEdit(item.uuid)" class="edit-button"/>
              </template>
              <van-cell-group class="card-class" inset>
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
              <template #right>
                <van-button square type="danger" text="删除" @click="onDelete(item.uuid)" class="delete-button"/>
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
                    @click="onUpdate"
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
import { getTagListAll, getTagDetail, updateTag, deleteTag } from "../api/api";
import { Toast } from 'vant';
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
    const item = ref({
      uuid: "",
      tag_name: "",
      tag_type: "",
      url: ""
    });

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

    const onEdit = (uuid) => {
      loading.value = true;
      console.log('onEdit:', uuid);
      let param = {
        uuid: uuid
      };
      getTagDetail(param).then((res) => {
        if (res.status == 200) {
          console.log('getTagDetail:', res.data.data);
          item.value = res.data.data;
          tagName.value = res.data.data.tag_name;
          tagImgUrl.value = res.data.data.url;
          tagType.value = tagTypes[res.data.data.tag_type-1];
          showEditTag.value = true;
        }
        loading.value = false;
      }).catch((err) => {
        console.log(err);
      });
    };

    const onUpdate = () => {
      loading.value = true;
      let data = {
        uuid: item.value.uuid,
        tag_name: tagName.value,
        tag_type: tagTypes.indexOf(tagType.value) + 1,
        url: tagImgUrl.value
      };
      console.log('onUpdate:', data);
      updateTag(data).then((res) => {
        if (res.status == 200) {
          console.log('updateTag:', res.data);
          Toast.success('更新成功');
          showEditTag.value = false;
          list.value = [];
          onLoad();
        }
        loading.value = false;
      }).catch((err) => {
        console.log(err);
      });
    };
    
    const onDelete = (uuid) => {
      loading.value = true;
      console.log('onDelete:', uuid);
      let param = {
        uuid: uuid
      };
      deleteTag(param).then((res) => {
        if (res.status == 200) {
          console.log('deleteTag:', res.data);
          Toast.success('删除成功');
          list.value = [];
          onLoad();
        }
        loading.value = false;
      }).catch((err) => {
        console.log(err);
      });
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
      onUpdate,
      onDelete,
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