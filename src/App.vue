<script>
import router from './router'
import navbar from './components/navbar.vue'

export default {
  components:{navbar},
  router, 
}
</script>

<template>
  <html>
    <div>
      <navbar class="navbar"/>
    <router-view/>
   </div>
  </html>
</template>

<style>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
}
</style>