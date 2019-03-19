<template>
    <div class="">
        <div class="user-header">
          <router-link to="./Personal">
            <div class="header-image">
              <img src="../assets//images/Head portrait.png" alt="李连杰" width="90" >
              <div class="username">随心就好ID:123456</div>
            </div>
          </router-link>

           <div class="user-header">
             <div class="title-father">
              <div class="nav-bars">
                    <router-link to="/TasSquare"><div>任务广场</div></router-link>
                    <router-link to="/Marked"><div>正在标注</div></router-link>
                    <router-link to="/Team"><div>团队信息</div></router-link>
                    <router-link to=""><div>/个人</div></router-link >
              </div>
             </div>
             <div class="box">
              <router-view></router-view>
             </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Index',
  data () {
    return {
    }
  },
  methods: {},
  watch: {
  },
  computed: {}
}
</script>

<style scoped>
 .active {
        color: #f00
    }
    ul li {
        float: left;
        padding:10px
    }

/* 主体 */
.box{
  margin-top:60px;
}
.title-father{
  font-size: 0;
}
.user-header{
    width: 100%;
    height:200px;
    white-space: nowrap;
    /* border: 1px solid green; */
}
.user-header .header-image{
  width: 130px;
  height: 80px;
  /* border: 1px solid red; */
  padding: 25px;
  clear: both;
}
.user-header .header-image .username{
  font-size: 14px;
}
.user-header .nav-bars{
  margin-top: -40px;
  margin-left: 175px;
}
.user-header .nav-bars div{
  width: 200px;
  height:50px;
  font-size: 14px;
  line-height: 50px;
  background-color: antiquewhite;
  display: inline-block;
  border: 1px solid rgb(211, 209, 209);
  padding: 0;

}
.content-index{
  width: 100%;
  margin: 0 auto;
}
.content-list{
  width:96%;
  height: 45px;
  line-height: 45px;
  list-style-type: none;
  margin:0;
   border: 1px solid rgb(122, 120, 120);
}
.content-list li{
  width:23%;
  height: 45px;
  float: left;
  /* display: inline-block; */
}
.btn-start{
  background-color: rgb(66, 212, 37);
  border: 1px solid white;
  border-radius: 3px;
  width:90px;
  height: 36px;
  /* margin-left: 180px; */
}

</style>
