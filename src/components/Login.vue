<template>
  <mdb-container fluid>
    <mdb-row center>
      <mdb-col class="z-depth-1 col-lg-5 col-md-8 p-5 mx-5">
        <h3 class="mb-5">Login</h3>
        <mdb-alert color="danger" v-if="showError">
          {{ this.errorMessage }}
        </mdb-alert>
        <mdb-input type="email" label="E-mail" v-model="email" />
        <mdb-input type="password" label="Password" v-model="password" />
        <div class="d-flex justify-content-between">
          <span>Don't have an account? <a href="/register">Click here</a></span>
          <mdb-btn color="grey darken-1" @click="login()">Login</mdb-btn>
        </div>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbInput,
  mdbBtn,
  mdbAlert,
} from "mdbvue";

export default {
  name: "Login",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbInput,
    mdbBtn,
    mdbAlert,
  },
  data() {
    return {
      email: "",
      password: "",
      showError: false,
      errorMessage: "",
    };
  },
  methods: {
    login() {
      if (this.email != "" && this.password != "") {
        this.$http
          .post("http://localhost:3000/user/login", {
            email: this.email,
            password: this.password,
          })
          .then(
            (response) => {
              console.log(response);
              window.location.href = "/";
            },
            (response) => {
              if (response.status == "401") {
                this.errorMessage = "Wrong credentials";
              } else {
                this.errorMessage = "Authentification failed";
              }
              this.showError = true;
            }
          );
      }
    },
  },
};
</script>

<style>
</style>