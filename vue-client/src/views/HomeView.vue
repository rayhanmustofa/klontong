<script>
import { mapState, mapActions } from "pinia";
import card from "../components/card.vue";
import { useInventoryStore } from "../stores/inventory";

export default {
  name: "HomeView",
  data() {
    return {
      name: "",
    };
  },
  components: {
    card
  },
  computed: {
    ...mapState(useInventoryStore, [`inventories`])
  },
  methods: {
    ...mapActions(useInventoryStore, [`fetchData`]),
    fetchData1(page) {
      this.fetchData(page, this.name)
    }
  },
}
</script>

<template>
  <div class="container">
    <h1 class="pt-4 pb-2">Products</h1>

    <div class="p-1 my-2">
      <div class="flex">
        <input v-model="name" type="text" placeholder="Search Product" class=" px-4 py-2 mr-1 flex-grow" />
        <button @click="fetchData1()" class="px-4 py-2">
          Search
        </button>
      </div>
    </div>

    <div class="row justify-content-start">
      <card v-for="el in inventories.data" :data="el" />
    </div>

    <div class="w-full flex mr-4 mb-2 h-14">
      <ul class="flex pl-0 list-none rounded my-2 ml-auto">
        <button v-for="(num, i) in inventories.totalPage" @click="fetchData1((i + 1))"
          class="relative block py-2 px-3 leading-tight border border-gray-300 border-r-0 bg-white text-cyan-900 cursor-pointer hover:bg-gray-200">
          {{ i + 1 }}
        </button>
      </ul>
    </div>
  </div>
</template>
