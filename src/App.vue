<template>
  <div id="app" class="bg-purple-300">
    <nav-bar></nav-bar>

    <router-view />
    <footer class="w-full mt-4">
      <div
        class="grid grid-cols-3 gap-1 container rounded-t p-4 bg-black bg-opacity-30"
      >
        <div><h4 class="font-semibold text-gray-200">Network</h4></div>
        <div><h4 class="font-semibold text-gray-200">Articulos</h4></div>
        <div><h4 class="font-semibold text-gray-200">Destacados</h4></div>
        <div><a class="font-medium text-blue-300">pageexample.com</a></div>
        <div><a class="font-medium text-blue-300">Example Art</a></div>
        <div><a class="font-medium text-blue-300">GreatName</a></div>
        <div><a class="font-medium text-blue-300">pageexample.com</a></div>
        <div><a class="font-medium text-blue-300">Example Art</a></div>
        <div><a class="font-medium text-blue-300">GreatName</a></div>
      </div>
    </footer>
  </div>
</template>

<script>
import NavBar from "@/components/Nav";

export default {
  components: {
    NavBar
  },
  data() {
    return {};
  },
  methods: {},
  created() {}
};
</script>

<style>
li a + ul {
  display: none;
}
li:hover > a + ul {
  display: block;
  background-color: white;
  position: absolute;
}
li ul > li > ul {
  position: absolute;
  top: -1px;
  left: 100%;
}
.active li ul li {
  border-top: dashed 1px #ccc;
  position: relative !important;
}
.active li:hover > a,
.active li ul li:hover > a {
  display: block;
  background: #60617d;
  color: white;
}
.active li a {
  display: inline-block;
  padding: 0 0.5rem;
  font-size: 0.875rem;
  line-height: 2rem;
}
#nav {
  border-top: dashed 1px rgba(128, 128, 128, 0.5);
}
</style>
