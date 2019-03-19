<template>
    <div>
         <router-link to="./Personal">
            <div class="header-image">
              <img src="../assets//images/Head portrait.png" alt="李连杰" width="90" >
              <div class="username">随心就好ID:123456</div>
            </div>
          </router-link>
          <form action="" method="post" class="team-from">
            <fieldset>
              <p>
                  <label>工会名称</label>
                  <input type="text" value=""><br/>
              </p>
              <p>
                  <label>所属地区</label>
                  <input type="text" value="" placeholder="省/市"><br/>
              </p>
              <p  style="margin-left:6%">
                  <label>工会介绍</label>
                  <textarea cols="50" rows="10">在这里输入内容...</textarea><br/>
              </p>
              <p>
                  <label>工会头像</label>
                  <span class="">
                    <img :src="f.src" v-if="f"  style="width:80px;"/>
                    <img src="../assets/images/jia.svg" @click="add" v-else class="jia"/>
                    <input class="value" style="display:none" type="file" ref="file" accept="image/*" multiple="multiple" @change="getFile($event)" />
                  </span><br/>
                </p>
              </fieldset>
          </form>
          <div class="check-list">
              <div v-for="(item,index) in this.dishes" :key="(item,index)" class="boxList">
                  <div class="btn-type">
                      <input type="checkbox" class="check">
                      <span>{{item.name}}</span>
                  </div>
              </div>
          </div>
         <br/>
          <div class="about-conent">
            <div>
              <span  class="about">相关资质</span>
              <span style="color:red">*</span><span>请上企业营业执照原件照片，图片大小不低于1000像素，总大小不超过5M</span> <span class="">
                  <span class="about-file">
                    <img :src="f.src" v-if="f"  style="width:80px;"/>
                    <img src="../assets/images/jia.svg" @click="add" v-else class="jia"/>
                    <input class="value" style="display:none" type="file" ref="file" accept="image/*" multiple="multiple" @change="getFile($event)" />
                  </span>
                  </span><br/>
            </div>
            <div>
              <span class="about">相关介绍</span>
              <span style="color:red">*</span><span>请简要介绍企业基本情况，如企业规模，人员介绍，企业优势：详细的介绍，有利于提高审核通过率</span>
              <p>
              <textarea cols="50" rows="10">在这里输入内容...</textarea><br/>
              </p>
            </div>
            <div>
              <span class="about">会员对接人</span>
              <span style="color:red">*</span><span>此信息会显示在已加入公会会员的公会首页中，便于会员联系对接人</span><br/>
              <div class="input-true">
                <span class="viptitle">对接人</span>
                <span style="color:red">*</span><input type="text" placeholder="单行输入"><br/>
                <p>
                <span class="viptitle">手机号</span>
                <span style="color:red">*</span><input type="text" placeholder="单行输入">
                </p>
              </div>
              <router-link to="/ComfirmRegistration">
                  <button class="true-btn">确认</button>
              </router-link>
            </div>
          </div>

    </div>
</template>
<script>
export default {
  name: 'TeamRegin',
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
  },
  methods: {
    add () {
      this.$refs.file.click()
    },
    getFile (event) {
      this.file = event.target.files[0]
      const item = {
        name: this.file.name,
        size: this.file.size,
        file: this.file
      }
      this.html5Reader(this.file, item)
      this.f = item
    },
    // 将图片文件转成BASE64格式
    html5Reader (file, item) {
      const reader = new FileReader()
      reader.onload = (e) => {
        this.$set(item, 'src', e.target.result)
      }
      reader.readAsDataURL(file)
    },
    submitForm (event) {
      event.preventDefault()
      let formData = new FormData()
      formData.append('file', this.file)
      let config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      this.axios.post('http://127.0.0.1/index/index/upload', formData, config).then(function (res) {
        console.log(res)
        if (res.status === 200) {
        }
      })
    }
  }
}
</script>
<style scoped>
.jia{
  width:80px;
  height: 80px;
  border: 1px solid rgb(220, 221, 220);
}
.header-image{
  width: 130px;
  height: 80px;
  /* border: 1px solid red; */
  padding: 25px;
  clear: both;

}
.user-header .header-image .username{
  font-size: 14px;
}
form fieldset{
  border:0;
  text-align: center;

        }
fieldset p{
  margin-top: 20px;
}
label{
  display: inline-block;
  width: 100px;
  margin-right: 50px;
  text-align: right;
    }
input{
  width: 250px;
  height: 30px;
    }
/* .check{
  width: 18px;
} */
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
.about{
  font-weight: bold;
  font-size:24px;
}
.about-conent{
  width: 40%;
  /* border: 1px solid red; */
  margin:0 auto;
  /* float: right; */
}
.about-conent div{
  float: left;
  display: block;
  margin: 20px;
}
.about-file{
  margin-top: 30px;
}
.true-btn{
  width: 150px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid rgb(236, 233, 233);
  background-color: rgb(24, 192, 24);
  margin-top: 20px;
  margin-right:150px;
}
.viptitle{
  padding-left: 20px;
  margin-top: 20px;
  font-size: 18px;
}
</style>
