import Vue from 'vue';
import Vuex from 'vuex';
import navBar from './modules/navBar'
import user from './modules/user'
import news from './modules/news'
import activity from './modules/activity'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    navBar,
    user,
    news,
    activity
  }
});
