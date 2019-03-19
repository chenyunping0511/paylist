<template>
    <div>
       <div class="user-header">
          <router-link to="./Personal">
            <div class="header-image">
              <img src="../assets//images/Head portrait.png" alt="李连杰" width="90" >
              <div class="username">随心就好ID:123456</div>
            </div>
          </router-link>
     </div>
    <div class="top">
        <div class="left">
            <span>公会名称</span><input type="text">
            <p>
            <span>所属地区</span><input type="text" placeholder="省/市">
            </p>
        </div>
        <div class="right">
          <p>
            <span>公会介绍</span>
            <textarea cols="45" rows="10"></textarea>
          </p>
             <label>工会头像</label>
                  <span class="">
                    <img :src="f.src" v-if="f"  style="width:80px;"/>
                    <img src="../assets/images/jia.svg" @click="add" v-else class="jia"/>
                    <input class="value" style="display:none" type="file" ref="file" accept="image/*" multiple="multiple" @change="getFile($event)" />
              </span><br/>
        </div>
        <h2>业务擅长</h2>
        <div class="check-list">
              <div v-for="(item,index) in this.dishes" :key="(item,index)" class="boxList">
                  <div class="btn-type">
                      <input type="checkbox" class="check">
                      <span>{{item.name}}</span>
                  </div>
              </div>
          </div>
    </div>
    </div>
</template>
<script>
export default {
  name: 'PersonalInformation',
  data () {
    return {
      'file': null,
      'f': null,
      dishes: [
        {name: '中文语音采集'}, {name: '外语语音采集'}, {name: '文本采集'}, {name: '图片拉框'},
        {name: '视频采集'}, {name: '方言采集'}, {name: '中文转语音采集'}, {name: '语音质检'},
        {name: '外语语音转写'}, {name: '属性标签'}, {name: '方言转写'}, {name: '图像抠图'},
        {name: '关键点标注'}, {name: '交通道路路线标注'}, {name: '3D点云标注'}
      ]
    }
  }
}
</script>
<style scoped>
/* 主体 */
.user-header{
    width: 30%;
    height:160px;
    white-space: nowrap;
    font-size: 0;
     border-bottom: 1px solid #eef2f5;
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
.jia{
  width:80px;
  height: 80px;
  border: 1px solid rgb(220, 221, 220);
}
/* checkbox */
.boxList{
  width:60%;
  margin: 0 auto;
  /* border: 1px solid rgb(6, 167, 241); */
}
.boxList div{
  float: left;
  margin-top: 30px;
  margin-left: 30px;
}
.btn-type{
  width: 180px;
  height: 40px;
  line-height: 40px;
  display: inline-flex;
  border-radius: 6px;
  color: rgb(6, 167, 241);
  border: 1px solid rgb(6, 167, 241);
}
.btn-type input{
  margin-top: 8px;
  margin-left: 12px;

}
.btn-type span{
  margin-left: 12px;

}
input[type=checkbox] {
  margin-right: 5px;
  cursor: pointer;
  font-size: 14px;
  width: 15px;
  height: 12px;
  position: relative;
}

input[type=checkbox]:after {
  position: absolute;
  width: 15px;
  height: 22px;
  top: 0;
  content: " ";
  background-color: rgb(6, 167, 241);
  color: #fff;
  display: inline-block;
  visibility: visible;
  padding: 0px 3px;
  border-radius: 3px;
}

input[type=checkbox]:checked:after {
  content: "✓";
  font-size: 20px;
}
.check-list{
  width: 100%;
  height: 260px;
  border: 1px solid rgb(244, 247, 244);
}

/* content */
.left,.right{
  margin-top: 20px;
}
</style>
