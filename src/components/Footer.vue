<template>
  <mdb-footer color="rgba-black-light" class="font-small pt-4 mt-4">
    <div class="footer-copyright text-center py-3">
      <div>
        &copy; 2021
        <span> MySneakers </span>
      </div>
    </div>
  </mdb-footer>
</template>

<script>
import { mdbFooter } from 'mdbvue';
export default {
    name: 'FooterPage',
    components: {
      mdbFooter,
    }
};
</script>

<style>
</style>