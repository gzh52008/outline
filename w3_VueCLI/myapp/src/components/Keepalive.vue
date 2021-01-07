<template>
    <div>
        <h1>Keep-alive</h1>
        <keep-alive>
            <User username="laoxie" v-if="show" />
        </keep-alive>
        <!-- <User username="jingjing"  /> -->
        <button class="btn btn-success" @click="show=!show">show:{{show}}</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            show:true
        }
    },
    components:{
        User:{
            name:"user",
            props:['username'],
            render(createElement){
                return createElement('div',[createElement('input')])
            },
            created(){
                console.log(this.username,'created');
            },
            destroyed(){
                console.log(this.username,'destoryed');
            }
        }
    }
}
</script>