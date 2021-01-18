<template>
  <el-container>
    <el-header style="padding: 0; background-color: #545c64">
      <el-row>
        <el-col :span="18">
          <el-menu
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            :default-active="current"
            router
          >
            <el-menu-item
              :index="item.path"
              v-for="item in nav"
              :key="item.name"
            >
              <i :class="item.icon"></i>
              {{ item.text }}
            </el-menu-item>
          </el-menu>
        </el-col>
        <el-col
          :span="6"
          style="
            border-bottom: solid 1px #e6e6e6;
            height: 61px;
            overflow: hidden;
            text-align: right;
            line-height: 61px;
            padding-right: 20px;
          "
        >
          <template v-if="isLogin">
            <span style="vertical-align:middle" @click="goto('/mine')">
              <el-avatar size="small" icon="el-icon-s-custom"></el-avatar>
              {{ username }}
            </span>
            <el-button type="text" @click="logout">退出</el-button>
          </template>
          <template v-else>
            <el-button type="text" @click="goto('/reg')">注册</el-button>
            <el-button type="text" @click="goto('/login')">登录</el-button>
          </template>
        </el-col>
      </el-row>
    </el-header>
    <el-main><router-view /></el-main>
  </el-container>
</template>

<script>
import {mapState,mapGetters,mapMutations} from 'vuex';

export default {
  name: "App",
  data() {
    return {
      nav: [
        {
          name: "home",
          path: "/home",
          text: "首页",
          icon: "el-icon-s-home",
        },
        {
          name: "discover",
          path: "/discover",
          text: "发现",
          icon: "el-icon-view",
        },
        {
          name: "cart",
          path: "/cart",
          text: "购物车",
          icon: "el-icon-shopping-cart-2",
        },
        // {
        //   name: "login",
        //   path: "/login",
        //   text: "登录",

        // },
        // {
        //   name: "reg",
        //   path: "/reg",
        //   text: "注册"
        // }
      ],
      current: "/home",
    };
  },
  computed:{
    // 映射全局state
    // ...mapState(['a','b'])
    // ...mapState({
    //   // num:'a',
    //   // step:function(state){
    //   //   return state.cart.step;
    //   // },
    //   username(state){
    //     return state.user.userInfo.username;
    //   }
    // })
    ...mapState({
      username(state){
        return state.user.userInfo.username;
      }
    }),

    // 映射getters
    ...mapGetters(['isLogin'])
  },
  // 监听数据：监听实例的属性
  watch: {
    // 监听路由变化，实现高亮效果
    "$route.path": function (newVal) {
      // console.log(newVal, oldVal);
      this.current = newVal;
    },
  },
  methods: {
    goto(path) {
      // 编程式导航
      // this.$router.push(item.path);
      this.$router.replace(path);
    },
    // logout(){
    //   this.$store.commit('logout');
    //   this.goto('/login');
    // },
    ...mapMutations({
      logout:function(commit){
        commit('logout');
        this.goto('/login');
      }
    })
  },
  components: {},
  created() {console.log('App=',this);
    let { path } = this.$route;
    this.current = path;
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}
.price {
  span::before,
  del::before {
    content: "￥";
  }
  del {
    color: #999;
  }
  span {
    color: #f00;
  }
}
@for $i from 1 to 6 {
  .m-#{$i} {
    margin: $i * 0.3em;
  }
  .p-#{$i} {
    padding: $i * 0.3em;
  }
}

nav a {
  margin: 0 10px;
}
.active {
  color: #f00;
  font-weight: bold;
}
.el-card__body {
  h4 {
    margin-top: 0;
  }
  img {
    width: 100%;
  }
}
</style>
