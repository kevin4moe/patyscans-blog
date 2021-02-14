<template>
  <div v-on:click="changeHeader" class="container  mx-auto mb-4">
    <img :src="pajaro" alt="" class="w-full" />
    <div id="nav" class="bg-white rounded-b flex flex-col">
      <button class="md:hidden" v-on:click="isNav = !isNav">x</button>
      <ul
        class="active md:flex flex-col md:flex-row justify-center w-full overflow-visible"
        v-bind:class="{ hidden: isNav }"
      >
        <li class="flex-auto text-center">
          <router-link to="/" class="font-sans transition duration-100"
            ><img
              alt="Vue logo"
              src="@/assets/logo.png"
              class="inline-block w-6"
          /></router-link>
        </li>
        <li class="flex-auto text-center">
          <router-link to="#" class="font-sans transition duration-100"
            >Guías ▶</router-link
          >
          <ul>
            <li><a href="#">Edición básica</a></li>
            <li><a href="#">Fuentes</a></li>
            <li><a href="#">Cómo escribir bien</a></li>
            <li><a href="#">Consideraciones de traducción</a></li>
          </ul>
        </li>
        <li class="flex-auto text-center">
          <a href="#" class="font-sans transition duration-100"
            >Reclutamiento</a
          >
        </li>
        <li class="flex-auto text-center">
          <a href="#" class="font-sans transition duration-100">Lector</a>
        </li>
        <li class="flex-auto text-center">
          <a href="#" class="font-sans transition duration-100">Pedidos</a>
        </li>
        <li class="flex-auto text-center">
          <a href="#" class="font-sans transition duration-100">Proyectos ▶</a>
          <ul>
            <li>
              <a href="#">Touhou ▶</a>
              <ul>
                <li><a href="#">Activos</a></li>
                <li><a href="#">Finalizados</a></li>
              </ul>
            </li>
            <li>
              <a href="#">No Touhou ▶</a>
              <ul>
                <li><a href="#">Activos</a></li>
                <li><a href="#">Finalizados</a></li>
                <li><a href="#">Pausados</a></li>
                <li><a href="#">Abandonados</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="flex-auto text-center">
          <a href="#" class="font-sans transition duration-100"
            >Páginas recomendadas</a
          >
        </li>
        <li class="flex-auto text-center">
          <a href="#" class="font-sans transition duration-100"
            >Info del Scan ▶</a
          >
          <ul>
            <li><a href="#">Sobre nosotros</a></li>
            <li><a href="#">Sobre Touhou</a></li>
            <li><a href="#">Staff</a></li>
            <li><a href="#">Discord</a></li>
          </ul>
        </li>
        <li class="flex-auto text-center">
          <a href="#" class="font-sans transition duration-100">+18</a>
        </li>
        <li class="flex-auto text-center">
          <a href="#" class="font-sans transition duration-100">♥</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      parvada: [
        "https://1.bp.blogspot.com/-uZ-mBSDDy-4/VDaK7gqJqdI/AAAAAAAAAr4/BmK_wY8-ppsl2AyMudTJ9emF9YtvUE1yQCPcBGAYYCw/s1600/portada.png",
        "https://1.bp.blogspot.com/-MOHUHg7lLRw/W7VYDhemUNI/AAAAAAAADYk/DT9dTPLRSBM5NHb8cGXzN0Ht4yO7ccWCACPcBGAYYCw/s1600/banner1.png",
        "https://1.bp.blogspot.com/-2CTSJDDYyME/XlhPDFT_iSI/AAAAAAAAFg0/0-UrxW9gj8cTprMI_4IzZm4FHeVycRmLACLcBGAsYHQ/s1600/alic.jpg",
        "https://1.bp.blogspot.com/-ASB7xHf4KHY/XlhPC4BYMdI/AAAAAAAAFgw/GKRngEPwfoseLLCnE-F-qHbPtUWVtFK3gCLcBGAsYHQ/s1600/ayaya.jpg",
        "https://1.bp.blogspot.com/-CkugRa2qoZY/XlhPDuvjZ7I/AAAAAAAAFg8/gYGO3V-ewZ4qOa5zWmV9l9Ei7uWukLSogCLcBGAsYHQ/s1600/banner-1.jpg"
        // ,'https://1.bp.blogspot.com/-fRIrHEECRBM/XlhPD_NBNuI/AAAAAAAAFhA/QpzNrvacWN0JkpcfUfLV4ht27_uMu6z3gCLcBGAsYHQ/s1600/banner-2.jpg'
        // ,'https://1.bp.blogspot.com/-F9WQCob5AAA/XlhPEqHBoeI/AAAAAAAAFhE/nO-YTDv5VC4LhQAEnWacRSecnGhMZ-lDwCLcBGAsYHQ/s1600/banner-3.jpg'
        // ,'https://1.bp.blogspot.com/-afmDDIo3wwU/XlhPEo95n3I/AAAAAAAAFhI/qqQvlUwzR4UlONFPygTklvdQEovppatLgCLcBGAsYHQ/s1600/banner-4.jpg'
        // ,'https://1.bp.blogspot.com/-8S7znS1bpkQ/XlhPFl8UI3I/AAAAAAAAFhQ/3NK7CruZYYwsG75GfcRtNE9zQhF2ej6hACLcBGAsYHQ/s1600/banner-6.jpg'
        // ,'https://1.bp.blogspot.com/-v2YqI7S7s9A/XlhPF7RCpqI/AAAAAAAAFhY/9OL06YmrY_QJuU0KijNuKPQGzgZ3rYDyQCLcBGAsYHQ/s1600/gabe.jpg'
        // ,'https://1.bp.blogspot.com/-9ADisILLXhw/XlhPGf9SngI/AAAAAAAAFhc/Ag6Ss1ce8GAAPZO0DlqJlHW7ajTWzGNegCLcBGAsYHQ/s1600/joimu.png'
        // ,'https://1.bp.blogspot.com/-eEKAGmFt1mk/XlhPGokfHQI/AAAAAAAAFhg/_3SpptJ1QJ8yMZfR7uTjIRQm2n5f1bq0wCLcBGAsYHQ/s1600/lameso.png'
        // ,'https://1.bp.blogspot.com/-ml-IUpYAml0/XlhPDN0CQBI/AAAAAAAAFg4/InmQXbGI50gyKT2Khwc4GEzirBrnMiu2wCLcBGAsYHQ/s1600/Marisa.png'
        // ,'https://1.bp.blogspot.com/-CbUeuXM4PPE/XlhPG6vOW5I/AAAAAAAAFhk/qVk0NPK1mNo0s9om77YUHqOLXHuqZF_7gCLcBGAsYHQ/s1600/oldpaty.png'
        // ,'https://1.bp.blogspot.com/-8hKxpN1v8vo/XlhPHPrU0CI/AAAAAAAAFho/nr4bjlU4EyoVNg1gFFllEHEN2m0h2OLiwCLcBGAsYHQ/s1600/padoru.jpg'
        // ,'https://1.bp.blogspot.com/-ZqlUt4kr-lU/XlhPHQxrhQI/AAAAAAAAFhs/i8MmM7nhu_gKFyBMLiCObokiCSZ4M5WiACLcBGAsYHQ/s1600/peron.png'
        // ,'https://1.bp.blogspot.com/-1tgDYlvkK3E/XlhPHT7vcWI/AAAAAAAAFhw/VoXna4sQZRUBh1-ngK3ikgj5y4ZHgizYgCLcBGAsYHQ/s1600/puty.png'
        // ,'https://1.bp.blogspot.com/-QQ6kc0p9sso/XlhPH93tChI/AAAAAAAAFh0/i4UhrgFOAMMew7ZEFsFVizXRmXyR20UIACLcBGAsYHQ/s1600/quesi.jpg'
        // ,'https://1.bp.blogspot.com/-ZjH9eXj8Jlo/XlhPIDCOlcI/AAAAAAAAFh8/LarH0nB208wtifohy_jg78xe60PIbB2wQCLcBGAsYHQ/s1600/reimu.png'
        // ,'https://1.bp.blogspot.com/-nYDwb4DGR3Y/XlhPILecOpI/AAAAAAAAFh4/ktjq-Q8NznEpXXeCU7H2ZELvDBwaJsQsACLcBGAsYHQ/s1600/rember.jpg'
        // ,'https://1.bp.blogspot.com/-boKsO-PmCjU/XlhPI-zebxI/AAAAAAAAFiA/ET6DbgyXRP46qmGv20QXfaDFLdREE6nhwCLcBGAsYHQ/s1600/rhbmasro.jpg'
        // ,'https://1.bp.blogspot.com/-XQfiuccxv78/XlhPJOffs6I/AAAAAAAAFiE/V-cjOsERmmsgaM4QVsaBNKLU04hpW0vvgCLcBGAsYHQ/s1600/seija.jpg'
        // ,'https://1.bp.blogspot.com/-eIG2eDB_MYo/XlhPJdfJcyI/AAAAAAAAFiI/IQNaxvT-Zj8adiPC5hUGai7Oht0ZEGqMgCLcBGAsYHQ/s1600/tute.jpg'
        // ,'https://1.bp.blogspot.com/-eKQlsV421o4/XlhPJntVLHI/AAAAAAAAFiM/Wui1F0NwvR0YoSBVxXBI4YKH58rzHoH0QCLcBGAsYHQ/s1600/unzan.jpg'
        // ,'https://1.bp.blogspot.com/-FO8XvLovI4s/XlhPJ2RzvVI/AAAAAAAAFiQ/mkGdlzgoEmYdkDg_tD5RuQgekuuzRmqbwCLcBGAsYHQ/s1600/yukkuri.jpg'
        // ,'https://1.bp.blogspot.com/-JSAfljVuOyo/XlhPKKU3_OI/AAAAAAAAFiU/MRhhTXxJTo42oNxpineguS4AxzuV3pIIACLcBGAsYHQ/s1600/zun.png'
        // ,'https://1.bp.blogspot.com/-dRUlWYTBOek/XzC2oR4ccBI/AAAAAAAAGSo/DEAK97t5vVwZxTt8f0RGU6uEfAzL8icygCLcBGAsYHQ/s1600/pastel.png'
        // ,'https://1.bp.blogspot.com/-PIfeVhlhOZU/X-X5PcLQcQI/AAAAAAAAGwk/esQV-moMeSohKyuUt2SLiCwbYumdtAYWgCLcBGAsYHQ/s16000/bankei.png'
        // ,'https://1.bp.blogspot.com/-8upaD2OA9eA/X-lZnACHcEI/AAAAAAAAGxo/M6PDGOwEJEEvGhJJpLMBHl71PTzbfPM0ACLcBGAsYHQ/s1020/mochowo.png'
        // ,'https://1.bp.blogspot.com/-eAEf7fM4ACw/X-gdE8HTXxI/AAAAAAAAGxM/FgKODI42qRcRmHaAieoZqnTXhm7qHdUHwCLcBGAsYHQ/s1020/pufo1.png'
      ],
      pajaro: "",
      isNav: true
    };
  },
  methods: {
    changeHeader() {
      var rand = Math.floor(Math.random() * Math.floor(this.parvada.length));
      this.pajaro = this.parvada[rand];
    }
  },
  created() {
    this.changeHeader();
  }
};
</script>
