<template>
  <div>
    <h1>免费注册</h1>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="regForm"
      label-width="100px"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="ruleForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="submitForm"
          >注册</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<script>

export default {
  name: "Reg",
  data() {
    var checkUsername = (rule, value, callback) => {
          this.$ajax.get('/user/check',{
            params:{
              username:value
            }
          }).then(({data})=>{
            if(data.code === 200){
              callback();

            }else if(data.code === 400){
              callback(new Error('用户名已存在'));

            }

          })
      };
    return {
      ruleForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "用户名长度必须在3到10",
            trigger: "blur",
          },
          {
            validator:checkUsername,trigger:'change'
          }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 12,
            message: "密码长度必须在6到12",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods:{
      submitForm() {
        this.$refs.regForm.validate(async (valid) => {
          if (valid) {
            const {username,password} = this.ruleForm;
           // 发起ajax请求注册
            const {data} = await this.$ajax.post('/user/reg',{username,password});
            if(data.code == 200){
              this.$router.replace('/login')
            }else{
              this.$message.error('注册失败，请重新注册')
            }
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
  }
};
</script>