<template>
  <mdb-container fluid class="px-5">
    <header>
      <h3>Products ({{ this.quantity }})</h3>
    </header>
    <mdb-row center>
      <div v-for="product in products" :key="product._id" class="m-2">
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
  props: {
    filter: {
      type: String,
    },
  },
  mounted() {
    this.dataFilter();
  },
  updated() {
    this.dataFilter();
  },
  data() {
    return {
      products: [],
      quantity: 0,
    };
  },
  methods: {
    dataFilter: function () {
      if (this.filter) {
        switch (this.filter) {
          case "men":
            this.$http
              .get("http://localhost:3000/products/men")
              .then((response) => {
                response.json().then((data) => {
                  this.products = data;
                  this.quantity = data.length;
                });
              });
            break;
          case "women":
            this.$http
              .get("http://localhost:3000/products/women")
              .then((response) => {
                response.json().then((data) => {
                  this.products = data;
                  this.quantity = data.length;
                });
              });
            break;
        }
      } else {
        this.$http.get("http://localhost:3000/products").then((response) => {
          response.json().then((data) => {
            this.products = data;
            this.quantity = data.length;
          });
        });
      }
    },
  },
};
</script>

<style>
</style>