<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>
      <router-link to="/">首页</router-link>|
      <router-link to="/hi">hi首页</router-link>|
      <router-link :to="{name:'hi1',params:{username:'hao'}}">页面hi1</router-link>|
      <router-link :to="{name:'hi2',params:{username:'geaaa'}}">页面hi2</router-link>|
      <router-link to="/params/198/lyh">params</router-link>|
      <router-link to="/hao">jspang</router-link>
      <router-link to="/Error">404</router-link>
    </p>
    <p>
      <button @click="goback">后退</button>
      <button @click="gohome">返回首页</button>
    </p>
    <!--<router-view></router-view>-->
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    goback() {
      this.$router.go(-1)
    },
    gohome() {
      this.$router.push('/')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fade-enter {
  opacity: 0;
}

.fade-leave {
  opacity: 1;
}

.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-leave-active {
  opacity: 0;
  transition: opacity 0.5s;
}
</style>
