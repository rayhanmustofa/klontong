<script>
import { mapState, mapActions } from 'pinia'
import { useInventoryStore } from '../stores/inventory'

export default {
    name: "navbar",
    computed: {
        ...mapState(useInventoryStore, [`isLogin`]),
        ...mapState(useInventoryStore, [`displayEmail`]),
    },
    methods:{
    ...mapActions(useInventoryStore,[`logout`]),
    logout1(){
      this.logout()
    },
  }
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-info">
    <RouterLink to="/" class="navbar-brand text-white" href="#" >K-Lontong Store</RouterLink>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
              <li class="nav-item" v-if="!isLogin">
                <RouterLink to="/login"  class="nav-link text-white">Login</RouterLink>
              </li>
              <li class="nav-item" v-if="!isLogin">
                <RouterLink to="/register"  class="nav-link text-white">Register</RouterLink>
              </li>
              <li class="nav-item" v-if="isLogin">
                <RouterLink to="/add-product" class="nav-link text-white" href="#" tabindex="-1" aria-disabled="true">Add Product</RouterLink>
              </li>
              <li class="nav-item" v-if="isLogin">
                <a @click.prevent="logout1()" class="nav-link text-white" href="#" tabindex="-1" aria-disabled="true">Logout</a>
              </li>
          </ul>
    </div>
  </nav>
</template>

<style scoped>
</style>