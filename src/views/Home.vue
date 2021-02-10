<template>
  <div class="container bg-white rounded">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld :posts="posts" />
  </div>
</template>

<script>
// @ is an alias to /src
import api from "@/api.js";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  data() {
    return {
      posts: []
    };
  },
  created() {
    api.getPosts().then(posts => (this.posts = posts));
  }
};
</script>
