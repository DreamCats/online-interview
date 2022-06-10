<template>
  <div class="img-bar">
      <van-image
        width="20rem"
        height="10rem"
        fit="cover"
        position="center"
        lazy-load
        src="https://imgs.heiye.site/wx/my.jpg"
        />
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.img-bar {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
}
</style>