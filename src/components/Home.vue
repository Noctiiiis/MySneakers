<template>
  <mdb-container>
    <mdb-alert color="success" v-if="logout">
      You have been successfully disconnected
    </mdb-alert>
    <mdb-row center>
      <mdb-col class="col-6">
        <h3>About us</h3>
        <p>
          MySneakers is a branded footwear sales company located in Sainte-Croix
          (VD), Switzerland.
        </p>
        <p>
          Our company appears as the leader of the Swiss market. We are
          particularly well known for our high quality service as well as our
          collection products.
        </p>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbAlert } from "mdbvue";
export default {
  name: "Home",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
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