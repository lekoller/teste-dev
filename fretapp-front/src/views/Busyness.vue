<template>
  <div v-bind:style="{background: 'rgb(120, 117, 149)', paddingTop: '32px'}">
    <table-card
      :title="'Ofertas'"
      :info="'Ofertas anunciadas.'"
      :headers="headerOffers"
      :data="$store.state.offers"
    />

    <table-card
      :title="'Lances'"
      :info="'Serviços contratados.'"
      :headers="headerBids"
      :data="$store.state.bids"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TableCard from "../components/TableCard.vue";
import store from "../store";

export default Vue.extend({
  name: "Home",
  components: {
    TableCard,
  },
  created() {
    store.commit("loadOffers")
    store.commit("loadBids")
  },
  data: () => ({
    headerOffers: [
      {
        text: "Oferta",
        align: "start",
        sortable: false,
        value: "id",
      },
      { text: "Cliente", value: "id_customer" },
      { text: "De", value: "from" },
      { text: "Para", value: "to" },
      { text: "Valor inicial", value: "initial_value" },
      { text: "Montante", value: "amount" },
      { text: "Unidade", value: "amount_type" },
    ],
    headerBids: [
      {
        text: "Provedor",
        align: "start",
        sortable: false,
        value: "id_provider",
      },
      { text: "Oferta", value: "id_offer" },
      { text: "Valor", value: "value" },
      { text: "Montante", value: "amount" },
    ],
  }),
});
</script>
