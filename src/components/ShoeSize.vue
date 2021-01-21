<template>
  <div
    class="shoe-size border border-dark rounded-lg d-flex align-items-center justify-content-center m-2"
  >
    {{ shoeSize }}
  </div>
</template>

<script>
export default {
  name: "ShoeSize",
  props: {
    shoeSize: String,
  },
};
</script>

<style>
.shoe-size {
  height: 50px;
  width: 60px;
  cursor: pointer;
}
</style>