<template>
<div>
   <meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1, maximum-scale=1, user-scalable=no"/>
        <div class="user-header">
          <router-link to="./Personal">
            <div class="header-image">
              <img src="../assets//images/Head portrait.png" alt="李连杰" width="90" >
              <div class="username">随心就好ID:123456</div>
            </div>
          </router-link>
  </div>
   <div class="com  clearfix">
    <div class="bd ">
        <router-link to="/EditPersonal">
            <button class="personInfo">
              <img src="../assets/images/list-outline.svg" class="info-img">
              <span>编辑个人资料</span>
              </button>
        </router-link>
    </div>
    </div>
    <div class="content">
       <div class="content-my">
          <div class="content-title">
              <div class="content-history">
                  <img src="../assets/images/my-task.svg" style="display:inline-block">
                  <span>历史任务包</span>
              </div>
              <div class="content-son">
                    <ul class="list-history">
                        <li>历史任务包合格率</li>
                         <li>100%</li>
                    </ul>
                    <ul class="list-history">
                        <li>历史语音标注合格率</li>
                         <li>100%</li>
                    </ul>
                    <ul class="list-history">
                        <li>历史图片拉框合格率</li>
                         <li>100%</li>
                    </ul>
                    <ul class="list-history">
                        <li>历史图片转写合格率</li>
                         <li>100%</li>
                    </ul>
                    <ul class="list-history">
                        <li>历史任务合格次数</li>
                         <li>0%</li>
                    </ul>
                    <ul class="list-history">
                        <li>历史任务包过期率</li>
                         <li>0%</li>
                    </ul>
              </div>
          </div>
          <div class="content-title">
              <div class="content-history">
                  <img src="../assets/images/公告通知.svg">
                  <span>最新通知</span>
              </div>
              <div class="content-newinfo">
                <div class="news">
                      <p>OCR清洗+拉框：现在做的加QQ群（124293933）</p>
                      <p>长语音转写任务单：单价220,有这方面经验的加QQ(124293933)</p>
                </div>
              </div>
          </div>
          <hr  color="#FFFFFF"/>
             <div class="content-title pay-formy">
              <div class="content-history">
                  <img src="../assets/images/信封.svg" >
                  <span>我的酬劳</span>
                  <span  class="all-getpay">累计挣得20元</span>
              </div>
              <div class="content-son my-pay">
                    <ul class="list-history list-pay">
                        <li>长语音中文转写（任务ID）300112</li>
                         <li>单价120/1H</li>
                         <li>累计时长20分钟</li>
                         <li>累计挣得20元</li>
                    </ul>
                    <ul class="list-history list-pay">
                       <li>长语音中文转写（任务ID）300112</li>
                         <li>单价120/1H</li>
                         <li>累计时长20分钟</li>
                         <li>累计挣得20元</li>
                    </ul>
              </div>
          </div>

           <form action="" method="get" class="from-data">
             <span>查询日期: </span>
             <input type="date" name="user_date" value=""/>
              <input type="submit" />
            </form>

      </div>
    </div>
</div>
</template>
<script>
export default {

}
</script>
<style scoped>
/* 主体 */
.user-header{
    width: 99.8%;
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
/*编辑个人资料 */
.com{width:1000px;padding:5px;margin-top: 20px;}
.bd{
     margin-top: -125px;
     margin-left: 600px;
     /* margin-right: -150px; */
     /* float: right; */
}
.clearfix{
content:'.'; display:block;height:0;clear:both;
}
.info-img{
  width: 40px;
  vertical-align: middle;

}
.personInfo{
      width: 310px;
      height: 40px;
      border-radius: 5px;
      border: 1px solid rgb(131, 129, 133);
      background-color: rgb(20, 241, 38);
}
.personInfo span{
   line-height: 40px;
}
/* content */
.content{
  clear: both;
  width: 95.5%;
  height: 500px;
  margin:0 auto;
  /* padding: 20px; */
  font-size: 0;
  /* border: 1px solid red; */
}
.content-my{
  width: 100%;
  /* height: 900px; */
  font-size: 14px;
  padding-bottom: 20px;
  /* border: 1px solid rgb(235, 168, 23); */
}
.content-title{
  width: 400px;
  margin-right: 13px;
  /* height: 500px; */
  display: inline-table;
  /* border: 1px solid rgb(109, 38, 240); */
}
.content-history{
  width: 100%;
  height: 90px;
  display: inline-flex;
  line-height: 90px;
  /* border: 1px solid rgb(12, 184, 236); */
}
.content-history span{
  margin-left: 10px;
  font-weight: bold;
  font-size: 14px;
}
.content-son{
  width: 400px;
  height: 250px;
  border: 1px solid rgb(159, 162, 163);
}

.content-newinfo{
     width: 400px;
    height: 250px;
     margin-right:20px;
   border: 1px solid rgb(159, 162, 163);
}
.content-newinfo .news{
     width: 60%;
    height: 180px;
    margin: 10% auto;
}
/* list-history */
.list-history{
  width:99.5%;
  font-size: 14px;
  border:1px dotted  rgb(159, 162, 163);
  overflow: hidden;
  white-space: nowrap;
  padding: 0;
}
 .list-history:before, .list-history:after {
   display: table;
   line-height: 0;
   content: "";
 }
.list-history:after {
   clear: both;
}
.list-history li{
  width: 49%;
  /* float: left; */
  display: inline-table;

}
/* my-pay */
.my-pay{
  width: 90%;
  padding-top: 10px;
  height: 90px ! important;
  white-space: nowrap;
  border: 1px solid rgb(159, 162, 163);
}
.list-pay{
  width:99.8%;
  border: 1px dotted rgb(159, 162, 163);
  /* border: 1px solid rosybrown; */
}
.list-pay li{
  width:20% ! important;
}
.from-data{
  margin-top: 40px;
  /* margin-right: 302px; */
}
.from-data span{
  font-size: 16px;
}
.pay-formy{
width: 88% ! important;
margin-left:80px;
}
.all-getpay{
  color: red;
  padding-left: 40px;
  padding-bottom: 30px;
}
</style>
