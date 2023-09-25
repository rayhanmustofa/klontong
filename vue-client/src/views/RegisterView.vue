<script >
import { RouterLink } from 'vue-router'
import { mapState, mapActions, mapStores } from 'pinia'
import { useInventoryStore } from '../stores/inventory'

export default {
    name: "RegisterView",
    data() {
        return {
            registerData: {
                email: "",
                password: ""
            }
        }
    },
    computed: {

    },
    methods: {
        ...mapActions(useInventoryStore, ['register']),
        register1() {
            console.log(`register1`)
            this.register(this.registerData)
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
                        <input v-model="registerData.email" type="email" class="form-control" required />
                    </div>
                    <div class="form-group">
                        <label for="caption">Password</label>
                        <input v-model="registerData.password" type="password" class="form-control" required />
                    </div>
                    <div class="text-center">
                        <button @click.prevent="register1" type="submit" class="btn btn-info">Register</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

</template>

<style>
</style>
