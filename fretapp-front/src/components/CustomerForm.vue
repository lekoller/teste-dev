<template>
  <v-card
    class="mx-auto"
    width="46%"
    outlined
    v-bind:style="{ margin: '22px' }"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">Cadastrar cliente</div>

        <form @submit.prevent="submit">
          <v-text-field
            v-model="name"
            :counter="64"
            label="Nome"
            required
          ></v-text-field>
          <v-text-field
            v-model="doc"
            :counter="18"
            label="Documento (CNPJ)"
            required
          ></v-text-field>
          <v-text-field
            v-model="about"
            :counter="255"
            label="Sobre"
            required
          ></v-text-field>
          <v-text-field
            v-model="site"
            label="Site"
            required
          ></v-text-field>
          <v-checkbox
            v-model="active"
            value="true"
            label="Ativa"
            type="boolean"
            required
          ></v-checkbox>

          <v-btn class="mr-4" type="submit"> confirmar </v-btn>
          <v-btn @click="clear"> limpar </v-btn>
        </form>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import enterprises from "../services/enterprises";

export default Vue.extend({
  name: "Dashboard",
  data: () => ({
    name: "",
    doc: "",
    site: "",
    about: "",
    select: null,
    active: true,
  }),
  methods: {
    submit() {
      enterprises.createCustomer({
        name: this.name,
        doc: this.doc,
        site: this.site,
        about: this.about,
        active: this.active,
      });
      
      this.clear();
    },
    clear() {
      this.name = "";
      this.doc = "";
      this.site = "";
      this.about = "";
      this.active = true;
    },
  },
});
</script>
