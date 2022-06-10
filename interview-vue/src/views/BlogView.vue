<template>
  <div class="blog">
    <div class="nav-bar">
      <van-nav-bar title="博客管理" />
    </div>
    <img-bar></img-bar>

    <van-config-provider :theme-vars="themeVars">
      <div class="blog-list">
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
                  @click="onEdit(item)"
                  class="edit-button"
                />
              </template>
              <van-cell-group inset>
                <van-card
                  :desc="item.publish_time"
                  :title="item.user_name"
                  class="goods-card"
                  :thumb="item.user_avatar"
                  @click="onView(item.uuid)"
                >
                  <template #tags>
                    <van-tag plain round type="primary" size="medium"
                      >{{item.title}}</van-tag
                    >
                    <div class="van-multi-ellipsis--l2">
                      {{item.abstract}}
                    </div>
                  </template>

                  <template #footer>
                    <van-row>
                      <van-col offset="4" span="6">
                        <van-icon name="edit" /> {{item.tag_name}}
                      </van-col>
                      <van-col offset="2" span="6">
                        <van-icon name="like-o" /> ({{ item.like_count }})
                      </van-col>
                      <van-col span="6">
                        <van-icon name="fire-o" /> ({{item.view_count}})
                      </van-col>
                    </van-row>
                  </template>
                </van-card>
              </van-cell-group>
              <template #right>
                <van-button
                  square
                  type="danger"
                  text="删除"
                  class="delete-button"
                  @click="onDelete(item.uuid)"
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
          v-model:show="showEditBlog"
          round
          closeable
          position="bottom"
          :style="{ height: '50%' }"
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
                <van-col span="8">
                </van-col>
              </van-row>
            </div>
          </van-form>
        </van-popup>
      </div>
    </van-config-provider>
  </div>
</template>

<script>
import ImgBar from "../components/ImgBar.vue";
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { blogList, getTagListAll, getUserPublishList, updateBlog, deleteBlog } from "../api/api";
import { Toast } from 'vant';
export default {
  setup() {
    const list = ref([]);
    const loading = ref(false);
    const finished = ref(false);
    const showEditBlog = ref(false);
    const title = ref("");
    const contentAbstract = ref("");
    const tagName = ref("");
    const showTagNamePicker = ref(false);
    const tagNames = ref(['后端', '前端', '通用', '算法题']);
    const tagNodes = ref([])
    const author = ref("");
    const showAuthorPicker = ref(false);
    const authors = ref(['全是白昼', '全是黑夜'])
    const authorNodes = ref([])
    const content = ref("");
    const themeVars = {
      cellGroupInsetPadding: "10px",
      cellGroupInsetBorderRadius: "20px",
      cellGroupBackgroundColor: "#dff9fb",
      cellBackgroundColor: "#dff9fb",
    };
    const route = useRoute();
    const router = useRouter();
    let params = ref({
      page: 1,
      page_size: 20,
    });
    const item = ref({});

    const onLoad = () => {
      // 异步更新数据
      setTimeout(() => {
        blogList(params.value).then(res => {
          if (res.status == 200) {
            console.log("blogList", res.data.data);
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
      }, 150);
    };

    const onTagNameConfirm = (value) => {
      tagName.value = value;
      showTagNamePicker.value = false;
    };

    const onAuthorConfirm = (value) => {
      author.value = value;
      showAuthorPicker.value = false;
    };

    const onEdit = (itemInfo) => {
      // 更新
      showEditBlog.value = true;
      loading.value = true;
      // load tagNames
      loadTagNames()
      // load publishers
      loadUserPublishList()
      console.log("onEdit:", itemInfo);
      item.value = itemInfo;
      title.value = itemInfo.title;
      contentAbstract.value = itemInfo.abstract;
      tagName.value = itemInfo.tag_name;
      author.value = itemInfo.user_name;
      content.value = itemInfo.content;
      loading.value = false;
    };

    const onAdd = () => {
      // 新增
      router.push("/add-blog");
    };

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

    const onClickUpdate = () => {
      console.log('onClickUpdate:', item.value);
      loading.value = true;
      let tag_uuid  = tagNodes.value.find(item => item.tag_name == tagName.value).uuid;
      let user_uuid = authorNodes.value.find(item => item.user_name == author.value).uuid;
      let tag_type = tagNodes.value.find(item => item.tag_name == tagName.value).tag_type;
      let data = {
        uuid: item.value.uuid,
        title: title.value,
        abstract: contentAbstract.value,
        content: content.value,
        tc_uuid: tag_uuid,
        user_uuid: user_uuid,
        publish_uuid: item.value.publish_uuid,
        tag_type: tag_type,
      };
      console.log("onClickUpdate:", data);
      updateBlog(data).then(res => {
        if (res.status == 200) {
          console.log("updateBlog", res.data);
          Toast.success("更新成功");
          showEditBlog.value = false;
          list.value = []
          params.value.page = 1;
          onLoad();
        }
        loading.value = false;
      });
    };

    const onDelete = (uuid) => {
      loading.value = true;
      console.log('onDelete:', uuid);
      let params = {
        uuid: uuid
      };
      deleteBlog(params).then((res) => {
        if (res.status == 200) {
          console.log('deleteBlog:', res.data);
          Toast.success('删除成功');
          list.value = [];
          onLoad();
        }
        loading.value = false;
      });
    };
    
    const onView = (uuid) => {
      router.push({
        path: '/content-detail',
        query: {
          uuid: uuid
        }
      });
    };

    return {
      list,
      onLoad,
      loading,
      finished,
      themeVars,
      showEditBlog,
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
      onEdit,
      onAdd,
      onClickUpdate,
      onDelete,
      onView,
    };
  },
  components: {
    ImgBar,
  },
};
</script>

<style scoped>
.goods-card {
  margin: 0;
}
.delete-button {
  height: 100%;
}
.edit-button {
  height: 100%;
}
.plus-button {
  position: fixed;
  right: 0;
  z-index: 100;
}
</style>

