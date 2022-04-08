<template>
  <v-card
    class="mx-auto"
    width="46%"
    outlined
    v-bind:style="{ margin: '22px' }"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">Cadastrar lance</div>

        <form @submit.prevent="submit">
          <v-text-field
            v-model="value"
            label="Valor"
            prefix="R$"
            required
          ></v-text-field>
          <v-text-field
            v-model="amount"
            label="Montante"
            required
          ></v-text-field>
          <v-select
            v-model="provider_name"
            :items="$store.getters.getProvidersNames"
            label="Fornecedor"
            data-vv-name="provider_name"
            required
          ></v-select>
          <v-select
            v-model="offer_info"
            :items="$store.getters.getOffersInfo"
            label="Oferta"
            data-vv-name="offer_info"
            required
          ></v-select>

          <v-btn class="mr-4" type="submit"> confirmar </v-btn>
          <v-btn @click="clear"> limpar </v-btn>
        </form>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

import store from "../store";
import { IEnterpriseNameAndId, IOfferInfoAndId } from "../helpers";
import busyness from "../services/busyness";

export default Vue.extend({
  name: "Dashboard",
  data: () => ({
    value: "",
    amount: "",
    offer_info: "",
    provider_name: "",
  }),

  methods: {
    submit() {
      const bidFormData = {
        id_provider: store.getters.getProvidersNamesAndId.find(
          (prov: IEnterpriseNameAndId) => prov.name === this.provider_name
        )["id"],
        id_offer: store.getters.getOffersInfoAndId.find(
          (offr: IOfferInfoAndId) => offr.info === this.offer_info
        )["id"],
        value: parseFloat(this.value),
        amount: parseFloat(this.amount),
      }

      console.log(bidFormData);
      
      busyness.createBid(bidFormData);
      this.clear();
    },
    clear() {
      this.value = "";
      this.amount = "";
      this.provider_name = "";
      this.offer_info = "";
    },
  },
});
</script>
