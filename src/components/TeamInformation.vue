<template>
    <div class="nio">
        <router-link  to="/ReginTeam"></router-link>
        <router-link to="/PersonalInformation">
            <button class="regin-btn">个人团队注册</button>
        </router-link>
        <router-link to="/TeamRegin">
            <button class="regin-btn">企业团队注册</button>
        </router-link>
    </div>
</template>
<script>
export default {
  name: 'TeamInformation'
}
</script>
<style scoped>
.nio{
  height:900px;
}
.regin-btn{
  width:200px;
  height: 34px;
  margin-top: 50px;
  line-height: 34px;
  margin-left: 80px;
  border:1px solid rgb(214, 212, 212);
  box-shadow: 0px 0px 0px rgb(219, 217, 216),0px 5px 5px rgb(219, 217, 216);
  background-color: rgb(13, 238, 24);
  border-radius: 8px;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  transition: all 1s ease;
}
.regin-btn:active{
  box-shadow: 0px 3px 0px rgba(219, 31, 5, 1),0px 3px 6px rgba(0, 0, 0, 9);
  top:10px;
}
</style>
