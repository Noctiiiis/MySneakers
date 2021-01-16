<template>
  <mdb-navbar light color="white" class="mb-5">
    <mdb-navbar-brand>
      <a href="/"><h1 id="brand">MySneakers</h1></a>
    </mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav right>
        <mdb-nav-item href="/products" class="mx-2">Products</mdb-nav-item>
        <mdb-nav-item href="/products/men" class="mx-2">Men</mdb-nav-item>
        <mdb-nav-item href="/products/women" class="mx-2">Women</mdb-nav-item>
        <mdb-nav-item href="/login" class="ml-lg-5 ml-sm-0"><mdb-icon icon="user" /></mdb-nav-item>
        <mdb-nav-item href="/cart"><mdb-icon icon="shopping-cart" /></mdb-nav-item>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>

<script>
import {
  mdbNavbar,
  mdbNavbarBrand,
  mdbNavbarToggler,
  mdbNavbarNav,
  mdbNavItem,
  mdbIcon,
} from "mdbvue";

export default {
  name: "Navbar",
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,
    mdbIcon,
  },
};
</script>

<style>
#brand {
  color: black;
  font-weight: bold;
  font-style: italic;
}
</style>