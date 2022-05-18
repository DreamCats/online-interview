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
                <van-button square type="primary" text="编辑" @click="onEdit" class="edit-button"/>
              </template>
              <van-cell-group class="card-class" inset>
                <van-cell
                  center
                  title="分布式"
                  label="2022-05-05"
                  icon="https://imgs.heiye.site/wx/dis.png"
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
                    <van-icon name="like-o" /> (0)
                  </van-col>
                  <van-col span="6"> <van-icon name="fire-o" /> (0) </van-col>
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
          v-model:show="showEditContent"
          round
          closeable
          position="bottom"
          :style="{ height: '40%' }"
        >
          <van-form style="margin: 24px" @submit="onSubmit">
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
                <van-col span="8"/>
              </van-row>
            </div>
          </van-form>
        </van-popup>
      </div>
    </van-config-provider>
  </div>
</template>

<script>
import { ref } from "vue";
import ImgBar from "../components/ImgBar.vue";
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
    const tagNames = ['后端', '前端', '通用', '算法题'];
    const content = ref("");

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
        for (let i = 0; i < 3; i++) {
          list.value.push(list.value.length + 1);
        }

        // 加载状态结束
        loading.value = false;
        finished.value = true;
      }, 1000);
    };

    const onTagNameConfirm = (value) => {
      tagName.value = value;
      showTagNamePicker.value = false;
    };

    const onEdit = () => {
      // 更新
      showEditContent.value = true;
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