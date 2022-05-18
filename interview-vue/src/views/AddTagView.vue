.<template>
  <div class="add-tag">
    <van-config-provider :theme-vars="themeVars">
      <div class="nav-bar">
        <van-nav-bar
          title="添加标签"
          left-text="返回"
          left-arrow
          @click-left="onClickLeft"
        />
      </div>
      <img-bar></img-bar>
      <van-form @submit="onSubmit">
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
        <div style="margin: 16px;">
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
import { ref } from "vue";
export default {
  setup() {
    const onClickLeft = () => history.back();
    const themeVars = {
      cellGroupInsetPadding: "20px",
      cellGroupInsetBorderRadius: "32px",
      cellGroupBackgroundColor: "#dff9fb",
      cellBackgroundColor: "#dff9fb",
    };
    const tagName = ref("");
    const tagImgUrl = ref("");
    const tagType = ref("");
    const showTagTypePicker = ref(false);
    const tagTypes = ['后端', '前端', '通用', '算法题'];

    const onTagTypeConfirm = (value) => {
      tagType.value = value;
      showTagTypePicker.value = false;
    };

    return {
      onClickLeft,
      themeVars,
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

<style>
</style>