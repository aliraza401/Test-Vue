<template>
  <div class="container mb-5">
    <h2 class="mb-4 mt-5 text-center">{{ getNewsCurrent.title }}</h2>

    <div class="text-center">
      <img
        :src="getNewsCurrent.urlToImage"
        class="img img-fluid mb-4 w-75 m-auto"
        alt=""
      />
    </div>

    <p class="text-center">
      <span class="">Author: </span> {{ getNewsCurrent.author }}
    </p>

    <p class="text-center">
      <small class="fw-bold">
        publishedAt : {{ getNewsCurrent.publishedAt }}
      </small>
    </p>

    <p class="text-center">
      {{ getNewsCurrent.description }}

      {{ getNewsCurrent.content }}
    </p>

    <p class="text-center">
      <a :href="getNewsCurrent.url" target="_blank"> View Orignal </a>
    </p>
  </div>
</template>
  
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Deatil",
  methods: {
    ...mapActions(["setNews", "setNewsCurrent"]),
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

 