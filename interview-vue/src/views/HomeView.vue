<template>
  <div class="home">
    <!-- <router-view></router-view> -->
    <router-view/>
    <TabBar></TabBar>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import TabBar from '../components/Tabber.vue'
export default {
  name: 'HomeView',
  components: {
    TabBar,
  }
}
</script>
