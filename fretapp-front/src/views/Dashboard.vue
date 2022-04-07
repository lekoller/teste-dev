<template>
  <v-container class="dashboard">
    <provider-form />
    <customer-form />
    <offer-form />
    <bid-form />
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import ProviderForm from "../components/ProviderForm.vue";
import CustomerForm from "../components/CustomerForm.vue";
import OfferForm from "../components/OfferForm.vue";
import BidForm from "../components/BidForm.vue";

export default Vue.extend({
  name: "Dashboard",
  components: {
    ProviderForm,
    CustomerForm,
    OfferForm,
    BidForm,
  },
});
</script>

<style scoped>
.dashboard {
  margin: 0 auto;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: flex-start;
  height: 160vh;
  background-color: rgb(120, 117, 149);
}
</style>
