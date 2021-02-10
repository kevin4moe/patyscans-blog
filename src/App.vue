<template>
  <div id="app" class=" bg-purple-300">
    <div id="nav" class="container mb-4 bg-white rounded-b flex flex-row">
      <img alt="Vue logo" src="@/assets/logo.png" class="ml-1 w-1/12 " />
      <router-link to="/" class="m-2">Home</router-link>
      <router-link to="/about" class="m-2">About</router-link>
    </div>
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
export default {
  components: {}
};
</script>

<style></style>
