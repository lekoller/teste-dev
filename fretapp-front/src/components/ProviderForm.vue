<template>
  <v-card
    class="mx-auto"
    width="46%"
    outlined
    v-bind:style="{ margin: '22px' }"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">Cadastrar empresa</div>

        <form @submit.prevent="submit">
          <v-text-field
            v-model="name"
            :counter="64"
            :error-messages="errors"
            label="Nome"
            required
          ></v-text-field>
          <v-text-field
            v-model="doc"
            :counter="18"
            :error-messages="errors"
            label="Documento (CNPJ)"
            required
          ></v-text-field>
          <v-text-field
            v-model="about"
            :counter="255"
            :error-messages="errors"
            label="Sobre"
            required
          ></v-text-field>
          <v-text-field
            v-model="site"
            :error-messages="errors"
            label="Site"
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
          <v-checkbox
            v-model="checkbox"
            :error-messages="errors"
            value="true"
            label="Ativa"
            type="active"
            required
          ></v-checkbox>

          <v-btn class="mr-4" type="submit" :disabled="invalid">
            confirmar
          </v-btn>
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
    // items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    active: true,
  }),

  methods: {
    submit() {
      enterprises.createProvider({
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
      // this.select = null;
      this.active = true;
    },
  },
});
</script>
