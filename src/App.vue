<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
body {
  background: black;
  margin: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
#grid {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(50px, 1fr));
  justify-content: center;
}
#grid .grid-item {
  min-width: 100%;
  min-height: 100%;
  background-color: white;
  cursor: pointer;
  position: relative;
}
#grid .grid-item:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  outline: 0px solid black;
  display: block;
}
#grid .grid-item:hover {
  opacity: 0.8;
}
</style>
