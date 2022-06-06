<template>
  <div class="content-list">
    <div class="nav-bar">
      <van-nav-bar
        title="内容列表"
        left-text="返回"
        @click-left="onClickLeft"
      />
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
            <van-swipe-cell>
              <template #left>
                <van-button
                  square
                  type="primary"
                  text="编辑"
                  @click="onEdit(item.uuid)"
                  class="edit-button"
                />
              </template>
              <van-cell-group class="card-class" inset>
                <van-cell
                  center
                  :title="item.title"
                  :label="item.publish_time"
                  :icon="imgUrl"
                >
                  <van-button
                    type="primary"
                    plain
                    round
                    icon="eye"
                    size="small"
                  />
                </van-cell>
                <van-row>
                  <van-col offset="12" span="6">
                    <van-icon name="like-o" /> ({{ item.like_count }})
                  </van-col>
                  <van-col span="6">
                    <van-icon name="fire-o" /> ({{ item.view_count }})
                  </van-col>
                </van-row>
              </van-cell-group>
              <template #right>
                <van-button
                  square
                  type="danger"
                  text="删除"
                  class="delete-button"
                />
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
          v-model:show="showEditContent"
          round
          closeable
          position="bottom"
          :style="{ height: '40%' }"
        >
          <van-form style="margin: 24px">
            <van-cell-group inset>
              <van-field
                v-model="title"
                name="标题"
                label="标题"
                placeholder="请填写文章标题"
                :rules="[{ required: true, message: '请填写文章名称' }]"
              />
              <van-field
                v-model="contentAbstract"
                name="文章摘要"
                label="文章摘要"
                placeholder="文章摘要"
                :rules="[{ required: true, message: '请填写文章摘要' }]"
              />
              <van-field
                v-model="tagName"
                is-link
                readonly
                name="picker"
                label="标签"
                placeholder="点击选择标签"
                @click="showTagNamePicker = true"
              />
              <van-popup v-model:show="showTagNamePicker" position="bottom">
                <van-picker
                  :columns="tagNames"
                  @confirm="onTagNameConfirm"
                  @cancel="showTagNamePicker = false"
                />
              </van-popup>
              <van-field
                v-model="content"
                rows="4"
                autosize
                label="内容"
                type="textarea"
                placeholder="请输入内容（markdown）"
              />
            </van-cell-group>
            <div style="margin: 16px">
              <van-row justify="space-between">
                <van-col offset="8" span="8">
                  <van-button
                    type="info"
                    plain
                    round
                    hairline
                    size="small"
                    block
                    @click="onClickUpdate"
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
import { computed, ref } from "vue";
import ImgBar from "../components/ImgBar.vue";
import { useRouter, useRoute } from "vue-router";
import { contentList, getContentDetail, updateContent } from "../api/api";
import { Toast } from 'vant';
export default {
  setup() {
    const onClickLeft = () => history.back();
    const list = ref([]);
    const loading = ref(false);
    const finished = ref(false);
    const showEditContent = ref(false);
    const title = ref("");
    const contentAbstract = ref("");
    const tagName = ref("");
    const showTagNamePicker = ref(false);
    const tagNames = ["后端", "前端", "通用", "算法题"];
    const content = ref("");
    const route = useRoute();
    const uuid = computed(() => route.query.uuid);
    const imgUrl = computed(() => route.query.imgUrl);
    let params = ref({
      tc_uuid: uuid.value,
      page: 1,
      page_size: 20,
    });
    const item = ref({});

    const themeVars = {
      cellGroupInsetPadding: "10px",
      cellGroupInsetBorderRadius: "20px",
      cellGroupBackgroundColor: "#dff9fb",
      cellBackgroundColor: "#dff9fb",
      cellIconSize: "32px",
    };

    const onLoad = () => {
      // 异步更新数据
      setTimeout(() => {
        console.log("params", params);
        contentList(params.value).then((res) => {
          if (res.status == 200) {
            console.log("contList", res.data.data);
            list.value = list.value.concat(res.data.data.data);
          }
          if (res.data.data.has_next) {
            console.log("has_next");
            params.value.page += 1;
          } else {
            finished.value = true;
          }
          loading.value = false;
        });
      }, 1000);
    };

    const onTagNameConfirm = (value) => {
      tagName.value = value;
      showTagNamePicker.value = false;
    };

    const onEdit = (uuid) => {
      loading.value = true;
      console.log('onEdit:', uuid);
      let params = {
        uuid: uuid
      };
      getContentDetail(params).then((res) => {
        if (res.status == 200) {
          console.log('getContentDetail:', res.data.data);
          item.value = res.data.data;
          tagName.value = tagNames[res.data.data.tag_type - 1];
          title.value = res.data.data.title;
          contentAbstract.value = res.data.data.abstract;
          content.value = res.data.data.content;
          showEditContent.value = true;
        }
        loading.value = false;
      }).catch(() => {

      });
    };
    
    const onClickUpdate = () => {
      loading.value = true;
      let data = {
        uuid: item.value.uuid,
        title: title.value,
        abstract: contentAbstract.value,
        content: content.value,
        tag_type: tagNames.indexOf(tagName.value) + 1,
      };
      console.log('onUpdate:', data);
      updateContent(data).then((res) => {
        if (res.status == 200) {
          console.log('updateContent:', res.data);
          Toast.success('更新成功');
          showEditContent.value = false;
          list.value = [];
          params.value.page = 1;
          onLoad();
        }
        loading.value = false;
      }).catch(() => {

      });
    };

    return {
      onClickLeft,
      list,
      onLoad,
      loading,
      finished,
      themeVars,
      showEditContent,
      title,
      contentAbstract,
      tagName,
      showTagNamePicker,
      tagNames,
      content,
      onTagNameConfirm,
      onEdit,
      imgUrl,
      onClickUpdate,
    };
  },
  components: {
    ImgBar,
  },
};
</script>

<style>
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