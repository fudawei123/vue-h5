import Vue from 'vue'
import MyImgComponent from './myImg/MyImg'
import MyListComponent from './myList/MyList'
import MyShareComponent from './myShare/MyShare'
import MyReadLikeComponent from './myReadLike/MyReadLike'

[{
    name: 'MyImg',
    component: MyImgComponent
  },
  {
    name: 'MyList',
    component: MyListComponent
  },
  {
    name: 'MyShare',
    component: MyShareComponent
  },
  {
    name: 'MyReadLike',
    component: MyReadLikeComponent
  }
].forEach(({
  name,
  component
}) => {
  Vue.use({
    install: function (Vue) {
      Vue.component(name, component)
    }
  })
})
