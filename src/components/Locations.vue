<template>
  <div class="content-wrapper" id="locations">
    <div class="container-fluid">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/">Dashboard</router-link>
        </li>
        <li class="breadcrumb-item active">Serving Locations</li>
      </ol>
      <div class="row my-2">
        <div class="col-sm-12">
          <div class="card">
            <div class="card-header">Add Serving Location</div>
            <div class="card-body">
              <form>
                <div class="row">
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label for="location">Enter Location</label>
                      <input type="text" v-model="location" name="location" id="location" class="form-control">
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <div class="form-group">
                      <button @click="addLocation" type="submit" class="btn btn-primary">ADD</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>

    <div class="row my-4">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header">All Serving Locations</div>
          <div class="card-body">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Location</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(loc,key) in locations">
                  <td>{{key+1}}</td>
                  <td>{{loc.location}}</td>
                  <td><label class="btn btn-danger btn-sm" @click="deleteLocation(loc)">DELETE</label></td>
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
let locRef = db.ref('locations')

export default {
  name: 'locations',
  firebase: {
    locations: locRef
  },
  data () {
    return {
      location: ''
    }
  },
  methods: {
    addLocation (e) {
      const self = this;

      var obj = {
        location: this.location
      }

      locRef.push(obj)
        .then(data => {
          self.location = ''
        }, err => {
          console.log(err);
        })
      e.preventDefault()
    },
    deleteLocation (loc) {
      var key = loc['.key']

      locRef.child(key).remove()
    }
  }
}
</script>

