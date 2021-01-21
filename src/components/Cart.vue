<template>
  <mdb-container>
    <div v-if="this.noOrders">
      <h4>Your cart is empty</h4>
    </div>
    <div v-else>
      <mdb-row>
        <mdb-col class="mb-5">
          <h4 class="font-weight-bold">{{ this.$store.getters.userEmail }}</h4>
        </mdb-col>
      </mdb-row>
      <mdb-row>
        <mdb-col class="col-lg-8 col-12 mb-5 text-left">
          <h4>Cart</h4>
          <div v-for="order in orders" :key="order.id" class="mb-3">
            <cart-product :order="order"></cart-product>
          </div>
        </mdb-col>
        <mdb-col class="col-lg-4">
          <h4>Summary</h4>
          <div class="d-flex justify-content-between border-bottom border-dark pt-5">
            <h5 class="font-weight-bold">TOTAL</h5>
            <h5 class="font-weight-bold">CHF {{ this.total }}.-</h5>
          </div>
        </mdb-col>
      </mdb-row>
    </div>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol } from "mdbvue";

import CartProduct from "./CartProduct";
export default {
  name: "Cart",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    CartProduct,
  },
  data() {
    return {
      orders: [],
      total: "",
      noOrders: false,
    };
  },
  mounted() {
    this.checkAuth();
  },
  updated() {
    this.getOrders();
  },
  methods: {
    checkAuth: function () {
      if (this.$store.getters.token == "") {
        this.$router.push({ path: "/login" });
      } else {
        this.getOrders();
      }
    },
    getOrders: function () {
      this.$http
        .get(
          "http://localhost:3000/orders/".concat(this.$store.getters.userEmail)
        )
        .then(
          (response) => {
            response.json().then((data) => {
              this.orders = data;
              this.makeTotal();
              this.checkOrders();
            });
          },
          (response) => {
            console.log(response);
            this.$router.push({ path: "/error" });
          }
        );
    },
    makeTotal: function () {
      let total = 0;
      this.orders.forEach((order) => {
        total += parseFloat(order.product.price) * order.quantity;
      });
      this.total = total.toFixed(2);
    },
    checkOrders: function () {
      if (this.orders.length < 1) {
        this.noOrders = true;
      }
    },
  },
};
</script>

<style>
</style>