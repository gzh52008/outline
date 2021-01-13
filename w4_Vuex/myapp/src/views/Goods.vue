<template>
  <div class="p-3">
    <img :src="'/img/'+detail.imgurl" />
    <h1>{{ detail.name }}</h1>
    <p class="price">
      原价：<del>{{ detail.price }}</del>
    </p>
    <p class="price">
      价格：<span>{{ detail.sale_price }}</span>
    </p>
    <el-button type="warning"
      ><i class="el-icon-shopping-cart-2"></i>加入购物车</el-button
    >
    <el-button type="danger"><i class="el-icon-goods"></i>立即购买</el-button>
    <div class="recommend">
      <h4>热门商品</h4>
      <el-row :gutter="20">
        <el-col
          :xs="12"
          :sm="8"
          :md="6"
          :lg="4"
          v-for="item in hotlist"
          :key="item._id"
          style="margin-top: 20px"
        >
          <el-card
            :body-style="{ padding: '0px', height: '260px' }"
            @click.native="gotoDetail(item._id)"
          >
            <img :src="'/img/'+item.imgurl" class="image" />
            <div style="padding: 14px">
              <h4>{{ item.name }}</h4>
              <div class="bottom clearfix">
                <p class="price">
                  <del>{{ item.price }}</del
                  ><span>{{ item.sale_price }}</span>
                </p>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
// import {request} from '../utils'
export default {
  name: "Goods",
  data() {
    return {
      detail: {},
      hotlist: [],
    };
  },
//   watch:{
//       '$route.params.id':function(newVal){
//           this.getData(newVal);
//       }
//   },
  async created() {
    console.log('created=',this.$route);
    // 获取传入的商品id
    let { id } = this.$route.params;
    console.log("id=", id);
    this.getData(id);
    

    // 获取热门商品
    const { data: hotlist } = await this.$ajax.get(
      "/goods",
      {
        params: { size: 6 },
      }
    );
    this.hotlist = hotlist.data;
  },

    // 组件内路由守卫
    beforeRouteEnter:function(to,from,next){
        console.log('Goods.beforeRouteEnter')
        next();
    },
    // 等效于watch:{'$route':function(to,from){}}
    beforeRouteUpdate(to,from,next){
        console.log('Goods.beforeRouteUpdate',to,from)
        this.getData(to.params.id);
        next();
    },
    beforeRouteLeave(to,from,next){
        console.log('Goods.beforeRouteLeave')
        next();
    },
  methods: {
    gotoDetail(id) {
      this.$router.push({
        path:'/goods/'+id,
      });
    },
    async getData(id){
        let {
            data: { data },
        } = await this.$ajax.get("/goods/" + id);

        console.log("data=", data);

        this.detail = data;
    }
  },
};
</script>
<style lang="scss">
.el-card__body{
  h4{font-size:16px;font-weight: normal;height:36px;line-height:18px;overflow: hidden;}
    img{width:150px;}
  } 
</style>