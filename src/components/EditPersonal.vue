<template>
    <div>
        <div class="edit">
                <div class="renzheng">
 <!-- <div class="rz-notice" v-bind:style="{ display: isno}">
  <p>名片用来鉴别是相关人员，温馨提示：<img src="../assets/images/上传图片 (1).svg" @click="hiddenwords" style="width:20px;"></p>
 </div> -->
 <!-- <van-tabs v-model="active" swipeable>
  <van-tab v-for="item in navArr" :title="item.name" class="v-tab" :key="item">
    <div v-if="">
      <div class="color-black" style="text-align: center;margin-top: 0.4rem;">请上传本人名片照片</div>
      <div class="rz-picter">
      <img :src="avatar" class="img-avatar">
      <input type="file" name="avatar" id="uppic" accept="image/gif,image/jpeg,image/jpg,image/png" @change="changeImage($event)" ref="avatarInput" class="uppic">
      </div>
      <div class="cuxian"></div>
      <div class="my-content-list">
      <div class="color-black"><span style="margin-right: 0.6rem;">真实姓名:</span><input v-model="yoursname" placeholder="请输入您的真实姓名" /></div>
      </div>
      <div class="my-content-list">
      <div class="color-black"><span style="margin-right: 0.6rem;">手机号码:</span><input type="number" max="11" v-model="yoursphone" placeholder="请输入您的手机号码" /></div>
      </div>
      <div class="yzbtn" @click="submitBtn">
      立即认证
      </div>
    </div>
  </van-tab>
 </van-tabs> -->

 <!-- <div >
    <<form>

        <label>昵称</label>
        <input type="text" placeholder="随心就好">
        <label>头像</label>
        <input type="img" placeholder="随心就好">
         <img :src="avatar" class="img-avatar">
      <input type="file" name="avatar" id="uppic"
      accept="image/gif,image/jpeg,image/jpg,image/png"
       @change="changeImage($event)" ref="avatarInput" class="uppic">
       请上传头像
    </form> -->
    <!-- <div class="labelFrom">
       nihaohh
    </div>
    <div class="inputFrom">

    </div>
    <div class="rightFrom">

    </div> -->
<!--
</div> -->
<content>
    <div class="col col1" style="flex-basis:240px">
        <span>昵称</span>
        <span class="touxiang">头像</span>
        <span class="touxiang">性别</span>
        <span class="touxiang">出生年月</span>
        <span class="touxiang">支付宝账号</span>
        <span class="touxiang">支付宝姓名</span>
        <span class="touxiang">手机</span>
        <span class="touxiang">QQ</span>
    </div>
    <div class="col col2" style="flex-basis: 490px;">
        <div><input type="text" placeholder="随心就好"></div>
        <div class="touxiang">
          <img src="../assets/images/Head portrait.png" alt="李连杰" width="90" >
          <img :src="avatar" class="img-avatar" width="90">
          <input type="file" name="avatar" id="uppic" accept="image/gif,image/jpeg,image/jpg,image/png" @change="changeImage($event)" ref="avatarInput" class="uppic">
        </div>
        <div class="touxiang">
            <select class="sex">
                <option value="男">男</option>
                <option value="女">女</option>
            </select>
            <div>*谨慎填写，审核后就不能修改</div>
        </div>
        <div class="touxiang">
             <form action="" method="get" class="from-data">
             <input type="date" name="user_date" value=""/>
             <div>*谨慎填写，审核后就不能修改</div>
            </form>
        </div>
        <div class="touxiang">
             <form action="" method="get" class="from-data">
             <input type="text" name="user_date" value=""/>
             <div>*谨慎填写，审核后就不能修改</div>
            </form>
        </div>
         <div class="touxiang">
             <form action="" method="get" class="from-data">
             <input type="text" name="user_date" value=""/>
             <div>仅作为支付宝提现使用，平台不会泄露个人信息</div>
            </form>
        </div>

         <div class="touxiang">
             <form action="" method="get" class="from-data">
             <input type="text" name="user_date" value=""/>
             <div>*谨慎填写，审核后就不能修改</div>
            </form>
        </div>
        <div class="touxiang">
             <form action="" method="get" class="from-data">
             <input type="text" name="user_date" value=""/>
             <div>*谨慎填写，审核后就不能修改</div>
            </form>
        </div>
    </div>
    <div class="col col3" style="flex-basis:240px">
        <h1 style="color:red">实名认证</h1>
        <div>*注意谨慎填写，审核后便不能更改</div>
        <div class="touxiang">
            <span class="title-right">*证件类型</span><button style="background-color:white">中国公民二代身份证</button>  <button style="background-color:white">其它证件（如护照等）</button>
        </div>
        <div class="right-text">
            <div>
                <span class="title-right">*本人姓名</span><input type="text">
            </div>
            <div>
                <span class="title-right">*证件号码</span><input type="text">
            </div>
        </div>
        <div class="touxiang">
            <div class="title-right">*证件照片</div>
            <span>
                <img :src="avatar" class="img-avatar" width="90">
                <!-- <input type="file" name="avatar" id="uppic" accept="image/gif,image/jpeg,image/jpg,image/png" @change="changeImage($event)" ref="avatarInput" class="uppic"> -->
            </span>
            <span>
                <img :src="avatar" class="img-avatar" width="90">
                <!-- <input type="file" name="avatar" id="uppic" accept="image/gif,image/jpeg,image/jpg,image/png" @change="changeImage($event)" ref="avatarInput" class="uppic"> -->
            </span>
        </div>
    </div>
</content>
 </div>
        </div>
    </div>
</template>
<script>
// import { Tab, Tabs } from 'vant';
//  import { Toast } from 'vant'
export default {
  name: 'renzheng',
  data () {
    return {
      yoursname: '',
      yoursphone: '',
      avatar: require('../assets/images/jia.svg'),
      isno: 'block',
      active: 0,
      navArr: [{
        name: '身份认证'
      },
      {
        name: '实名认证'
      }
      ]
    }
  },
  methods: {
  },
  changeImage (e) {
    var file = e.target.files[0]
    var reader = new FileReader()
    var that = this
    reader.readAsDataURL(file)
    reader.onload = function (e) {
      that.avatar = this.result
    }
  },
  mounted: function () {
  }
}
</script>
<style scoped>
/* .col{ border:red solid 1px;} */
.col1 span,.col2 div{display:block;height: 30px;line-height: 30px;}
content {
  /* width：100%; */
  width:100%;
  height:300px;
  margin-top:90px;

  display: -webkit-flex;
  -webkit-flex-flow: row;
  -webkit-align-items: stretch;
  -webkit-justify-content:space-between;

  /*IE10还不支持*/
  display: -ms-flex;
  -ms-flex-flow: row wrap;
  -ms-align-items: stretch;
  -ms-justify-content:space-between;

  display: flex;
  flex-flow: row;
  align-items: stretch;
  justify-content:space-between;
}
.col3{-webkit-flex:1;-moz-flex:1;flex:1}
.touxiang{
  height:95px !important;
  line-height:95px !important;
  /* border:1px solid red; */
}
.img-avatar{
  border:1px solid grey;
}
.sex{
  width:150px;
  height: 30px;
}
.right-text{
   height:160px !important;
  line-height:80px !important;
  /* border:1px solid rgb(94, 209, 27); */
}
.title-right{
    padding-right:30px;

}
  </style>
