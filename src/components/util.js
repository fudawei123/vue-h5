import Vue from 'vue'
import MyImgComponent from './myImg/MyImg'
import MyListComponent from './myList/MyList'
import MyShareComponent from './myShare/MyShare'
import MyReadLikeComponent from './myReadLike/MyReadLike'
import MyLikeCollectionComponent from './myLikeCollection/MyLikeCollection'

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
  },
  {
    name: 'MyLikeCollection',
    component: MyLikeCollectionComponent
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
