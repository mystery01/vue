<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  watch: {
    '$route' (to, from) {
      let routersArr = (sessionStorage.getItem('routers') && sessionStorage.getItem('routers').split(',')) || []
      console.log('routersArr', routersArr)
      if (routersArr.length === 0) {
        if (window.history.length <= 1) {
          routersArr.push(to.path)
        } else {
          if (from.path !== to.path) {
            routersArr.push(from.path)
            routersArr.push(to.path)
          } else {
            routersArr.push(from.path)
          }
        }
      } else {
        if (routersArr.indexOf(to.path) !== -1) {
          this.transitionName = 'slide-right'
          routersArr.splice(routersArr.indexOf(to.path) + 1, 100)
        } else {
          if (to.name === 'BookReadVertical' && from.name === 'BookReadVertical' && to.params.id === from.params.id) {
            this.transitionName = 'slide-left'
            routersArr.splice(routersArr.length - 1, 1, to.path)
          } else {
            this.transitionName = 'slide-left'
            routersArr.push(to.path)
          }
        }
      }
      sessionStorage.setItem('routers', routersArr.join(','))
    }
  }
}
</script>

<style>
  [v-cloak]{
    display:none!important
  }
  #app {
    height: 100%;
  }
</style>
