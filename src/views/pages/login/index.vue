<template>
  <div class="login">
    <div class="mask container">
      <div class="top-title">
        <el-row>
          <el-col :span="9" :offset='4'>
            <div class="tip-img">
              <img src="../../../assets/images/home/logo.png" alt="">
            </div>
            <div class="tip-name">
              {{website.info.title}}
            </div>
            <div class="list">
              <div class="title-list" v-for="(item,i) in website.info.list" :key="i">
                <span class="dian">.</span> √ {{item}}
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="login_tab">

      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  data(){
    return {

    }
  },
  computed:{
    ...mapGetters(['website']),
  }
}
</script>
<style lang='scss'>
.login{
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  background:url('../../../assets/images/top_images/login.png') no-repeat;
  background-size: 100% 100%;
  min-height:900px;
  .container{
    // width: 
  }
  .mask{
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left: 0;
    background-color: rgba(0, 0, 0, .2);
  }
  .top-title{
    margin-top: 50px;
  }
  .tip-name{
    color: #fff;
    font-size: 16px;
    margin-bottom: 80px;
  }
  .list{
    font-size: 14px;
    color: #fff;
    padding-left: 10px;
    .title-list{
      margin-bottom: 5px;
    }
    .dian{
      margin-right: 10px;
      font-weight: 800;
    }
  }
  .login_tab{
    position: absolute;
    right: 40px;
    top:200px;
    width: 350px;
    height: 400px;
    background-color: #fff;
    border-radius: 10px;
  }
}
</style>
