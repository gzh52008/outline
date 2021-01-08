<template>
    <div class="p-3">
        <img :src="detail.imgurl" />
        <h1>{{detail.name}}</h1>
        <p class="price">价格：<span>{{detail.price}}</span></p>
        <p>库存：{{detail.kucun}}</p>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:'Goods',
    data(){
        return {
            detail:{}
        }
    },
    async created(){
        console.log(this.$route);
        // 获取传入的商品id
        let {id} = this.$route.params;console.log('id=',id)

        let {data:{data}} = await axios.get('http://localhost:2008/api/goods/'+id);

        console.log('data=',data);

        this.detail = data;
    }
}
</script>