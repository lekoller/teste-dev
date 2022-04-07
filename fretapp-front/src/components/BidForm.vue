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
            :error-messages="errors"
            label="Valor"
            type="number"
            required
          ></v-text-field>
          <v-text-field
            v-model="amount"
            :error-messages="errors"
            label="Montante"
            type="number"
            required
          ></v-text-field>
          <v-text-field
            v-model="id_provider"
            :error-messages="errors"
            label="Fornecedor"
            type="number"
            required
          ></v-text-field>
          <v-text-field
            v-model="id_offer"
            :error-messages="errors"
            label="Oferta"
            type="number"
            required
          ></v-text-field>
          <!-- <v-select
            v-model="select"
            :items="items"
            :error-messages="errors"
            label="Select"
            data-vv-name="select"
            required
          ></v-select> -->

          <v-btn class="mr-4" type="submit" :disabled="invalid"> confirmar </v-btn>
          <v-btn @click="clear"> limpar </v-btn>
        </form>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import busyness from "../services/busyness";

export default Vue.extend({
  name: "Dashboard",
  data: () => ({
    id_provider: NaN,
    id_offer: NaN,
    value: NaN,
    amount: NaN,
    // items: ["Item 1", "Item 2", "Item 3", "Item 4"],
  }),

  methods: {
    submit() {
      busyness.createBid({
        id_provider: this.id_provider,
        id_offer: this.id_offer,
        value: this.value,
        amount: this.amount,
      });
      
      this.clear();
    },
    clear() {
      this.id_provider = NaN;
      this.id_offer = NaN;
      this.value = NaN;
      this.amount = NaN;
      // this.select = null;
    },
  },
});
</script>
