import Vue from "vue";
import Vuex from "vuex";

import enterprises from "../services/enterprises";
import { enterprisesRowMap, IEnterprise, IOffer } from "../helpers";
import busyness from "../services/busyness";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    customers: [],
    providers: [],
    offers: [],
    bids: [],
  },
  getters: {
    getCustomersNames(state) {
      return state.customers.map((customer: IEnterprise) => customer.name);
    },
    getCustomersNamesAndId(state) {
      return state.customers.map((customer: IEnterprise) => ({
        id: customer.id,
        name: customer.name,
      }));
    },
    getProvidersNames(state) {
      return state.providers.map((provider: IEnterprise) => provider.name);
    },
    getProvidersNamesAndId(state) {
      return state.providers.map((provider: IEnterprise) => ({
        id: provider.id,
        name: provider.name,
      }));
    },
    getOffersInfo(state) {
      return state.offers.map(
        (offer: IOffer) =>
          `De ${offer.from} para ${offer.to}: ${offer.amount} ${
            offer.amount_type
          } por ${offer.initial_value.toFixed(2)} BRL`
      );
    },
    getOffersInfoAndId(state) {
      return state.offers.map((offer: IOffer) => ({
        id: offer.id,
        info: `De ${offer.from} para ${offer.to}: ${offer.amount} ${
          offer.amount_type
        } por ${offer.initial_value.toFixed(2)} BRL`,
      }));
    },
  },
  mutations: {
    loadProviders(state) {
      enterprises.listProviders().then((res) => {
        state.providers = res.data.map(enterprisesRowMap);
      });
    },
    loadCustomers(state) {
      enterprises.listCustomers().then((res) => {
        state.customers = res.data.map(enterprisesRowMap);
      });
    },
    loadOffers(state) {
      busyness.listOffers().then((res) => {
        state.offers = res.data;
      });
    },
    loadBids(state) {
      busyness.listBids().then((res) => {
        state.bids = res.data;
      });
    },
  },
  actions: {},
  modules: {},
});
