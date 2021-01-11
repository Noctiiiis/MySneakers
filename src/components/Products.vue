<template>
  <mdb-container fluid>
    <h1 class="mt-xl-3 text-left" left>Products ({{ this.quantity }})</h1>
    <mdb-row center>
      <div
        class="m-xl-3 m-lg-3 m-md-2 m-sm-2 m-2"
        v-for="product in products"
        :key="product.id"
      >
        <mdb-card>
          <mdb-view hover>
            <router-link to="`/products/${ product.id }`">
              <mdb-card-image :src="require(`../assets/${product.image}`)" />
              <mdb-mask flex-center waves overlay="grey-slight"></mdb-mask>
            </router-link>
          </mdb-view>
          <mdb-card-body>
            <mdb-card-title>{{ product.name }}</mdb-card-title>
            <mdb-card-text>CHF {{ product.price }}.-</mdb-card-text>
            <mdb-btn color="grey darken-1">BUY</mdb-btn>
          </mdb-card-body>
        </mdb-card>
      </div>
    </mdb-row>
  </mdb-container>
</template>

<script>
import {
  mdbContainer,
  mdbRow,
  mdbCard,
  mdbCardImage,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText,
  mdbBtn,
  mdbView,
  mdbMask,
} from "mdbvue";

export default {
  components: {
    mdbContainer,
    mdbRow,
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbBtn,
    mdbView,
    mdbMask,
  },
  mounted() {
    this.$http.get("http://localhost:3000/products").then((response) => {
      response.json().then((data) => {
        this.products = data;
        this.quantity = data.length
      });
    });
  },
  data() {
    return {
      products: [],
      quantity: 0
    };
  },
};
</script>

<style>
.card {
  height: 30rem;
  width: 23rem;
}
</style>