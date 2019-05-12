export default {
  setUid (state, uid) {
    state.uid = uid
    try {
      localStorage.uid = uid
    } catch (e) {}
  },
  setToken (state, token) {
    state.token = token
    try {
      localStorage.token = token
    } catch (e) {}
  },
  setLy (state, ly) {
    state.ly = ly
  },
  setUuid (state, uuid) {
    state.uuid = uuid
    try {
      localStorage.uuid = uuid
    } catch (e) {}
  },
  setGuide (state, guideStatusVtwo) {
    state.guideStatusVtwo = guideStatusVtwo
    try {
      localStorage.guideStatusVtwo = guideStatusVtwo
    } catch (e) {}
  },
  setQjuid (state, qjuid) {
    state.qjuid = qjuid
    try {
      localStorage.qjuid = qjuid
    } catch (e) {}
    let d = document
    // eslint-disable-next-line
    let ss = location.href.match(/.*?\/([\w-.]+)(\/[\w-.\/]+|\/)?(?:\?(.*))?/)
    let host = '.qijizuopin.com'
    console.log(ss)
    let lt = ss[1].length
    if (ss[1].substr(lt - 15) === host) {
      d.cookie = 'SpMLdaPx_quid=' + escape(qjuid) + '; expires=Sun, 18 Jan 2038 00:00:00 GMT;path=/;domain=' + host
    } else {
      d.cookie = 'SpMLdaPx_quid=' + escape(qjuid) + '; expires=Sun, 18 Jan 2038 00:00:00 GMT;path=/;domain=' + ss[1]
    }
  },
  setStyle (state, style) {
    state.style = style
    try {
      localStorage.style = style
    } catch (e) {}
  },
  setFont (state, font) {
    state.font = font
    try {
      localStorage.font = font
    } catch (e) {}
  },
  setOrder (state, order) {
    state.order = order
    try {
      localStorage.order = order
    } catch (e) {}
  },
  setFree (state, free) {
    state.free = free
    try {
      localStorage.free = JSON.stringify(free)
    } catch (e) {}
  }
}
