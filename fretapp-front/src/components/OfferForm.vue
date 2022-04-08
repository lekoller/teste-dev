<template>
  <v-card
    class="mx-auto"
    width="46%"
    outlined
    v-bind:style="{ margin: '22px' }"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">Cadastrar oferta</div>

        <form @submit.prevent="submit">
          <v-text-field
            v-model="from"
            :counter="64"
            label="De"
            required
          ></v-text-field>
          <v-text-field
            v-model="to"
            :counter="64"
            label="Para"
            required
          ></v-text-field>
          <v-text-field
            v-model="initial_value"
            label="Valor inicial"
            prefix="R$"
            required
          ></v-text-field>
          <v-text-field
            v-model="amount"
            label="Montante"
            required
          ></v-text-field>
          <v-text-field
            v-model="amount_type"
            label="Unidade"
            required
          ></v-text-field>
          <v-select
            v-model="customer_name"
            :items="$store.getters.getCustomersNames"
            label="Cliente"
            data-vv-name="customer_name"
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

import busyness from "../services/busyness";
import store from "../store";
import { IEnterpriseNameAndId } from "../helpers";

export default Vue.extend({
  name: "OfferForm",

  data: () => ({
    from: "",
    to: "",
    initial_value: "",
    amount: "",
    amount_type: "",
    customer_name: "",
  }),

  methods: {
    submit() {
      const offerFormData = {
        from: this.from,
        to: this.to,
        initial_value: parseFloat(this.initial_value),
        amount: parseFloat(this.amount),
        amount_type: this.amount_type,
        id_customer: store.getters.getCustomersNamesAndId.find(
          (cus: IEnterpriseNameAndId) => cus.name === this.customer_name
        )['id'],
      }

      busyness.createOffer(offerFormData);
      this.clear();
    },
    clear() {
      this.from = "";
      this.to = "";
      this.initial_value = "";
      this.amount = "";
      this.amount_type = "";
      this.customer_name = "";
    },
  },
});
</script>
