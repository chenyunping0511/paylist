<template>
    <div>
      <div class="bdy">
          <div class="parent">
              <div class="left">
                  <p>团队信息</p>
              </div>
              <div class="right">
                <input type="text" placeholder="无">
              </div>
          </div>
          <div class="parent">
              <div class="left">
                  <p>职位信息</p>
              </div>
              <div class="right">
                <input type="text" placeholder="无">
              </div>
          </div>
          <div class="parent">
              <div class="left">
                  <p>申请团队ID</p>
              </div>
              <div class="right">
                <input type="text" placeholder="1001">
              </div>
          </div>
          <div class="true-regin">
              <button>确认申请</button>
          </div>
          <div class="repaly-regin">
              <router-link to="/TeamInformation">暂无团队，申请注册</router-link>
          </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'Team'
}
</script>
<style scoped>
.parent{
    display: flex;
    margin-top:20px;
    margin-right: 60px;
    /* border:1px solid red; */
}
.left{
    width:400px;
    margin-left: 100px;
    /* border:1px solid red; */
    margin-right: 50px;
}
.right{
   flex: 3;
   /* border:1px solid red; */
}
.left p{
    float:right;
}
.right input{
    float:left;
    height: 35px;
    width:400px;
    text-align: center;
    line-height: 35px;
}
.true-regin{
   width:80%;
   margin-top: 30px;
   margin-left: 110px;
}
.true-regin button{
    width:120px;
    height: 35px;
    border-radius: 5px;
    border: 1px solid rgb(197, 194, 194);
    background-color: rgb(20, 238, 20);
}
.repaly-regin{
    margin-left:200px;
    margin-top: -18px;
}
.bdy{
  margin-left: 10%;
}
</style>
