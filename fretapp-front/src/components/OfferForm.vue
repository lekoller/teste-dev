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
            :error-messages="errors"
            label="De"
            required
          ></v-text-field>
          <v-text-field
            v-model="to"
            :counter="64"
            :error-messages="errors"
            label="Para"
            required
          ></v-text-field>
          <v-text-field
            v-model="initial_value"
            :error-messages="errors"
            label="Valor inicial"
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
            v-model="amount_type"
            :error-messages="errors"
            label="Unidade"
            required
          ></v-text-field>
          <v-text-field
            v-model="id_customer"
            :error-messages="errors"
            label="Cliente"
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
    from: "",
    to: "",
    id_customer: NaN,
    initial_value: NaN,
    amount: NaN,
    amount_type: "",
    // items: ["Item 1", "Item 2", "Item 3", "Item 4"],
  }),

  methods: {
    submit() {
      busyness.createOffer({
        from: this.from,
        to: this.to,
        id_customer: this.id_customer,
        initial_value: this.initial_value,
        amount: this.amount,
        amount_type: this.amount_type,
      });
      
      this.clear();
    },
    clear() {
      this.from = "";
      this.to = "";
      this.id_customer = NaN;
      this.initial_value = NaN;
      this.amount = NaN;
      this.amount_type = "";
      // this.select = null;
    },
  },
});
</script>
