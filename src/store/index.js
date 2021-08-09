import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    newsList: [],
    news: {},
    test: "Store test",
  },
  mutations: {
    setNews(state, payload) {
      state.newsList = payload;
    },
    setNewsCurrent(state, payload) {
      state.news = payload;
    },
  },
  actions: {
    setNews(context) {
      const apiKey = "52d7b80182fe485590e3656604acb2e2";
      const url = `https://newsapi.org/v2/everything?q=tesla&from=2021-07-09&sortBy=publishedAt&apiKey=${apiKey}`;

      axios.get(url).then((result) => {
        const data = result.data.articles;
        context.commit("setNews", data);
      });
    },
    setNewsCurrent(context, data) {
      context.commit("setNewsCurrent", data);
    },
  },
  modules: {},
  getters: {
    getNewsList(state) {
      return state.newsList;
    },
    getNewsCurrent(state) {
      return state.news;
    },
  },
});
