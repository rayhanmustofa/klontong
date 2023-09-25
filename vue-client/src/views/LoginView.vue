<script >
import { RouterLink } from 'vue-router'
import { mapState, mapActions, mapStores } from 'pinia'
import { useInventoryStore } from '../stores/inventory'

export default {
    name: "LoginView",
    data() {
        return {
            loginData: {
                email: "",
                password: ""
            }
        }
    },
    computed: {

    },
    methods: {
        ...mapActions(useInventoryStore, ['login']),
        login1() {
            console.log(`login1`)
            this.login(this.loginData)
        }
    }
}
</script>

<template>
    <!--Form Login-->
    <div class="col-12 col-md-3 mx-auto mt-3">
        <div class="card my-2">
            <img src="../assets/groceries.jpg" class="card-img-top" />
            
            <div class="card-body d-flex flex-row">
                <form class="col-12">
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input v-model="loginData.email" type="email" class="form-control" required />
                    </div>
                    <div class="form-group">
                        <label for="caption">Password</label>
                        <input v-model="loginData.password" type="password" class="form-control" required />
                    </div>
                    <div class="text-center">
                        <button @click.prevent="login1" type="submit" class="btn btn-info">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

</template>

<style>
</style>
