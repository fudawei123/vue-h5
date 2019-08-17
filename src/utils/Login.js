import {
  Dialog
} from 'vant'
import Bridge from '../bridge/call'

/**
 * 确认是否去登陆
 */
export default () => {
  Dialog.confirm({
    title: '提示',
    message: '请登陆'
  }).then(() => {
    // on confirm
    Bridge.login()
  }).catch(() => {
    // on cancel
  });
}
