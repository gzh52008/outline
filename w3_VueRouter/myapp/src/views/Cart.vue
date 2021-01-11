<template>
    <div>
        Cart
    </div>
</template>
<script>
export default {
    name:'Cart',
    props:['a'],
    data(){
        return {
            name:'cart',
        }
    },
    created(){
        console.log('Cart=',this.$route.params,this);
    }
}
</script>