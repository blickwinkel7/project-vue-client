<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  methods: {
    ...mapActions(useCounterStore, ["fetchMarkets"]),
    fetchMarketsChild(id) {
      this.fetchMarkets(id);
    },
  },
  computed: {
    ...mapState(useCounterStore, ["markets"]),
  },

  created() {
    this.fetchMarkets();
  },
};
</script>
<template>
  <table class="table table-dark table-hover">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Price</th>
        <th scope="col">24h High/Low</th>
        <th scope="col">24h %change</th>
        <th scope="col">Market Cap</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="coin in markets" :key="coin.id">
        <td>
          <div class="d-flex">
            <img :src="coin.image" style="height: 50px" />
            <div class="d-flex flex-column ml-3">
              <p class="mb-1">{{ coin.name }}</p>
              <p class="ticker">{{ coin.symbol.toUpperCase() }}</p>
            </div>
          </div>
        </td>
        <td>$ {{ coin.current_price.toLocaleString("en-EN") }}</td>
        <td>
          <p class="mb-1 highlow">
            {{ coin.high_24h.toLocaleString("en-EN") }} /
            {{ coin.low_24h.toLocaleString("en-EN") }}
          </p>
        </td>
        <td v-if="coin.price_change_percentage_24h > 0" class="text-success">
          {{ coin.price_change_percentage_24h.toFixed(2) }}%
        </td>
        <td
          v-else-if="coin.price_change_percentage_24h == 0"
          class="text-success"
        >
          {{ coin.price_change_percentage_24h.toFixed(2) }}%
        </td>
        <td v-else class="text-danger">
          {{ coin.price_change_percentage_24h.toFixed(2) }}%
        </td>
        <td>$ {{ coin.market_cap.toLocaleString("en-EN") }}</td>
      </tr>
    </tbody>
  </table>
  <nav class="mb-5">
    <ul class="pagination justify-content-center">
      <li class="page-item" v-for="n in 10" :key="n.id">
        <a class="page-link" href="#" @click.prevent="fetchMarketsChild(n)">{{
          n
        }}</a>
      </li>
    </ul>
  </nav>
</template>
