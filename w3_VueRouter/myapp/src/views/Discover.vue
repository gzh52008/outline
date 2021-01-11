<template>
  <div class="discover">
      <header>
          <el-button type="primary" plain size="mini" @click="changeSort('price')">
              价格
              <i :class="{'el-icon-bottom':sort=='price-desc','el-icon-top':sort=='price-asc'}"></i>
        </el-button>
      </header>
    <el-row :gutter="20">
      <el-col :xs="12" :sm="8" :md="6" :lg="4" v-for="item in goodslist" :key="item._id" style="margin-top:20px">
        <el-card :body-style="{ padding: '0px',height:'220px' }">
          <img
            :src="item.imgurl"
            class="image"
            @click="gotoDetail(item._id)"
          />
          <div style="padding: 14px;">
            <h4>{{item.name}}</h4>
            <div class="bottom clearfix">
              <p class="price"><del>{{item.price}}</del><span>{{item.sale_price}}</span></p>
              <el-button type="text" class="button" @click="gotoDetail(item._id)">商品详情</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <el-pagination
    background
    layout="total,prev, pager, next,sizes"
    :total="200"
    :page-size="size"
    :page-sizes="[10,20,30,50]"
    @current-change="pageChange"
    @size-change="sizeChange"
    >
</el-pagination>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Discover",
  data() {
    return {
        sort:null,
        goodslist: [],
        page:1,
        size:10
    };
  },
  async created() {
    // 发起ajax请求，axios
   this.getData();
  },
  methods:{
      changeSort(type){
          this.sort = type + `-${this.sort&&this.sort.includes('desc') ? 'asc':'desc'}`
          this.getData();// price-desc
      },
      async getData(){
          let {page,size,sort} = this;
           const { data } = await axios.get("http://localhost:3000/api/goods",{
               params:{page,size,sort}
            });
            console.log("data=", data);
            this.goodslist = data.data;
      },
      pageChange(currentPage){
          this.page = currentPage;
          
          this.getData()
      },
      sizeChange(currentSize){
          this.size = currentSize;
          this.getData();
      },
      gotoDetail(id){
        //   this.$router.push('/goods/'+id + '?id='+id);
          this.$router.push({
            //   path:'/goods',
            name:"goods",
              params:{
                  id
              },
          });
      }
  },
  // 组件内路由守卫
    beforeRouteEnter:function(to,from,next){
        console.log('Discover.beforeRouteEnter')
        next();
    },
    // 等效于watch:{'$route':function(to,from){}}
    beforeRouteUpdate(to,from,next){
        console.log('Discover.beforeRouteUpdate',to,from)
        this.getData(to.params.id);
        next();
    },
    beforeRouteLeave(to,from,next){
        console.log('Discover.beforeRouteLeave')
        next();
    },
};
</script>
<style lang="scss">
    .discover{padding:20px;}
</style>