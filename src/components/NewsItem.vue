<template>
  <div class="mini-card">
    <div class="row">
        <div class="col-8">
            <p class="fw-bold">
                {{ title }}
            </p>
            


        </div>
        <div class="col-4">
            <!-- <div class="back_img" v-bind:style="{ backgroundImage: 'url(' + item.urlToImage + ')' }" ></div> -->
        </div>
    </div>

  </div>
</template>
  
<script>
// @ is an alias to /src



export default {
  name: "NewsItem",
  props: ["title", "author", "content"],
};
</script>


<style scoped>
    .mini-card{

    }

</style>


author: "Мария Колобова"
content: ": 8 Ethereum $45 . $3,1 . \r\n. Ethereum 33% , , . , Ethereum 4,5 ., , - , «» .\r\n20%, Ethereum 30%\r\n. 4 8 : Dogecoin 42%, Uniswap 39%, Polkadot 24%, a Ripple 19%. 9 , Investing.com, 16:00 $45,8 .\r\n Eth… [+386 chars]"
description: "Насколько цифровые активы подорожают на этой волне роста и стоит ли опасаться резкого падения цен"
publishedAt: "2021-08-09T15:15:10Z"
source: {id: null, name: "Iz.ru"}
title: "Токен так: стоимость криптовалют достигла трехмесячных максимумов"
url: "https://iz.ru/1204742/mariia-kolobova/token-tak-stoimost-kriptovaliut-dostigla-trekhmesiachnykh-maksimumov"

 