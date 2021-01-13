<template>
  <mdb-card>
    <mdb-view hover class="d-flex align-items-center">
      <router-link to="`/products/${ product.id }`">
        <mdb-card-image :src="require(`../assets/${product.image}`)" />
        <mdb-mask flex-center waves overlay="grey-slight"></mdb-mask>
      </router-link>
    </mdb-view>
    <mdb-card-body>
      <mdb-card-text class="black-text">
        {{ product.name }} <br />
        {{ product.brand }}
        {{ product.type }}
      </mdb-card-text>
      <mdb-card-text>CHF {{ product.price }}.-</mdb-card-text>
      <mdb-btn color="grey darken-1">Add to cart</mdb-btn>
    </mdb-card-body>
  </mdb-card>
</template>

<script>
import {
  mdbCard,
  mdbCardImage,
  mdbCardBody,
  mdbCardText,
  mdbBtn,
  mdbView,
  mdbMask,
} from "mdbvue";

export default {
  name: "ProductCard",
  components: {
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardText,
    mdbBtn,
    mdbView,
    mdbMask,
  },
  props: {
    product: {},
  },
};
</script>

<style>
.card {
  height: 30rem;
  width: 20rem;
}
</style>