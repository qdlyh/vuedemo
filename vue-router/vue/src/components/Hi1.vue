<template>
  <div class="hello">
      <h1>{{msg}}-{{$route.params.username}}-{{$route.params.id}}</h1>
  </div>
</template>

<script>
export default {
  name:'hi1',
  data(){
      return{
      msg:'hi111111111111111'
      }
  }
}
</script>

