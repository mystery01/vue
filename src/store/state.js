// import ly from 'ly'
// import _qj from '../assets/js/util'
let defaultUid = '0'
let defaultToken = '0'
let defaultCard = null
let defaultGuideStatus = null
let defaultUuid = '0'
let defaultQjuid = '0'
let defaultStye = 'origin'
let defaultFont = '18'
let defaultOrder = '2' // 默认当前正序
let defaultFree = {} // 弹过免费卡的记录
try {
  if (localStorage.uid) {
    defaultUid = localStorage.uid
  }
  if (localStorage.token) {
    defaultToken = localStorage.token
  }
  if (localStorage.guideStatusVtwo) {
    defaultGuideStatus = localStorage.guideStatusVtwo
  }
  if (localStorage.uuid) {
    defaultUuid = localStorage.uuid
  }
  if (localStorage.qjuid) {
    defaultQjuid = localStorage.qjuid
  }
  if (localStorage.style) {
    defaultStye = localStorage.style
  }
  if (localStorage.font) {
    defaultFont = localStorage.font
  }
  if (localStorage.order) {
    defaultOrder = localStorage.order
  }
  if (localStorage.free) {
    defaultFree = JSON.parse(localStorage.free)
  }
} catch (e) {}
export default {
  uid: defaultUid,
  token: defaultToken,
  cardId: defaultCard,
  guideStatusVtwo: defaultGuideStatus,
  uuid: defaultUuid,
  ly: {},
  qjuid: defaultQjuid,
  style: defaultStye, // 阅读皮肤
  font: defaultFont, // 阅读字体大小
  order: defaultOrder, // 目录顺序，默认是正序
  free: defaultFree
}
