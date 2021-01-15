<template>
  <mdb-container fluid>
    <mdb-row center>
      <mdb-col class="z-depth-1 col-lg-5 col-md-8 p-5 mx-5">
        <h3 class="mb-5">Register</h3>
        <mdb-alert color="danger" v-if="showError">
          {{ this.errorMessage }}
        </mdb-alert>
        <mdb-input type="email" label="E-mail" v-model="email" />
        <mdb-input type="password" label="Password" v-model="password" />
        <mdb-input
          type="password"
          label="Verify password"
          v-model="passwordVerification"
        />
        <mdb-btn color="grey darken-1" @click="register()">Register</mdb-btn>
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
  name: "Register",
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
      passwordVerification: "",
      showError: false,
      errorMessage: "",
    };
  },
  methods: {
    register() {
      if (
        this.email != "" &&
        this.password != "" &&
        this.passwordVerification != ""
      ) {
        if (this.password == this.passwordVerification) {
          this.$http
            .post("http://localhost:3000/user/register", {
              email: this.email,
              password: this.password,
            })
            .then(
              (response) => {
                console.log(response);
                window.location.href = "/login";
              },
              (response) => {
                if (response.status == "500") {
                  this.errorMessage = "Wrong credentials";
                } else {
                  this.errorMessage = "This user already exists";
                }
                this.showError = true;
              }
            );
        } else {
          this.errorMessage = "Passwords doesn't match";
          this.showError = true;
        }
      }
    },
  },
};
</script>

<style>
</style>