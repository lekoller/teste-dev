<template>
  <v-app id="inspire" v-bind:style="{background: 'rgb(120, 117, 149)'}">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content v-bind:style="{ height: '72px' }">
          <v-list-item-title class="text-h6"> Fretapp </v-list-item-title>
          <v-list-item-subtitle> Escolha a categoria </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" @click="setPath" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :collapse="!collapseOnScroll"
      :collapse-on-scroll="collapseOnScroll"
      app
      color="rgb(64, 62, 77)"
      dark
      scroll-target="#scrolling-techniques-6"
      height="72px"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>{{ path }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-checkbox
        v-model="collapseOnScroll"
        color="white"
        hide-details
      ></v-checkbox>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import router from "./router";

export default Vue.extend({
  name: "App",
  methods: {
    setPath() {
      this.path = router.currentRoute.name;
    }
  },
  
  data: () => ({
    drawer: null,
    collapseOnScroll: true,
    path: router.currentRoute.name,
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard", to: "/" },
      { title: "Empresas", icon: "mdi-domain", to: "/enterprises" },
      { title: "Negócios", icon: "mdi-point-of-sale", to: "/busyness" },
    ],
    right: null,
  }),
});
</script>
