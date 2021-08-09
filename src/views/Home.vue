<template>
  <div>
    <div class="container">
      <NewsList title="This is News Website" class="mt-5 " />
    </div>
  </div>
</template>
  
<script>
// @ is an alias to /src
import NewsList from "./../components/NewsList.vue";

export default {
  name: "Home",
  components: {
    NewsList,
  },
};
</script>
