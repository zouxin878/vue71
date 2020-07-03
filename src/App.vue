<template>
 <div id='app'>
  <router-view></router-view>
 </div>
</template>

<script>
export default {}
</script>

<style lang='sass'>
  body,
  html
    height: 100%
    #app
      height: 100%
      background: url('./assets/background.gif') no-repear
  *
    margin: 0
    padding: 0
    list-style: none
</style>
