<template>
  <mdb-container fluid class="px-5">
    <header class="pt-3">
      <h3>Products ({{ this.quantity }})</h3>
    </header>
    <mdb-row center>
      <div v-for="product in products" :key="product.id" class="m-2">
        <product-card :product="product"></product-card>
      </div>
    </mdb-row>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow } from "mdbvue";

import ProductCard from "./ProductCard";

export default {
  name: "Products",
  components: {
    mdbContainer,
    mdbRow,
    ProductCard,
  },
  mounted() {
    ProductCard;
    this.$http.get("http://localhost:3000/products").then((response) => {
      response.json().then((data) => {
        this.products = data;
        this.quantity = data.length;
      });
    });
  },
  data() {
    return {
      products: [],
      quantity: 0,
    };
  },
};
</script>

<style>
</style>