<template>
  <div class="add-content">
    <van-config-provider :theme-vars="themeVars">
      <div class="nav-bar">
        <van-nav-bar
          title="添加内容"
          left-text="返回"
          left-arrow
          @click-left="onClickLeft"
        />
      </div>
      <img-bar></img-bar>
      <van-form @submit="onSubmit">
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
            <van-col span="8">
              <van-button
                type="primary"
                plain
                round
                hairline
                size="small"
                block
                native-type="submit"
              >
                添加
              </van-button>
            </van-col>
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
          </van-row>
        </div>
      </van-form>
    </van-config-provider>
  </div>
</template>

<script>
import ImgBar from '../components/ImgBar.vue'
import { ref } from 'vue'
export default {
  setup() {
    const onClickLeft = () => history.back();
    const themeVars = {
      cellGroupInsetPadding: "20px",
      cellGroupInsetBorderRadius: "32px",
      cellGroupBackgroundColor: "#dff9fb",
      cellBackgroundColor: "#dff9fb",
    };
    const title = ref("");
    const contentAbstract = ref("");
    const tagName = ref("");
    const showTagNamePicker = ref(false);
    const tagNames = ["Java", "MySQL", "Redis", "算法题"];
    const content = ref("");

    const onTagNameConfirm = (value) => {
      tagName.value = value;
      showTagNamePicker.value = false;
    };

    return {
      onClickLeft,
      themeVars,
      title,
      contentAbstract,
      tagName,
      showTagNamePicker,
      tagNames,
      content,
      onTagNameConfirm,
    };
  },
  components: {
    ImgBar,
  },
};
</script>

<style>
</style>