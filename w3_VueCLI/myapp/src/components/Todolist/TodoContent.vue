<template>
    <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">代办事项</th>
                    <th scope="col">是否完成</th>
                    <th scope="col">操作</th>
                </tr>
            </thead>
            <tbody>
                <!-- <tr is="TodoItem" v-for="(item,idx) in datalist" :key="item.id" :item="item" :idx="idx"></tr> -->
                <TodoItem v-for="(item,idx) in datalist" :key="item.id" :item="item" :idx="idx" />
            </tbody>
        </table>
</template>
<script>
import TodoItem from './TodoItem.vue';
export default {
    name:'TodoContent',
    props: ['datalist'],
        template: '#todoContent',
        components: {
            TodoItem
        }
}
</script>