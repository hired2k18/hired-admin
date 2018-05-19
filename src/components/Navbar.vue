<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
    <router-link class="navbar-brand py-0" to="/">hired2k18 <small style="font-size: 12px;">( {{ user.email }} )</small></router-link>
    <button class="navbar-toggler navbar-toggler-right py-0" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse py-0" id="navbarResponsive">
      <ul class="navbar-nav navbar-sidenav" id="exampleAccordion">
        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">
          <router-link class="nav-link" to="/">
            <i class="fa fa-fw fa-dashboard"></i>
            <span class="nav-link-text">Dashboard</span>
          </router-link>
        </li>
        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Home Services">
          <router-link class="nav-link" to="/users">
            <i class="fa fa-fw fa-area-chart"></i>
            <span class="nav-link-text">Users</span>
          </router-link>
        </li>
        <!--
        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Home Services">
          <router-link class="nav-link" to="/nearby">
            <i class="fa fa-fw fa-area-chart"></i>
            <span class="nav-link-text">All Nearby</span>
          </router-link>
        </li>
        -->
        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Home Services">
          <router-link class="nav-link" to="/locations">
            <i class="fa fa-fw fa-area-chart"></i>
            <span class="nav-link-text">Locations</span>
          </router-link>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <label v-on:click="doLogout" class="nav-link">
            <i class="fa fa-fw fa-sign-out"></i>Logout</label>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'navbar',
  props: ['user'],
  created () {
    console.log('hello')
  },
  methods: {
    doLogout () {
      if (firebase.auth().currentUser) {
        firebase.auth().signOut().then(() => {
          this.$router.go({ path: this.$router.path })
        })
      }
    }
  }
}
</script>
