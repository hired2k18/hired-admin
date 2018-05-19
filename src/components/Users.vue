<template>
  <div id="users" class="content-wrapper">
    <div class="container-fluid">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/">Dashboard</router-link>
        </li>
        <li class="breadcrumb-item active">Users</li>
      </ol>

      <div class="row my-4">
        <div class="col-sm-12">
          <div class="card">
            <div class="card-header">All Registered Users</div>
            <div class="card-body">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Profession</th>
                    <th>Location</th>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(user,key) in users">
                    <td>{{key+1}}</td>
                    <td>{{user.name}}</td>
                    <td>{{user.phone}}</td>
                    <td>{{user.profession}}</td>
                    <td>{{user.location}}</td>
                    <td>{{user.address}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Firebase from 'firebase'
import fierInit from './firebaseInit'

let db = fierInit.database()
let userRef = db.ref('users')

export default {
  name: 'users',
  firebase: {
    users: userRef
  }
}
</script>
