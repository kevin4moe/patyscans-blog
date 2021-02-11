<template>
  <div class="p-2 m-2 col-span-3 md:col-span-2">
    <div v-for="post in posts" :key="post.id" class="bg-white rounded mb-4 grid grid-cols-3 gap-2">
      <a :href="post.url" target="_blank" rel="noopener noreferrer">
        <img :src="post.content | onlyImage" alt="" class="float-left rounded-l">
      </a>
      
      <div class="p-2 col-span-2">
        <h1 class="text-base md:text-lg"><a :href="post.url" target="_blank" rel="noopener noreferrer">{{post.title}}</a>end
        
        </h1>
        {{post.content | insidePTag}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    posts: Array
  },
  filters: {
    onlyImage: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.match(/https.+?\.(png|jpg)/)[0]
    },
    insidePTag: function (value) {
      if (!value) return ''
      return value.match(/<p>(.*?)<\/p>/)[0].replace(/(<[^>]*>?|&nbsp;)/g, '');
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
