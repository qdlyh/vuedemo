<template>
  <div class="hello">
    <h1>{{msg}}-{{$route.params.username}}-{{$route.params.id}}</h1>
  </div>
</template>
<script>
export default {
  name: 'hi2',
  data() {
    return {
      msg: 'hi2222222222222222222'
    }
  }
}
</script>
