<script>
export default {
  name: "card",
  props: {
    data: Object
  },
  computed: {
    formattedPrice() {
      const price = this.data.price;
      return price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
    }
  },
  methods: {
    toDetail(productId) {
      this.$router.push(`/products/${productId}`)
    }
  }
}
</script>

<template>
  <div @click="toDetail(data.id)" class="col-12 col-md-4">
    <div class="card mb-3 hover:shadow-lg cursor-pointer">
      <img :src="data.image" class="card-img-top" />
      <div class="card-body card-body">
        <h5 class="card-title">{{ data.name }}</h5>
        <p class="card-text">Price: {{ formattedPrice }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hover\:shadow-lg:hover {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  cursor: pointer;
}
</style>
