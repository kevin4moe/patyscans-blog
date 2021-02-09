<template>
  <div :id="id" class="grid-item" v-on:click="alClick(id)"></div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
export default {
  name: "AnimeGrid",
  props: {
    id: Number,
    grids: Object
  },
  data() {
    return {
      title: this.grids
    };
  },
  methods: {
    alClick(i) {
      const { columns, rows } = this.title;
      const el = i - 1;
      anime({
        targets: ".grid-item",
        backgroundColor:
          "#" +
          Math.random()
            .toString(16)
            .slice(-6),
        delay: anime.stagger(40, { grid: [columns, rows], from: el })
      });
    }
  }
};
</script>
