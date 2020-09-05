<template>
  <div id="app">
    <!--<div id="nav">-->
      <!--<router-link to="/">Home</router-link> |-->
      <!--<router-link to="/about">About</router-link>-->
    <!--</div>-->
    <router-view></router-view>
  </div>
</template>

<script>
import * as Api from './api'

export default {
  name: 'App',
  created () {
    this.loadLoggedInUser()
  },
  methods: {
    loadLoggedInUser () {
      const currentUser = localStorage.getItem('user')
      if (currentUser) {
        const user = JSON.parse(currentUser)
        Api.setAuthorizedToken(user.data.api_token)
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
