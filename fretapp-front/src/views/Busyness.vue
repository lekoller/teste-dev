<template>
  <div>
    <table-card
      :title="'Ofertas'"
      :info="'Ofertas anunciadas.'"
      :headers="headerOffers"
      :data="offers"
    />

    <table-card
      :title="'Lances'"
      :info="'Serviços contratados.'"
      :headers="headerBids"
      :data="bids"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TableCard from "../components/TableCard.vue";
import busyness from "../services/busyness";
// import { enterprisesRowMap } from "../helpers";

export default Vue.extend({
  name: "Home",
  components: {
    TableCard,
  },
  created() {
    busyness.listOffers().then((res) => {
      this.offers = res.data;
    });

    busyness.listBids().then((res) => {
      this.bids = res.data;
    });
  },
  data: () => ({
    offers: [],
    bids: [],
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
