<template>
  <v-card
    class="mx-auto"
    max-width="94%"
    outlined
    v-bind:style="{ margin: '0 0 30px 0' }"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">{{ this.title }}</div>

        <v-data-table
          :headers="this.headers"
          :items="this.data"
          :items-per-page="5"
          class="elevation-1"
        ></v-data-table>

        <v-list-item-subtitle>{{ this.info }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-btn outlined rounded text> Incluir </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HelloWorld",
  props: {
    title: String,
    info: String,
    headers: Array,
    data: Array,
  },

  // data: () => ({

  // }),
});
</script>
