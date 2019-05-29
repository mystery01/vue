
let defaultOrigin = '' // 来源
try {
  if (localStorage.origin) {
    defaultOrigin = localStorage.origin
  }
} catch (e) {}
export default {
  origin: defaultOrigin
}
