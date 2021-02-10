<template>
  <div id="grid">
    <anime-grid
      v-for="id in grids.total"
      v-bind:id="id"
      v-bind:grids="grids"
      v-bind:key="id"
    ></anime-grid>
  </div>
</template>

<script>
import AnimeGrid from "@/components/AnimeGrid";
import anime from "animejs/lib/anime.es.js";

export default {
  name: "ColorGrid",
  components: {
    AnimeGrid
  },
  data() {
    return {
      title: "John",
      grids: {
        columns: 0,
        rows: 0,
        total: 1
      }
    };
  },
  methods: {
    getGridSize: function() {
      const columns = Math.floor(document.body.clientWidth / 50);
      const rows = Math.floor(document.body.clientHeight / 50);

      Object.assign(this.grids, { columns, rows, total: columns * rows });
      anime({
        targets: ".grid-item",
        backgroundColor: "#fff",
        duration: 0,
        easing: "linear"
      });
      console.log(
        `X:${this.grids.columns},Y:${this.grids.rows}, Total: ${this.grids.total}`
      );
    }
  },
  mounted: function() {
    this.getGridSize();
    window.addEventListener("resize", this.getGridSize);
  }
};
</script>

<style scoped>
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
