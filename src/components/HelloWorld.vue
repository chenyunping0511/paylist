<template>
    <div class="content">
      <h2 class="title-name">{{ msg }}</h2>
      <div class="login-content">
        <ul class="inpt-login">
          <li>
            <span>昵称</span>
            <input type="name" placeholder="name">
            <br>
          </li>
          <li>
            <span>邮箱/账号名</span>
            <input type="email" placeholder="email">
          </li>
          <li>
            <span>密码</span>
            <input type="pwd" placeholder="password">
          </li>
          <li>
            <span>确认密码</span>
            <input type="text" placeholder="email">
          </li>
          <li>
            <span>姓名</span>
            <input type="name" placeholder="user-name">
          </li>
          <li>
            <span>身份证号</span>
            <input type="text" placeholder="Id number">
          </li>
          <li>
            <span>手机号</span>
            <input type="tel" placeholder="tel">
          </li>
          <li>
            <span>支付宝账号</span>
            <input type="text" placeholder="Alipay account">
          </li>
        </ul>
        <div>
          <router-link to="/Login">
            <button class="btn-login">登录
              <span class="have-login">[已有账号]</span>
            </button>
          </router-link>
          <router-link to="/Login">
            <button class="btn-login">确认注册</button>
          </router-link>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  mode: 'history',
  name: 'HelloWorld',
  data () {
    return { msg: '拇指跳动数据标注平台' }
  },
  created: function () {
    this.$emit('public_header', true)
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
/* 主体内容文本框 */
.content {
  width: 100%;
  margin-top: 225px;
  margin-top: 130px;
  position: relative;
  /* z-index: -99; */
}
.login-content {
  width: 100%;
  padding-bottom: 30px;
}
.inpt-login {
  margin: 0 auto;
  width: 400px;
}
.inpt-login li {
  list-style-type: none;
  margin-top: 20px;
}
.inpt-login li input {
  height: 20px;
  width: 190px;
}
.inpt-login li span {
  width: 150px;
  float: left;
  /* border:1px solid blue; */
}
.cancellation {
  text-decoration: none;
  color: rgb(129, 124, 124);
  font-size: 14px;
  margin-left: 167px;
}
.btn-login {
  border: 1px solid rgb(252, 250, 250);
  background-color: rgb(25, 201, 83);
  width: 120px;
  height: 30px;
  border-radius: 5px;
  margin-left: 25px;
  margin-top: 25px;
}
.have-login {
  font-size: 4px !important;
  color: #1c40ca;
}

</style>
