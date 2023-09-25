<script >
import axios from 'axios';
import { RouterLink } from 'vue-router'
import { mapState, mapActions, mapStores } from 'pinia'
import { useInventoryStore } from '../stores/inventory'

export default {
    name: "AddProductView",
    data() {
        return {
            productData: {
                CategoryId: "",
                sku: "",
                name: "",
                description: "",
                weight: "",
                width: "",
                length: "",
                height: "",
                image: "",
                price: ""
            },
            categories: [], 
        }
    },
    computed: {

    },
    methods: {
        ...mapActions(useInventoryStore, ['addProduct']),
        addProduct1() {
            console.log(`addProduct1`)
            this.addProduct(this.productData)
        },
        fetchCategories() {
            axios.get('http://localhost:3000/categories')
                .then(response => {
                    this.categories = response.data.data; 
                    console.log(response.data.data)
                })
                .catch(error => {
                    console.error('Error fetching categories:', error);
                });
        },

    },
    mounted() {
        this.fetchCategories();
    },

}
</script>

<template>
    <!--Form Login-->
    <div class="col-12 col-md-3 mx-auto mt-3">
        <div class="card my-2">
            <h5 class="pt-4 mx-auto">Add Product</h5>

            <div class="card-body d-flex flex-row">

                <form class="col-12">
                    <div class="form-group">
                        <label for="CategoryId">Category</label>
                        <select v-model="productData.CategoryId" class="form-control" required>
                            <option value="" disabled>Select a category</option>
                            <option v-for="category in categories" :value="category.id" :key="category.id">{{ category.name }}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="sku">SKU</label>
                        <input v-model="productData.sku" type="text" class="form-control" required />
                    </div>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input v-model="productData.name" type="text" class="form-control" required />
                    </div>
                    <div class="form-group">
                        <label for="description">Description</label>
                        <textarea v-model="productData.description" class="form-control" required></textarea>
                    </div>
                    <div class="form-group">
                        <label for="weight">Weight (grams)</label>
                        <input v-model="productData.weight" type="number" class="form-control" required />
                    </div>
                    <div class="form-group">
                        <label for="width">Width (cm)</label>
                        <input v-model="productData.width" type="number" class="form-control" required />
                    </div>
                    <div class="form-group">
                        <label for="length">Length (cm)</label>
                        <input v-model="productData.length" type="number" class="form-control" required />
                    </div>
                    <div class="form-group">
                        <label for="height">Height (cm)</label>
                        <input v-model="productData.height" type="number" class="form-control" required />
                    </div>
                    <div class="form-group">
                        <label for="image">Image URL</label>
                        <input v-model="productData.image" type="text" class="form-control" required />
                    </div>
                    <div class="form-group">
                        <label for="price">Price</label>
                        <input v-model="productData.price" type="number" class="form-control" required />
                    </div>
                    <div class="text-center">
                        <button @click.prevent="addProduct1" type="submit" class="btn btn-info">Add this product</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style></style>
