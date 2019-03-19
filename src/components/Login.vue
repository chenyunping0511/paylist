<template>
  <div class="hello">
    <div class="content"></div>
       <div class="header">
          <p>拇指跳动数据标注平台</p>
          <p>AI数据生产商</p>
        </div>
      <h2 class="title-name">{{ msg }}</h2>
      <div class="login-content">
        <ul class="inpt-login">
          <li>
            <input type="text" placeholder="Email" v-model="userName">
            <br>
          </li>
          <li>
            <input type="text" placeholder="密码" v-model="password">
          </li>
        </ul>
        <div>
          <a href="#" class="cancellation">注销账号</a>
          <br>
          <router-link to="/Index">
             <button class="btn-login" @click.native="login" round :loading="isBtnLoading">确认登录</button>
          </router-link>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  mode: 'history',
  name: 'Login',
  data () {
    return {
      userName: '',
      password: '',
      isBtnLoading: false,
      msg: '拇指跳动数据标注平台'
    }
  },
  created () {
    if (JSON.parse(localStorage.getItem('user')) && JSON.parse(localStorage.getItem('user')).userName) {
      this.userName = JSON.parse(localStorage.getItem('user')).userName
      this.password = JSON.parse(localStorage.getItem('user')).password
    }
  },
  computed: {
    btnText () {
      if (this.isBtnLoading) return '登录中...'
      return '登录'
    }
  },
  methods: {
    login () {
      if (!this.userName) {
        this.$message.error('请输入用户名')
      }
      if (!this.password) {
        this.$message.error('请输入密码')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 /* 导航栏头部 */
.title-name {
  letter-spacing: 10px;
  margin-left: 80px;
}
.header {
  position: fixed;
  background-color: rgb(66, 230, 221);
  left: 0px;
  top: 0px;
  width: 100%;
  z-index: 99;
  border-bottom: 1px solid rgb(151, 150, 150);
}
/* 主体内容文本框 */
.content {
  margin-top: 195px;
  text-align: center;
}
.login-content {
  margin-left: -30px;
}
.inpt-login li {
  list-style-type: none;
  margin-top: 20px;
}
.inpt-login li input {
  height: 20px;
  width: 191px;
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
  width: 90px;
  height: 30px;
  border-radius: 5px;
  margin-left: 149px;
  margin-top: 15px;
}

/* 底部 */
.footer {
  width: 100%;
  height: 100px;
  /* background: #1ab7ea; */
  position: absolute;
  bottom: 0;
  left: 0;
}

</style>
