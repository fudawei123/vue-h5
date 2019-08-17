import {
  getInformationIndexList
} from '@/api/news/api'
import {
  setAttr
} from '../util'


const obj = {
  state: {
    params: {
      pageNo: 1,
      length: 10
    }
  }
}

export default setAttr(obj)(getInformationIndexList)
