<template>
  <div>
    <el-image style="width: 100px; height: 100px" :src="imgurl" fit="contain"></el-image>
    <el-input v-model="credential.username" placeholder="用户名"></el-input>
    <el-input v-model="credential.password" placeholder="密码" type="password"></el-input>
    <el-button @click="login">提交</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgurl: require("../assets/1.jpeg")  ,
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
</style>

