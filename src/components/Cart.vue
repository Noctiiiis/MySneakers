<template>
  <mdb-container>
    <mdb-row>
      <mdb-col class="col-lg-8 col-12 mb-5 text-left">
        <h4>Cart</h4>
        <div v-for="order in orders" :key="order.id" class="mb-3">
          <cart-product :order="order"></cart-product>
        </div>
      </mdb-col>
      <mdb-col class="col-lg-4">
        <h4>Summary</h4>
        <div class="d-flex justify-content-between pt-3">
          <h5 class="font-weight-bold">TOTAL</h5>
          <h5 class="font-weight-bold">CHF {{ this.total }}.-</h5>
        </div>
        <div>
          <mdb-btn color="grey darken-1" class="w-100">Save cart</mdb-btn>
        </div>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbBtn } from "mdbvue";

import CartProduct from "./CartProduct";
export default {
  name: "Cart",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbBtn,
    CartProduct,
  },
  data() {
    return {
      orders: [],
      total: "",
    };
  },
  mounted() {
    this.getOrders();
  },
  methods: {
    getOrders: function () {
      this.$http.get("http://localhost:3000/orders").then(
        (response) => {
          response.json().then((data) => {
            this.orders = data;
            this.makeTotal();
          });
        },
        (response) => {
          console.log(response);
          window.location.href = "/error";
        }
      );
    },
    makeTotal: function () {
      let total = 0;
      this.orders.forEach((order) => {
        total += parseFloat(order.product.price);
      });
      this.total = total.toFixed(2);
    },
  },
};
</script>

<style>
</style>