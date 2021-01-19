<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
    <footerPage></footerPage>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import FooterPage from "./components/Footer";

export default {
  name: "App",
  components: {
    Navbar,
    FooterPage,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
