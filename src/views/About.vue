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
