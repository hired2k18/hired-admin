<template>
  <div id="app">
    <Navbar v-if="loggedIn" v-bind:user="user"></Navbar>
    <router-view/>
    <footer v-if="loggedIn" class="sticky-footer">
      <div class="container">
        <div class="text-center">
          <small>Copyright © hired2k18</small>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import firebase from 'firebase'
export default {
  name: 'App',
  data () {
    return {
      loggedIn: false,
      user: {
        email: ''
      }
    }
  },
  components: {Navbar},
  created () {
    if (firebase.auth().currentUser) {
      this.loggedIn = true
      this.user.email = firebase.auth().currentUser.email
    }
  }
}
</script>

<style>

</style>
