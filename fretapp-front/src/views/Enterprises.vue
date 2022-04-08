<template>
  <div v-bind:style="{background: 'rgb(120, 117, 149)', paddingTop: '32px'}">
    <table-card
      :title="'Empresas'"
      :info="'Estas são as empresas fornecedoras.'"
      :headers="headers"
      :data="$store.state.providers"
    />

    <table-card
      :title="'Clientes'"
      :info="'Estas são as empresas compradoras.'"
      :headers="headers"
      :data="$store.state.customers"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TableCard from "../components/TableCard.vue";
import store from "../store"

export default Vue.extend({
  name: "Home",
  components: {
    TableCard,
  },
  created() {
    store.commit("loadProviders");
    store.commit("loadCustomers");
  },
  data: () => ({
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
