<template>
  <div>
    <h1 class="mb-4 text-center">{{ title }}</h1>

    <h4 class="mb-5 underline text-center">
      Enjoy our latest feed 
    </h4>

    <div class="row">
      <div class="col-md-6" v-for="item in getNewsList" :key="item.id">
        <div class="card mb-4 rounded shadow" @click="cardClick(item)">
          <div class="row g-0">
            <div class="col-12">
              <div
                class="back_img"
                v-bind:style="{
                  backgroundImage: 'url(' + item.urlToImage + ')',
                }"
              ></div>
            </div>
            <div class="col-12">
              <div class="card-body">
                <h5 class="card-title">{{ item.title }}</h5>
                <div class="card-text">
                  <p v-if="item.description.length > 50">
                    {{ item.description.slice(0, 50) }}...
                  </p>
                  <p v-else>{{ item.description }}</p>

                  <p><span class="fw-bold">Author: </span> {{ item.author }}</p>
                </div> 
                <p class="card-text">
                  <small class="text-muted">
                    publishedAt : {{ item.publishedAt }}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
// @ is an alias to /src

import { mapActions, mapGetters } from "vuex";
import NewsItem from "./NewsItem.vue";

export default {
  name: "NewsList",
  props: {
    title: String,
  },
  components: NewsItem,
  methods: {
    ...mapActions(["setNews", "setNewsCurrent"]),
    cardClick(item) {
      this.setNewsCurrent(item);

      this.$router.push("detail");
    },
  },
  computed: mapGetters(["getNewsList", "getNewsCurrent"]),
  created() {
    this.setNews(); 
  },
};
</script>



<style scoped>
.back_img {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 250px;
  background-color: darkgray;
  width: 100%;
}

.card {
  height: 450px;
  cursor: pointer;
  overflow: hidden !important;
  /* margin-bottom: 40px; */
}
</style>


author: "Мария Колобова"
content: ": 8 Ethereum $45 . $3,1 . \r\n. Ethereum 33% , , . , Ethereum 4,5 ., , - , «» .\r\n20%, Ethereum 30%\r\n. 4 8 : Dogecoin 42%, Uniswap 39%, Polkadot 24%, a Ripple 19%. 9 , Investing.com, 16:00 $45,8 .\r\n Eth… [+386 chars]"
description: "Насколько цифровые активы подорожают на этой волне роста и стоит ли опасаться резкого падения цен"
publishedAt: "2021-08-09T15:15:10Z"
source: {id: null, name: "Iz.ru"}
title: "Токен так: стоимость криптовалют достигла трехмесячных максимумов"
url: "https://iz.ru/1204742/mariia-kolobova/token-tak-stoimost-kriptovaliut-dostigla-trekhmesiachnykh-maksimumov"

 