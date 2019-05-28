<template>
  <div class="back-paint">
    <el-row class="img-box">
      <el-col :span="8" :offset="8">
        <el-image style="width: 200px; height: 200px" :src="imgurl" fit="fill"></el-image>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6" :offset="9">
        <h1>药房发药系统</h1>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6" :offset="9">
        <el-input v-model="credential.username" placeholder="用户名"></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6" :offset="9">
        <el-input v-model="credential.password" placeholder="密码" type="password"></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="3" :offset="9">
        <el-button @click="login" type="primary">提交</el-button>
      </el-col>
      <el-col :span="3" >
        <el-button @click="login" type="info">清空</el-button>
      </el-col>
    </el-row>

  </div>
</template>
<script>
export default {
  data() {
    return {
      imgurl: require("../assets/logo.svg")  ,
      credential:{
        username:'',
        password:''
      }
    };
  },
  methods:{
    login(){
      this.axios
      .post("/api/login",this.credential)
      .then(res=> {
        this.$store.commit('updatePrincipal',res.data);
        this.$router.push("/index");
      })
      .catch(function(error) {
        console.log(error);
      });
    }
  }
};
</script>

<style scoped>
  .el-row {
    margin-top: 20px;
  }
  .img-box{
    padding-top: 100px;
    margin-top: 0;
  }
  .back-paint{
    background-color: bisque;
    height: 100%;
  }
</style>

