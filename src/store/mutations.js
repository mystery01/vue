export default {
  setOrigin (state, origin) {
    state.origin = origin
    try {
      localStorage.origin = JSON.stringify(origin)
    } catch (e) {}
  }
}
