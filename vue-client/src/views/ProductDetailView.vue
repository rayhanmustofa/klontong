<script>
import { BASE_URL } from "../base_url";
import axios from 'axios';

export default {
  name: "ProductDetailView",
  data() {
    return {
      productDetail: {}
    }
  },
  methods: {
    async fetchDetail() {
      try {
        let id = this.$route.params.id
        let { data } = await axios({
          method: `GET`,
          url: BASE_URL + `products/${id}`
        })
        this.productDetail = data.data
      } catch (err) {
        console.log(err)
      }
    }
  },
  created() {
    this.fetchDetail()
  },
  computed: {
    formattedPrice() {
      if (this.productDetail.price) {
      return this.productDetail.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
      }
      return '';
    }
  }
}
</script>

<template>
    <div style="border-radius: 20px;" class="container mt-4 border">

      <div class="row">

        <div class="col-md-6 p-4">
            <img :src="productDetail.image" style="border-radius: 20px;" class="img-fluid" alt="Product Image" />
        </div>

        <div class="col-md-6 p-5">
            <div class="mb-4">
              <h2>{{ productDetail.name }}</h2>
              <p><strong>SKU:</strong> {{ productDetail.sku }}</p>
              <p><strong>Description:</strong> {{ productDetail.description }}</p>
            </div>
            <div>
              <p><strong>Price:</strong> {{ formattedPrice }}</p>
              <p><strong>Category:</strong> {{ productDetail.Category.name }}</p>
              <p><strong>Dimensions:</strong></p>
              <ul>
                <li><strong>Weight:</strong> {{ productDetail.weight }} grams</li>
                <li><strong>Width:</strong> {{ productDetail.width }} cm</li>
                <li><strong>Length:</strong> {{ productDetail.length }} cm</li>
                <li><strong>Height:</strong> {{ productDetail.height }} cm</li>
              </ul>
              <p><strong>Created At:</strong> {{ productDetail.createdAt }}</p>
              <p><strong>Updated At:</strong> {{ productDetail.updatedAt }}</p>
            </div>
        </div>

      </div>

      <div style="border-radius: 15px;" class="mt-2 pl-3 pb-3">
        <router-link to="/" class="btn btn-primary bg-info">Back</router-link>
      </div>

    </div>
</template>

<style scoped>
</style>
