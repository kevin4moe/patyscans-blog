<template>
  <div class="p-2 m-2 col-span-3">
    <div
      v-for="post in posts"
      :key="post.id"
      class="mb-4 grid grid-cols-3 gap-2"
    >
      <a
        :href="post.url"
        target="_blank"
        rel="noopener noreferrer"
        class="col-span-3 md:col-span-1 mx-auto"
      >
        <img
          :src="post.content | onlyImage"
          alt=""
          class="float-left rounded"
        />
      </a>
      <div class="bg-white rounded p-2 col-span-3 md:col-span-1 flex flex-col">
        <h1 class="text-base md:text-lg font-bold text-purple-700">
          <a :href="post.url" target="_blank" rel="noopener noreferrer">{{
            post.title
          }}</a
          >end
        </h1>
        <p class="flex-auto">{{ post.content | insidePTag }}</p>
        <p>
          Publicado por
          <a
            :href="post.author.url"
            class="text-purple-700 transition duration-300 hover:text-indigo-300"
            >{{ post.author.displayName }}</a
          ><br />
        </p>
        <p class="label">
          <a
            v-for="label in post.labels"
            :key="label"
            class="text-purple-700 transition duration-100 hover:text-indigo-300"
            :href="`https://www.patyscans.com/search/label/${label}`"
            >{{ label }}</a
          >
        </p>
      </div>
      <div
        class="bg-gradient-to-b from-green-400 to-purple-500 rounded p-2 col-span-1 hidden md:block"
      >
        <span class="text-9xl flex h-full justify-center items-center">{{
          post.replies.totalItems
        }}</span>
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
    onlyImage: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.match(/https.+?\.(png|jpg)/)[0];
    },
    insidePTag: function(value) {
      if (!value) return "";
      return value.match(/<p>(.*?)<\/p>/)[0].replace(/(<[^>]*>?|&nbsp;)/g, "");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.label a:not(:last-child):after {
  color: navy;
  content: ", ";
}
</style>
