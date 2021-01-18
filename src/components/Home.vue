<template>
  <div>
    <h1>Home</h1>
    <mdb-alert color="success" v-if="logout">
      You have been successfully disconnected
    </mdb-alert>
  </div>
</template>

<script>
import { mdbAlert } from "mdbvue";
export default {
  name: "Home",
  components: {
    mdbAlert,
  },
  props: {
    logout: {
      type: Boolean,
    },
  },
};
</script>

<style>
</style>