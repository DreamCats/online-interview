<template>
  <div class="nav-bar">
    <van-nav-bar
        title="标题"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        />
    </div>
</template>

<script>
export default {
    setup() {
        const onClickLeft = () => history.back();
        return {
            onClickLeft,
        };
    },
}
</script>

<style>

</style>