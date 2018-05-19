<template>
  <div class="container" id="login">
    <div class="card card-login mx-auto mt-5">
      <div class="card-header">Login</div>
      <div class="card-body">
        <form>
          <div class="form-group">
            <input class="form-control" v-model="user.email" id="email" type="email" aria-describedby="emailHelp" placeholder="Enter email">
          </div>
          <div class="form-group">
            <input class="form-control" v-model="user.password" id="password" type="password" placeholder="Password">
          </div>
          <button  v-on:click="doLogin" type="submit" class="btn btn-success btn-block">LOGIN</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'login',
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    doLogin (e) {
      if (this.user.password.length >= 6) {
        firebase
        .auth()
        .signInWithEmailAndPassword(this.user.email,this.user.password)
        .then( user => {
          this.$router.go({ path: this.$router.path })
        })
        .catch( error => {
          console.log(error)
        })
      }
      e.preventDefault()
    }
  }
}
</script>
