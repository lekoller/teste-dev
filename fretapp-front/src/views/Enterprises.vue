<template>
  <div>
    <table-card
      :title="'Empresas'"
      :info="'Estas são as empresas fornecedoras.'"
      :headers="headers"
      :data="providers"
    />

    <table-card
      :title="'Clientes'"
      :info="'Estas são as empresas compradoras.'"
      :headers="headers"
      :data="customers"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TableCard from "../components/TableCard.vue";
import enterprises from "../services/enterprises";
import {enterprisesRowMap} from "../helpers";

export default Vue.extend({
  name: "Home",
  components: {
    TableCard,
  },
  created() {
    enterprises.listProviders().then(res => {
      this.providers = res.data.map(enterprisesRowMap)
    })

    enterprises.listCustomers().then(res => {
      this.customers = res.data.map(enterprisesRowMap)
    })
  },
  data: () => ({
    providers: [],
    customers: [],
    headers: [
      {
        text: "Nome",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "Documento (CNPJ)", value: "doc" },
      { text: "Sobre", value: "about" },
      { text: "Ativo", value: "active" },
      { text: "Site", value: "site" },
    ],
  }),
});
</script>
