<template>
  <div class="van-image1" style="width: 2rem; height: 2rem">
    <img
      class="van-image__img"
      src="https://cdn.jsdelivr.net/npm/@vant/assets/logo.png"
      style="object-fit: cover; object-position: left"
    />
  </div>

  <van-card
    num="2"
    price="2.00"
    desc="描述信息"
    title="商品标题"
    thumb="https://cdn.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
  >
    <template #tags>
      <van-tag plain type="danger">标签</van-tag>
      <van-tag plain type="danger">标签</van-tag>
    </template>
    <template #footer>
      <van-button size="mini">按钮</van-button>
      <van-button size="mini">按钮</van-button>
    </template>
  </van-card>
</template>

<script>
export default {};
</script>

<style>
</style>