<template>
  <div class="userpass">
    <el-form ref="loginform" :model="loginform" status-icon :rules="rules">
      <el-form-item prop='name'>
        <el-input v-model="loginform.name" placeholder="请输入用户名" autocomplete="off" @keyup.native.enter="onSubmit">
          <i slot="prefix" class="iconfont icon-yonghu" style="font-size:12px;margin-left:7px;"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop='password'>
        <el-input v-model="loginform.password" placeholder="请输入密码" autocomplete="off" :type='type' @keyup.native.enter="onSubmit">
          <i slot="prefix" class="iconfont icon-suo" style="font-size:12px;margin-left:7px;"></i>
          <i class="iconfont icon-yanjing" slot="suffix" style="font-size:12px;margin-right:7px;" @click="showPassword"></i>
        </el-input>
      </el-form-item>
      <el-checkbox v-model="checked" text-color='allAreUsedHere'>记住登陆用户名密码</el-checkbox>
      <el-form-item :style="{display:'flex',justifyContent:'center',marginTop:'20px'}">
        <el-button type="primary" @click.native.prevent="onSubmit" size='mini' :style="{width:'150px'}">确定登陆</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data(){
    // 校验规则
    var validatename = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }else{
          callback();
        }
    };
    var validatepassword = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('密码不能为空'));
        }
        setTimeout(() => {
          if(value.length<6){
            return callback(new Error('密码不能小于6位'))
          }else{
            return callback()
          }
        }, 500);
    };
    return {
      loginform:{
        name:'',
        password:''
      },
      checked:false,
      type:'password',
      rules: {
        name: [
          { validator: validatename, trigger: 'blur' }
        ],
        password: [
          { validator: validatepassword, trigger: 'blur' }
        ]
      }
    }
  },
  methods:{
    showPassword(){
      if(this.type == 'password'){
        this.type = ''
      }else{
        this.type = 'password'
      }
    },
    onSubmit(){
      this.$refs.loginform.validate((valid) => {
        if (valid) {
          this.$store.dispatch('login').then(data=>{
            // this.$router.push('/') 跳转到首页去
          })
        } else {
          
          return false;
        }
      });
    }
  }
}
</script>
<style lang='scss' scoped>

</style>
