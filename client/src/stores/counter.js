import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    markets: [],
    baseUrl: "http://localhost:3000/",
  }),
  getters: {},
  actions: {
    async login(payLoad) {
      try {
        const response = await axios({
          method: "POST",
          url: this.baseUrl + "login",
          data: {
            userLogin: payLoad.userLogin,
            password: payLoad.password,
          },
        });
        localStorage.setItem("access_token", response.access_token);
        router.push('/')
      } catch (err) {
        console.log(err);
      }
    },
    async fetchMarkets(id) {
      try {
        const response = await axios({
          method: "GET",
          url: this.baseUrl + `coins?page=${id}`,
        });
        this.markets = response.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
