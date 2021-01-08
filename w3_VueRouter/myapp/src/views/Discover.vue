<template>
  <div class="discover">
      <header>
          <el-button @click="changeSort('price')">
              价格
              <i :class="{'el-icon-bottom':sort=='price-desc','el-icon-top':sort=='price-asc'}"></i>
        </el-button>
      </header>
    <el-row :gutter="20">
      <el-col :span="6" v-for="item in goodslist" :key="item.id" style="margin-top:20px">
        <el-card :body-style="{ padding: '0px',height:'220px' }">
          <img
            :src="item.imgurl"
            class="image"
          />
          <div style="padding: 14px;">
            <h4>{{item.name}}</h4>
            <div class="bottom clearfix">
              <p class="price"><span>{{item.price}}</span></p>
              <el-button type="text" class="button">商品详情</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Discover",
  data() {
    return {
        sort:'',
        goodslist: []
    };
  },
  async created() {
    // 发起ajax请求，axios
   this.getData();
  },
  methods:{
      changeSort(type){
          this.sort = type + `-${this.sort.includes('desc') ? 'asc':'desc'}`
          this.getData({sort:this.sort});// price-desc
      },
      async getData(params){
           const { data } = await axios.get("http://localhost:2008/api/goods",{params});
            console.log("data=", data);
            this.goodslist = data.data;
      }
  }
};
</script>
<style lang="scss">
    .discover{padding:20px;}
</style>