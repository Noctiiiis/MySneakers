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
          <select
            name="shoeSize"
            id="shoeSize"
            class="browser-default custom-select"
          >
            <option v-for="shoeSize in shoeSizes" :key="shoeSize">
              {{ shoeSize }}
            </option>
          </select>
        </div>
        <div class="w-100">
          <span class="grey-text">Quantity</span>
          <select class="browser-default custom-select">
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        </div>
      </div>
      <div class="d-flex justify-content-end mt-2"><a>Delete</a></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartProduct",
  props: {
    order: {},
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
    };
  },
};
</script>

<style>
.product-image {
  height: 150px;
  width: 150px;
}
</style>