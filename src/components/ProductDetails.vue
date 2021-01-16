<template>
  <mdb-container fluid class="px-5">
    <mdb-row>
      <mdb-col class="col-lg-4 col-sm-12 col-12 p-0 mb-5">
        <img
          :src="require(`../assets/${product.image}`)"
          class="img-fluid z-depth-1"
        />
      </mdb-col>
      <mdb-col class="col-lg-8 px-5">
        <div class="d-flex justify-content-between">
          <h4>{{ product.name }}</h4>
          <h4>CHF {{ product.price }}.-</h4>
        </div>
        <div class="d-flex">
          <p class="grey-text">{{ product.brand }} for {{ product.type }}</p>
        </div>
        <mdb-alert color="danger" v-if="showError">
            You must choose a shoe size and a quantity
          </mdb-alert>
        <div class="w-100 p-4 z-depth-1 d-inline-block">
          <div class="w-100 text-left">
            <span class="grey-text">Shoe sizes</span>
          </div>
          <div
            v-for="shoeSize in shoeSizes"
            :key="shoeSize"
            class="d-inline-flex"
          >
            <shoe-size
              :shoeSize="shoeSize"
              @click.native="selectShoeSize(shoeSize)"
            ></shoe-size>
          </div>
          <div class="w-100 text-left">
            <span v-if="selectedSize != ''"
              >Selected size : {{ this.selectedSize }}</span
            >
          </div>
        </div>
        <div class="py-3">
          <select
            class="browser-default custom-select"
            v-model="selectedQuantity"
          >
            <option value="" disabled>Quantity</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
          </select>
        </div>
        <div class="d-flex justify-content-end mb-5">
          <mdb-btn color="grey darken-1" @click="addToCart()"
            >Add to cart</mdb-btn
          >
        </div>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbBtn, mdbAlert } from "mdbvue";

import ShoeSize from "./ShoeSize";

export default {
  name: "ProductDetails",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbBtn,
    mdbAlert,
    ShoeSize,
  },
  props: {
    id: {
      type: String,
    },
  },
  mounted() {
    this.getProduct();
  },
  data() {
    return {
      product: {},
      shoeSizes: [
        "37",
        "37.5",
        "38",
        "38.5",
        "39",
        "39.5",
        "40",
        "40.5",
        "41",
        "41.5",
        "42",
        "42.5",
        "43",
        "43.5",
        "44",
        "44.5",
      ],
      selectedQuantity: "",
      selectedSize: "",
      showError: false,
    };
  },
  methods: {
    getProduct: function () {
      this.$http.get("http://localhost:3000/products/".concat(this.id)).then(
        (response) => {
          response.json().then((data) => {
            this.product = data;
          });
        },
        (response) => {
          console.log(response);
          window.location.href = "/error";
        }
      );
    },
    selectShoeSize: function (shoeSize) {
      this.selectedSize = shoeSize;
    },
    addToCart: function () {
      if (this.selectedSize != "" && this.selectedQuantity != '') {
        this.$http
          .post("http://localhost:3000/orders", {
            productId: this.product._id,
            shoeSize: this.selectedSize,
            quantity: this.selectedQuantity,
          })
          .then((response) => {
            console.log(response);
            window.location.href = "/cart";
          });
      } else {
        this.showError = true;
      }
    },
  },
};
</script>

<style>
</style>