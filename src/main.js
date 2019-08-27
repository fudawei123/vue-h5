// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import Navigation from 'vue-navigation'

Vue.use(Navigation, {
  router
})

/**
 * 过滤器
 */
import './utils/Filter'

/**
 * 重置样式
 * 重置 vant-ui 的 css
 * 共有样式
 */
import './common/css/index.css'

/**
 * 字体图标
 */
import './common/icon/iconfont.css'

/**
 * 设置 html 的font-size 值
 * 750/75 375/37.5
 */
import 'lib-flexible/flexible'

/**
 * 集成 vant-ui
 */
import {
  Button,
  Tabbar,
  TabbarItem,
  Field,
  NavBar,
  PullRefresh,
  List,
  Icon,
  Popup,
  Image,
  Lazyload,
  Loading,
  Skeleton,
  DropdownMenu,
  DropdownItem
} from 'vant';
Vue
  .use(Button)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Field)
  .use(NavBar)
  .use(PullRefresh)
  .use(List)
  .use(Icon)
  .use(Popup)
  .use(Image)
  .use(Lazyload)
  .use(Loading)
  .use(Skeleton)
  .use(DropdownMenu)
  .use(DropdownItem);


/**
 * 集成 cube-ui
 */
import {
  Style,
  createAPI
} from 'cube-ui'
// 可以实现以 API 的形式调用 自定义组件
import MyShare from './components/myShare/MyShare'
createAPI(Vue, MyShare, ['cancel'], true)

/**
 * 执行此文件 将 自定义组件 注册为 全局组件
 */
import './components/util'

/**
 * js 与 android/OC 交互
 */
// 注册 js 方法供 android/OC 调用
import './bridge/register'
// 获取 token
import Bridge from './bridge/call'
Bridge.getUserInfo()

/**
 * log
 */
import VConsole from 'vconsole'
require('./constants/index').isShowLog && new VConsole()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
