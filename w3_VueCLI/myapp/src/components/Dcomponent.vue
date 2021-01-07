<template>
    <div>
        <h1>动态组件</h1>
        <!-- <keep-alive include="com1"> -->
        <keep-alive :include="/com[12]/">
            <component :is="currentComponent"></component>
        </keep-alive>

        <div class="btn-group">
            <button class="btn btn-outline-primary" :class="{'btn-warning':currentComponent==='com'+(item-1)}" v-for="item in 5" :key="item" @click="currentComponent='com'+(item-1)">{{item}}</button>
        </div>
    </div>
</template>
<script>
export default {
    name:'DC',
    data(){
        return {
            currentComponent:'com0'
        }
    },
    created(){
        for(let i=0;i<5;i++){
            let componentName = 'com'+i
            this.$options.components[componentName] = {
                name:componentName,
                // template:'<div>组件'+i+'</div>',
                render(createElement){
                    return createElement('div','组件'+i)
                },
                data(){
                    return {
                        name:componentName
                    }
                },
                created(){
                    console.log('create',this.name)
                },
                destroyed(){
                    console.log('destroyed',this.name)
                }
            }
        }
    },
    // components:{
    //     com1,
    //     com2,
    //     com3,
    //     com4,
    //     com5
    // }
}
</script>