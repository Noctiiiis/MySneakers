<template>
  <mdb-navbar light color="white" class="mb-5">
    <mdb-navbar-brand>
      <a href="/"><h1 id="brand">MySneakers</h1></a>
    </mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav right>
        <mdb-nav-item href="/products">Products</mdb-nav-item>
        <mdb-nav-item href="/products/men">Men</mdb-nav-item>
        <mdb-nav-item href="/products/women">Women</mdb-nav-item>
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
} from "mdbvue";

export default {
  name: "Navbar",
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,
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