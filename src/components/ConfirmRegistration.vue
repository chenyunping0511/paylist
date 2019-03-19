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
                    <router-link to=""><div>团队信息</div></router-link>
              </div>
             </div>
             <div class="box">
              <router-view></router-view>
             </div>
            </div>

            <div class="teaminfo">
              <p class="teamIn">
                <label class="teaminfoTitle">团队信息</label>
                <input type="text" placeholder="拇指跳动团队ID：10012">
              </p>
               <p class="teamIn">
                <label class="teaminfoTitle">职位信息</label>
                <input type="text" placeholder="团长">
              </p>
              <p class="teamIn">
                <label style="margin-left:-25px;" class="teaminfoTitle ">团队负责人</label>
                <span style="color:red">*</span>
                <input type="text" placeholder="随心就好">
              </p>
              <p class="teamIn">
                <label  style="margin-left:12px;" class="teaminfoTitle ">手机号</label>
                <span style="color:red">*</span>
                <input type="text" placeholder="1245678741">
              </p>
               <div class="contentinfo">
                <div class="teaminfoTitle ">团队擅长信息</div>
                <div class="goodList titlegood">
                    <span>语音标注任务ID234000</span>
                    <span>任务完成量20万</span>
                    <span>团队合格率55%</span>
                </div><br/>
              <div class="contentinfo">
                <div class="teaminfoTitle">入会信息</div>
                <div class="dtlist comvip">
                    <dt>
                       <dl>三天三夜，三斤作业</dl>
                       <dl>申请时间2019/2/18</dl>
                       <dl>批准/删除</dl>
                    </dt>
                    <dt>
                       <dl>三天三夜，三斤作业</dl>
                       <dl>申请时间2019/2/18</dl>
                       <dl>批准/删除</dl>
                    </dt>
                    <dt>
                       <dl>三天三夜，三斤作业</dl>
                       <dl>申请时间2019/2/18</dl>
                       <dl>批准/删除</dl>
                    </dt>
                </div>
              </div><br/>
               <div class="contentinfo">
                <div class="teaminfoTitle">团队信息</div>
                <div class="dtlist">
                    <dt >
                       <dl>三天三夜，三斤作业</dl>
                       <dl>入会时间2019/2/18</dl>
                       <dl>
                         <input type="text" placeholder="职位/党员"/>
                       </dl>
                       <dl>删除</dl>
                    </dt>
                    <dt>
                       <dl>三天三夜，三斤作业</dl>
                       <dl>入会时间2019/2/18</dl>
                       <dl>
                         <input type="text" placeholder="职位/党员"/>
                       </dl>
                       <dl>删除</dl>
                    </dt>
                    <dt>
                       <dl>三天三夜，三斤作业</dl>
                       <dl>入会时间2019/2/18</dl>
                       <dl>
                         <input type="text" placeholder="职位/党员"/>
                       </dl>
                       <dl>删除</dl>
                    </dt>
                </div>
              </div>

              </div>
            </div>
        </div>
      </div>
</template>
<script>
export default {
  name: 'ConfirmRegistration',
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
    height:110px;
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

/* .dtlist dl */
.teaminfo{
  margin-bottom: 50px;
}
.dtlist{
    border:1px solid rgb(148, 144, 144);width:700px;height:150px;margin:0 auto;
}
.dtlist dt{
  padding: 0;
}
.dtlist dl{
    display: inline-block;
    margin-right: 55px;
}
.comvip dl{
  margin-right:120px !important;
}
/* goodlist */
.goodList{
  width:680px;height:45px;border:1px solid rgb(148, 144, 144);margin:0 auto;line-height: 45px;
}
.goodList span{
  margin-right: 100px;
}
.contentinfo div{
  display: inline-block;
  margin-top: 20px;
}
.teaminfoTitle{
  margin-right: 8px;
  font-weight: 700;
  font-size: 16px;
}
.teamIn input{
  width:600px;
  height: 40px;
}
.titlegood{
   margin-right: 40px;
}
</style>
