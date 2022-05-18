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
                  @click="onEdit"
                  class="edit-button"
                />
              </template>
              <van-cell-group inset>
                <van-card
                  desc="2022-05-05"
                  title="全是白昼"
                  class="goods-card"
                  thumb="https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLCrJQ4AZe8ViaGcupuwf8Aq1J9CjrFlj2LMgmZS2L2E3rZN2yfsBVDlzdcGzzMnp2CRdia6r7YtE5w/132"
                >
                  <template #tags>
                    <van-tag plain round type="primary" size="medium"
                      >MySQL分页优化</van-tag
                    >
                    <div class="van-multi-ellipsis--l2">
                      此时你可能就会思考，假如链表非常长呢？本来 map
                      的查询平均复杂度为
                    </div>
                  </template>

                  <template #footer>
                    <van-row>
                      <van-col offset="4" span="6">
                        <van-icon name="edit" /> MySQL
                      </van-col>
                      <van-col offset="2" span="6">
                        <van-icon name="like-o" /> (0)
                      </van-col>
                      <van-col span="6">
                        <van-icon name="fire-o" /> (0)
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
        </van-popup>
      </div>
    </van-config-provider>
  </div>
</template>

<script>
import ImgBar from "../components/ImgBar.vue";
import { ref } from "vue";
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
    const tagNames = ['后端', '前端', '通用', '算法题'];
    const author = ref("");
    const showAuthorPicker = ref(false);
    const authors = ['全是白昼', '全是黑夜']
    const content = ref("");
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

    const onTagNameConfirm = (value) => {
      tagName.value = value;
      showTagNamePicker.value = false;
    };

    const onAuthorConfirm = (value) => {
      author.value = value;
      showAuthorPicker.value = false;
    };

    const onEdit = () => {
      // 更新
      showEditBlog.value = true;
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

