<template>
  <div class="content-detail">
    <div class="nav-bar">
      <van-nav-bar
        title="详细内容"
        left-text="返回"
        @click-left="onClickLeft"
      />
      <img-bar></img-bar>
      <van-loading size="24px" v-if="loading">加载中...</van-loading>
      <p v-html="result" class="result-md"></p>
    </div>
  </div>
</template>

<script>
import ImgBar from "../components/ImgBar.vue";
import { computed, ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getContentDetail } from "../api/api";
// import MarkdownIt from "markdown-it";
// import hljs from "highlight.js"; // 添加转换高亮标签插件
export default {
  setup() {
    const onClickLeft = () => history.back();
    // const md = new MarkdownIt();
    const route = useRoute();
    const uuid = computed(() => route.query.uuid);
    const loading = ref(true);

    var hljs = require('highlight.js');
    var md = require("markdown-it")({
      html: true,
      linkify: true,
      typographer: true,
      highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return hljs.highlight(str, { language: lang }).value;
          } catch (__) {}
        }

        return ""; // use external default escaping
      },
    });
    const result = ref("");
    const loadContentDetail = () => {
      let params = {
        uuid: uuid.value
      };
      getContentDetail(params).then( (res) => {
        loading.value = true;
        if(res.status == 200) {
          console.log('loadContentDetail:', res.data.data)
          result.value = md.render(res.data.data.content);
          loading.value = false;
        }
        
      });
    };
    onMounted(() => {
      loadContentDetail()
    });

    return {
      onClickLeft,
      result,
      loading,
    };
  },
  components: {
    ImgBar,
  },
};
</script>

<style>
.result-md {
  padding: 16px;
  font-size: 16px;
  line-height: 1.5;
  color: #333;
}
.result-md img {
  max-width: 100%;
}

.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  background: #1e1e1e;
  color: #dcdcdc;
}

.hljs-keyword,
.hljs-literal,
.hljs-symbol,
.hljs-name {
  color: #569cd6;
}
.hljs-link {
  color: #569cd6;
  text-decoration: underline;
}

.hljs-built_in,
.hljs-type {
  color: #4ec9b0;
}

.hljs-number,
.hljs-class {
  color: #b8d7a3;
}

.hljs-string,
.hljs-meta-string {
  color: #d69d85;
}

.hljs-regexp,
.hljs-template-tag {
  color: #9a5334;
}

.hljs-subst,
.hljs-function,
.hljs-title,
.hljs-params,
.hljs-formula {
  color: #dcdcdc;
}

.hljs-comment,
.hljs-quote {
  color: #57a64a;
  font-style: italic;
}

.hljs-doctag {
  color: #608b4e;
}

.hljs-meta,
.hljs-meta-keyword,
.hljs-tag {
  color: #9b9b9b;
}

.hljs-variable,
.hljs-template-variable {
  color: #bd63c5;
}

.hljs-attr,
.hljs-attribute,
.hljs-builtin-name {
  color: #9cdcfe;
}

.hljs-section {
  color: gold;
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-strong {
  font-weight: bold;
}

/*.hljs-code {
  font-family:'Monospace';
}*/

.hljs-bullet,
.hljs-selector-tag,
.hljs-selector-id,
.hljs-selector-class,
.hljs-selector-attr,
.hljs-selector-pseudo {
  color: #d7ba7d;
}

.hljs-addition {
  background-color: #144212;
  display: inline-block;
  width: 100%;
}

.hljs-deletion {
  background-color: #600;
  display: inline-block;
  width: 100%;
}
</style>