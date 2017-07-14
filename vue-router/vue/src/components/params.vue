<template>
  <div class="hello">
      <h1>{{msg}}</h1>
      <p>新闻ID:{{$route.params.newsId}}</p>
      <p>新闻标题:{{$route.params.newsTitle}}</p>
  </div>
</template>

<script>
export default {
  name:'params',
  data(){
      return{
          msg:'url传参'
      }
  },
  beforeRouteEnter:(to,from,next)=>{
      console.log('准备进入路由模板')
      next();
  },
  beforeRouteLeave: (to, from, next) => {
    console.log("准备离开路由模板");
    next();
  }
}
</script>
