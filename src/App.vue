<template>
  <div id="app" v-cloak>
    <!-- <app-header  v-if="header-show"></app-header>
    <router-view v-on:public_header="public_header" v-on:public_footer="public_footer"></router-view>
    <app-footer v-if="footer-show"></app-footer> -->
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/public/Header'
import Footer from './components/public/Footer'

export default {
  name: 'App',
  data () {
    return {
      show: ''
    }
  },
  components: {
    Header,
    Footer
  },
  methods: {}
}
</script>

<style>
#app {
  margin-top: 30px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 12px;
}
[v-cloak]{
            display: none;
        }
</style>
