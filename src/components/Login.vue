<template>
  <mdb-container fluid>
    <mdb-row center>
      <mdb-col class="z-depth-1 col-lg-5 col-md-8 p-5 mx-5">
        <h3 class="mb-5">Login</h3>
        <mdb-input type="email" label="E-mail" />
        <mdb-input type="password" label="Password" />
        <div class="d-flex justify-content-between">
          <span>Don't have an account? <a href="/register">Click here</a></span>
          <mdb-btn color="grey darken-1">Login</mdb-btn>
        </div>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbInput, mdbBtn } from "mdbvue";

export default {
  name: "Login",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbInput,
    mdbBtn,
  },
};
</script>

<style>
</style>