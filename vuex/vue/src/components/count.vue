<template>
    <div>
        <h2>{{msg}}</h2>
        <hr/>
        <h3>
            <!--{{$store.state.count}}-->{{count}}</h3>
        <button @click="$store.commit('add',10)">+</button>
        <button @click="reduce">-</button>
    </div>
</template>

<script>
import store from '@/vuex/store'
import { mapState, mapMutations, mapGetters } from 'vuex';
export default {
    data() {
        return {
            msg: 'hello vuex'
        }
    },
    computed: {
        //....扩展运算符
        ...mapState(['count']),
        ...mapGetters(['count']),
      /*   count() {
            return this.$store.getters.count
        } */
    },
    methods: mapMutations([
        'add', 'reduce'
    ]),
    //状态对象赋值给内部对象方法一
    /* computed:{
        count(){
            return this.$store.state.count;
        }
    }, */
    //状态对象赋值给内部对象方法二
    /* computed:mapState({
       count:state=>state.count
    }), */
    store
}

</script>

