<template>
  <div class="discover">
    <el-container>
    <el-aside width="160px">
      <el-menu
          :default-active="current"
          router
        >
          <el-menu-item :index="item.path" v-for="item in menu" :key="item.name">
            <!-- <i :class="item.icon"></i> -->
            {{item.text}}
          </el-menu-item>
        </el-menu>
    </el-aside>
    <el-main>
      <router-view />
      <header>
          <el-button type="primary" plain size="mini" @click="changeSort('price')">
              价格
              <i :class="{'el-icon-bottom':sort=='price-desc','el-icon-top':sort=='price-asc'}"></i>
        </el-button>
      </header>
    <el-row :gutter="20">
      <el-col :xs="12" :sm="8" :md="6" :lg="4" v-for="item in goodslist" :key="item._id" style="margin-top:20px">
        <el-card :body-style="{ padding: '0px',height:'420px' }">
          <img
            :src="'/img/'+item.imgurl"
            class="image"
            @click="gotoDetail(item._id)"
          />
          <div style="padding: 14px;">
            <h4>{{item.name}}</h4>
            <div class="bottom clearfix">
              <p class="price">
                <del>{{item.price}}</del>
                <span>{{item.sale_price.toFixed(2)}}</span></p>
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
    </el-main>
  </el-container>
    
  </div>
</template>
<script>
// import request from '../utils/request'
// import {request,formatDate} from '../utils'
// import * as all from '../utils';
// console.log('all=',all);

export default {
  name: "Discover",
  data() {
    return {
        sort:null,
        goodslist: [],
        page:1,
        size:10,
        menu:[{
          path:'lls',
          name:'lls',
          text:'劳力士'
        },{
          path:'omg',
          name:'omg',
          text:'欧米伽'
        },{
          path:'kdy',
          name:'kdy',
          text:'卡地亚'
        },{
          path:'tissot',
          name:'tissot',
          text:'天梭'
        }],
        current:'lls'
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
          //  const { data } = await axios.get("http://localhost:3000/api/goods",{
          //      params:{page,size,sort}
          //   });
           const { data } = await this.$ajax.get("/goods",{
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
<style lang="scss" scoped>
  // scoped: 样式只在当前组件生效
  // 原理：data-v-[hash]配合属性选择器实现组件局部样式
  
</style>