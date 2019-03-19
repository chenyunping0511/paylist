import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Header from '@/components/public/Header'
import Footer from '@/components/public/Footer'
import Index from '@/components/Index'
// 引入二级路由
import Marked from './../components/Marked'
import PersonalInformation from './../components/PersonalInformation'
import TeamInformation from './../components/TeamInformation'
import Personal from './../components/Personal'
import EditPersonal from '@/components/EditPersonal'
import TasSquare from '@/components/TasSquare'
import Team from '@/components/Team'
// 引入三级路由
import TeamRegin from '@/components/TeamRegin'
import ComfirmRegistration from '@/components/ConfirmRegistration'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'registered',
      component: HelloWorld
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index,
      //  默认显示选项
      redirect: '/TasSquare',
      children: [
        {
          path: '/TasSquare',
          component: TasSquare
        },
        {
          path: '/Team',
          component: Team
        },
        {
          path: '/TeamInformation',
          component: TeamInformation
        },
        {
          path: '/Marked',
          component: Marked
          // children: [
          //   { path: '/VoiceAnnotation', component: 'Voice' },
          //   {path: '/TextAnnotation', component: 'Text'}
          // ]
        }
      ]
    },
    {
      path: '/Personal',
      component: Personal
    },
    {
      path: '/public/Header',
      component: Header
    },
    {
      path: '/public/Footer',
      component: Footer
    },
    {
      path: '/EditPersonal',
      component: EditPersonal
    },
    {
      path: '/PersonalInformation',
      component: PersonalInformation
    },
    {
      path: '/TeamRegin',
      component: TeamRegin
    },
    {
      path: '/ComfirmRegistration',
      component: ComfirmRegistration
    }
  ],
  mode: 'history'
})
