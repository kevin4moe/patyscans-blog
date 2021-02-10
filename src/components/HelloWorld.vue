<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      {{post.title}}
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    posts: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
