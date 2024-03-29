<template>
  <div class="add-blog">
    <van-config-provider :theme-vars="themeVars">
      <div class="nav-bar">
        <van-nav-bar
          title="添加博客"
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
              :default-index="0"
              @confirm="onTagNameConfirm"
              @cancel="showTagNamePicker = false"
            />
          </van-popup>
          <van-field
            v-model="author"
            is-link
            readonly
            name="authorPicker"
            label="作者"
            placeholder="点击选择作者"
            @click="showAuthorPicker = true"
          />
          <van-popup v-model:show="showAuthorPicker" position="bottom">
            <van-picker
              :columns="authors"
              :default-index="0"
              @confirm="onAuthorConfirm"
              @cancel="showAuthorPicker = false"
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
import ImgBar from "../components/ImgBar.vue";
import { ref, onMounted } from "vue";
import { getTagListAll, getUserPublishList, addBlog } from "../api/api";
import { Toast } from 'vant'
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
    const tagNames = ref(["Java", "MySQL", "Redis", "算法题"]);
    const author = ref("");
    const showAuthorPicker = ref(false);
    const authors = ref(["全是白昼", "全是黑夜"])
    const content = ref("");
    const tagNodes = ref([])
    const authorNodes = ref([])

    const onTagNameConfirm = (value) => {
      tagName.value = value;
      showTagNamePicker.value = false;
    };
    const onAuthorConfirm = (value) => {
      author.value = value;
      showAuthorPicker.value = false;
    };

    onMounted( () => {
      loadTagNames();
      loadUserPublishList();
    });

    const loadTagNames = () => {
      getTagListAll().then( res => {
        if (res.status == 200) {
          console.log("loadTagNames", res.data);
          tagNodes.value = res.data.data;
          tagNames.value = res.data.data.map(item => item.tag_name);
        } 
      });
    };

    const loadUserPublishList = () => {
      getUserPublishList().then( res => {
        if (res.status == 200) {
          authorNodes.value = res.data.data;
          authors.value = res.data.data.map(item => item.user_name);
        }
      });
    };

    const onSubmit = () => {
      let tag_uuid  = tagNodes.value.find(item => item.tag_name == tagName.value).uuid;
      let user_uuid = authorNodes.value.find(item => item.user_name == author.value).uuid;
      let tag_type = tagNodes.value.find(item => item.tag_name == tagName.value).tag_type;
      let data = {
        title: title.value,
        abstract: contentAbstract.value,
        tc_uuid: tag_uuid,
        user_uuid: user_uuid,
        content: content.value,
        tag_type: tag_type
      };
      console.log("onSubmit", data);
      addBlog(data).then( res => {
        if (res.status == 200) {
          console.log("addBlog", res.data);
          Toast.success("添加成功");
          history.back();
        }
      });
    };

    return {
      onClickLeft,
      themeVars,
      title,
      contentAbstract,
      tagName,
      showTagNamePicker,
      tagNames,
      author,
      showAuthorPicker,
      authors,
      content,
      onTagNameConfirm,
      onAuthorConfirm,
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