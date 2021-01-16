<template>
  <div class="w-100 p-2 z-depth-1 d-flex">
    <img
      :src="require(`../assets/${order.product.image}`)"
      class="product-image img-fluid mr-2"
    />
    <div class="w-100 d-inline">
      <div class="d-flex justify-content-between">
        <router-link :to="`/products/${order.product._id}`" class="text-reset">
          {{ order.product.name }}
        </router-link>
        <span>CHF {{ order.product.price }}.-</span>
      </div>
      <div class="grey-text">
        {{ order.product.brand }}
        {{ order.product.type }}
      </div>
      <div class="d-flex mt-2">
        <div class="w-100 mr-2">
          <span class="grey-text">Shoe sizes</span>
          <select class="browser-default custom-select" v-model="selectedSize">
            <option v-for="shoeSize in shoeSizes" :key="shoeSize">
              {{ shoeSize }}
            </option>
          </select>
        </div>
        <div class="w-100">
          <span class="grey-text">Quantity</span>
          <select
            class="browser-default custom-select"
            v-model="selectedQuantity"
          >
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
      </div>
      <div class="d-flex justify-content-end mt-2">
        <a @click="deleteOrder(order._id)">Delete</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartProduct",
  props: {
    order: {},
  },
  mounted() {
    this.fillSelects();
  },
  data() {
    return {
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
      selectedSize: "",
      selectedQuantity: "",
    };
  },
  methods: {
    fillSelects: function () {
      this.selectedSize = this.order.shoeSize;
      this.selectedQuantity = this.order.quantity;
    },
    deleteOrder: function (orderId) {
      this.$http
        .delete("http://localhost:3000/orders/".concat(orderId))
        .then((response) => {
          console.log(response);
            location.reload();
        });
    },
  },
};
</script>

<style>
.product-image {
  height: 150px;
  width: 150px;
}
</style>