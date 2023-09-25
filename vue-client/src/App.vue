<script>
import { RouterView } from "vue-router"
import { mapActions, mapState, mapWritableState } from 'pinia'
import { useInventoryStore } from "./stores/inventory";
import navbar from "./components/navbar.vue";


export default{
  components: {
    RouterView,
    navbar
  },
  methods: {
    ...mapActions(useInventoryStore,[`fetchData`]),
    ...mapActions(useInventoryStore, [`setIsLogin`]),

  },
  computed:{
    ...mapWritableState(useInventoryStore,[`isLogin`])
  },
  created() {
    this.fetchData()
    if (localStorage.getItem('access_token')) {
      this.setIsLogin(true)
    }
  }
}
</script>

<template>
  <navbar/>
  <RouterView />
</template>

<style>
</style>
