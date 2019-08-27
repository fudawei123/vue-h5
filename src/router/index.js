import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/main/Main' // 缓存切换页
import Tabs from '@/pages/main/tabs/Tabs' // tabs页 留口 暂定是发现页
import LazyLoad from './util'
import store from '../store/index'

Vue.use(Router)

const Splash = LazyLoad('/splash/Splash') // 闪屏页
const Login = LazyLoad('/login/Login') // 登陆页
const Find = LazyLoad('/main/tabs/find/Find') // 发现页
const Mine = LazyLoad('/main/tabs/mine/Mine') // 我的页
const News = LazyLoad('/main/tabs/find/news/list/List') // 资讯列表
const NewsDetails = LazyLoad('/main/tabs/find/news/detail/Detail') // 资讯详情
const NewsDetailsShare = LazyLoad('/main/tabs/find/share/NewsDetailsShare') // 分享资讯详情
const ActivityList = LazyLoad('/main/tabs/find/activity/list/List') // 活动列表
const ActivityDetail = LazyLoad('/main/tabs/find/activity/detail/Detail') // 活动详情

const router = new Router({
  mode: 'hash',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      if (to.meta.keepAlive && document.querySelector('.scroll-wrapper')) {
        document.querySelector('.scroll-wrapper').scrollTop = to.meta.savedScrollTop
      }
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  },
  routes: [{
      path: '/',
      redirect: "/main",
    },
    {
      path: '/splash',
      name: 'Splash',
      component: Splash
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      children: [{
          path: '/main',
          redirect: "/find",
        },
        {
          path: '/tabs',
          name: 'Tabs',
          component: Tabs,
          children: [{
              path: '/tabs',
              redirect: "/find",
            },
            {
              path: '/find',
              name: 'Find',
              component: Find,
              meta: {
                keepAlive: true,
                flag: false
              }
            },
            {
              path: '/mine',
              name: 'Mine',
              component: Mine,
            }
          ]
        },
        {
          path: '/news',
          name: 'News',
          component: News,
          meta: {
            flag: false,
            keepAlive: true,
            title: "资讯列表",
          }
        },
        {
          path: '/newsDetails',
          name: 'NewsDetails',
          component: NewsDetails,
          meta: {
            title: "资讯详情",
            rightIcon: "more",
          }
        },
        {
          path: '/newsDetailsShare',
          name: 'NewsDetailsShare',
          component: NewsDetailsShare,
          meta: {
            flag: false
          }
        },
        {
          path: '/activityList',
          name: 'ActivityList',
          component: ActivityList,
          meta: {
            keepAlive: true,
            title: "活动列表",
          }
        },
        {
          path: '/activityDetail',
          name: 'ActivityDetail',
          component: ActivityDetail,
          meta: {
            title: "活动详情",
            rightIcon: "zhuanfa",
          }
        },
      ]
    }
  ]
})


router.beforeEach((to, from, next) => {
  store.commit("navBar/setConfig", {
    ...to.meta,
    title: to.meta.title || '一汽奥迪',
    rightIcon: to.meta.rightIcon || null
  });
  next()
})

export default router
