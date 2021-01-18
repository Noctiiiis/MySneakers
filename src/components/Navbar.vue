<template>
  <mdb-navbar light color="white" class="mb-5">
    <mdb-navbar-brand>
      <router-link :to="`/`">
        <h1 id="brand">MySneakers</h1>
      </router-link>
    </mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav right>
        <router-link :to="`/products`">
          <mdb-nav-item class="mx-2">Products</mdb-nav-item>
        </router-link>
        <router-link :to="`/products/men`">
          <mdb-nav-item class="mx-2">Men</mdb-nav-item>
        </router-link>
        <router-link :to="`/products/women`">
          <mdb-nav-item class="mx-2">Women</mdb-nav-item>
        </router-link>
        <router-link :to="`/login`" v-if="this.$store.getters.token == ''">
          <mdb-nav-item class="ml-lg-5 ml-sm-0"
            ><mdb-icon icon="user"
          /></mdb-nav-item>
        </router-link>
        <mdb-nav-item class="ml-lg-5 ml-sm-0" @click="pageReload()" v-else
          >Logout</mdb-nav-item
        >
        <router-link :to="`/cart`">
          <mdb-nav-item><mdb-icon icon="shopping-cart" /></mdb-nav-item>
        </router-link>
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
  methods: {
    pageReload: function () {
      
      setTimeout(function () {
        window.location.reload();
      }, 500);
      this.$router.push({ path: "/logout" });
    },
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