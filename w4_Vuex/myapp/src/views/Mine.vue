<template>
    <div>
        <!-- <input type="file" id="avatar" ref="avatar"  /> -->
        <input type="file"  ref="goods" multiple  />
        <button @click="upload">上传</button>
    </div>
</template>
<script>
import {baseURL} from '../utils'
export default {
    data(){
        return {
            baseURL
        }
    },
    methods:{
        upload(){
            // 传输文件：FormData
            let data = new FormData();
            // 单个文件：头像
            // data.set('avatar',this.$refs.avatar.files[0]);
            // data.set('userid',123);
            // console.log('file',data.getAll('goods'));

            // this.$ajax.post('/upload/avatar',data);

            // 多个文件:商品
            // for(let i=0;i<this.$refs.avatar.files.length;i++){
            //     data.append('goods',this.$refs.avatar.files[i])
            // }
            this.$refs.goods.files.forEach((file)=>{
                data.append('goods',file)
            });
            this.$ajax.post('/upload/goods',data);
        }
    }

}
</script>