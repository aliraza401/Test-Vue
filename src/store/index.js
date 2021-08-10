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
      // const apiKey = "abf937b070a14a8f8d6351650ef82e7e";
      const url = `https://newsapi.org/v2/everything?q=tesla&from=2021-07-10&sortBy=publishedAt&apiKey=abf937b070a14a8f8d6351650ef82e7e`;

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
