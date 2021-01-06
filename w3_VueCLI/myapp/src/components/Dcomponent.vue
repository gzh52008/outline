<template>
    <div>
        <h1>动态组件</h1>
        
        <component :is="currentComponent"></component>

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
            this.$options.components['com'+i] = {
                name:'com'+i,
                template:'<div>组件'+i+'</div>'
            }
        }
    }
}
</script>