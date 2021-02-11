<template>
  <div id="app" class=" bg-purple-300">
    <div v-on:click="changeHeader" class="container mb-4">
      <img :src="pajaro" alt="" class="w-full">
      <div id="nav" class="bg-white rounded-b flex flex-row">
        <router-link to="/" class="font-sans"><img alt="Vue logo" src="@/assets/logo.png" class="inline-block w-6"/></router-link>
        <ul class="active flex flex-col md:flex-row justify-center w-full overflow-visible">
          <li><router-link to="/about">Guías ▶</router-link>
            <ul>
              <li><a href="http://patyscans.blogspot.com/p/edicion-basica.html">Edición básica</a></li>
              <li><a href="http://patyscans.blogspot.com/p/fuentes.html">Fuentes</a></li>
              <li><a href="http://patyscans.blogspot.com/p/como-escribir-bien.html">Cómo escribir bien</a></li>
              <li><a href="http://patyscans.blogspot.com/p/consideraciones-de-traduccion.html">Consideraciones de traducción</a></li>
            </ul>
          </li>
          <li><a href="http://patyscans.blogspot.com/p/como-por-ahora-soy-yo-solo-sacar-un.html" class="font-sans">Reclutamiento</a></li>
          <li><a href="http://lector.patyscans.com/directory/" target="_blank">Lector</a></li>
          <li><a href="http://patyscans.blogspot.com/p/pedidos.html">Pedidos</a></li>
          <li><a href="#">Proyectos ▶</a>
            <ul>
              <li><a href="#">Touhou ▶</a>
                <ul>
                  <li><a href="https://www.patyscans.com/p/proyectos-de-touhou.html">Activos</a></li>
                  <li><a href="https://www.patyscans.com/p/touhou-finalizados.html">Finalizados</a></li>
                </ul>
              </li>
              <li><a href="#">No Touhou ▶</a>
                <ul>
                  <li><a href="https://www.patyscans.com/p/proyectos-no-touhou.html">Activos</a></li>
                  <li><a href="https://www.patyscans.com/p/proyectos-no-touhou-finalizados.html">Finalizados</a></li>
                  <li><a href="https://www.patyscans.com/p/proyectos-no-touhou-pausados.html">Pausados</a></li>
                  <li><a href="https://www.patyscans.com/p/proyectos-no-touhou-abandonados.html">Abandonados</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><a href="http://patyscans.blogspot.com/p/banners.html">Páginas recomendadas</a></li>
          <li><a href="#">Info del Scan ▶</a>
            <ul>
              <li><a href="http://patyscans.blogspot.com/p/sobre-paty-scans.html">Sobre nosotros</a></li>
              <li><a href="http://patyscans.blogspot.com/p/sobre-touhou.html">Sobre Touhou</a></li>
              <li><a href="https://discord.gg/sv8DCC4w6D">Staff</a></li>
              <li><a href="https://discord.gg/sv8DCC4w6D">Discord</a></li>
            </ul>
          </li>
          <li><a href="http://kourindouscans.blogspot.com/" target="_blank">+18</a></li>
          <li><a href="http://patyscans.blogspot.com/p/blog-page.html">♥</a></li>
        </ul>
      </div>
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
  components: {},
  data(){
    return {
      parvada: [
                'https://1.bp.blogspot.com/-uZ-mBSDDy-4/VDaK7gqJqdI/AAAAAAAAAr4/BmK_wY8-ppsl2AyMudTJ9emF9YtvUE1yQCPcBGAYYCw/s1600/portada.png'
            ,'https://1.bp.blogspot.com/-MOHUHg7lLRw/W7VYDhemUNI/AAAAAAAADYk/DT9dTPLRSBM5NHb8cGXzN0Ht4yO7ccWCACPcBGAYYCw/s1600/banner1.png'
            ,'https://1.bp.blogspot.com/-2CTSJDDYyME/XlhPDFT_iSI/AAAAAAAAFg0/0-UrxW9gj8cTprMI_4IzZm4FHeVycRmLACLcBGAsYHQ/s1600/alic.jpg'
            ,'https://1.bp.blogspot.com/-ASB7xHf4KHY/XlhPC4BYMdI/AAAAAAAAFgw/GKRngEPwfoseLLCnE-F-qHbPtUWVtFK3gCLcBGAsYHQ/s1600/ayaya.jpg'
            ,'https://1.bp.blogspot.com/-CkugRa2qoZY/XlhPDuvjZ7I/AAAAAAAAFg8/gYGO3V-ewZ4qOa5zWmV9l9Ei7uWukLSogCLcBGAsYHQ/s1600/banner-1.jpg'
            ,'https://1.bp.blogspot.com/-fRIrHEECRBM/XlhPD_NBNuI/AAAAAAAAFhA/QpzNrvacWN0JkpcfUfLV4ht27_uMu6z3gCLcBGAsYHQ/s1600/banner-2.jpg'
            ,'https://1.bp.blogspot.com/-F9WQCob5AAA/XlhPEqHBoeI/AAAAAAAAFhE/nO-YTDv5VC4LhQAEnWacRSecnGhMZ-lDwCLcBGAsYHQ/s1600/banner-3.jpg'
            ,'https://1.bp.blogspot.com/-afmDDIo3wwU/XlhPEo95n3I/AAAAAAAAFhI/qqQvlUwzR4UlONFPygTklvdQEovppatLgCLcBGAsYHQ/s1600/banner-4.jpg'
            ,'https://1.bp.blogspot.com/-8S7znS1bpkQ/XlhPFl8UI3I/AAAAAAAAFhQ/3NK7CruZYYwsG75GfcRtNE9zQhF2ej6hACLcBGAsYHQ/s1600/banner-6.jpg'
            ,'https://1.bp.blogspot.com/-v2YqI7S7s9A/XlhPF7RCpqI/AAAAAAAAFhY/9OL06YmrY_QJuU0KijNuKPQGzgZ3rYDyQCLcBGAsYHQ/s1600/gabe.jpg'
            ,'https://1.bp.blogspot.com/-9ADisILLXhw/XlhPGf9SngI/AAAAAAAAFhc/Ag6Ss1ce8GAAPZO0DlqJlHW7ajTWzGNegCLcBGAsYHQ/s1600/joimu.png'
            ,'https://1.bp.blogspot.com/-eEKAGmFt1mk/XlhPGokfHQI/AAAAAAAAFhg/_3SpptJ1QJ8yMZfR7uTjIRQm2n5f1bq0wCLcBGAsYHQ/s1600/lameso.png'
            ,'https://1.bp.blogspot.com/-ml-IUpYAml0/XlhPDN0CQBI/AAAAAAAAFg4/InmQXbGI50gyKT2Khwc4GEzirBrnMiu2wCLcBGAsYHQ/s1600/Marisa.png'
            ,'https://1.bp.blogspot.com/-CbUeuXM4PPE/XlhPG6vOW5I/AAAAAAAAFhk/qVk0NPK1mNo0s9om77YUHqOLXHuqZF_7gCLcBGAsYHQ/s1600/oldpaty.png'
            ,'https://1.bp.blogspot.com/-8hKxpN1v8vo/XlhPHPrU0CI/AAAAAAAAFho/nr4bjlU4EyoVNg1gFFllEHEN2m0h2OLiwCLcBGAsYHQ/s1600/padoru.jpg'
            ,'https://1.bp.blogspot.com/-ZqlUt4kr-lU/XlhPHQxrhQI/AAAAAAAAFhs/i8MmM7nhu_gKFyBMLiCObokiCSZ4M5WiACLcBGAsYHQ/s1600/peron.png'
            ,'https://1.bp.blogspot.com/-1tgDYlvkK3E/XlhPHT7vcWI/AAAAAAAAFhw/VoXna4sQZRUBh1-ngK3ikgj5y4ZHgizYgCLcBGAsYHQ/s1600/puty.png'
            ,'https://1.bp.blogspot.com/-QQ6kc0p9sso/XlhPH93tChI/AAAAAAAAFh0/i4UhrgFOAMMew7ZEFsFVizXRmXyR20UIACLcBGAsYHQ/s1600/quesi.jpg'
            ,'https://1.bp.blogspot.com/-ZjH9eXj8Jlo/XlhPIDCOlcI/AAAAAAAAFh8/LarH0nB208wtifohy_jg78xe60PIbB2wQCLcBGAsYHQ/s1600/reimu.png'
            ,'https://1.bp.blogspot.com/-nYDwb4DGR3Y/XlhPILecOpI/AAAAAAAAFh4/ktjq-Q8NznEpXXeCU7H2ZELvDBwaJsQsACLcBGAsYHQ/s1600/rember.jpg'
            ,'https://1.bp.blogspot.com/-boKsO-PmCjU/XlhPI-zebxI/AAAAAAAAFiA/ET6DbgyXRP46qmGv20QXfaDFLdREE6nhwCLcBGAsYHQ/s1600/rhbmasro.jpg'
            ,'https://1.bp.blogspot.com/-XQfiuccxv78/XlhPJOffs6I/AAAAAAAAFiE/V-cjOsERmmsgaM4QVsaBNKLU04hpW0vvgCLcBGAsYHQ/s1600/seija.jpg'
            ,'https://1.bp.blogspot.com/-eIG2eDB_MYo/XlhPJdfJcyI/AAAAAAAAFiI/IQNaxvT-Zj8adiPC5hUGai7Oht0ZEGqMgCLcBGAsYHQ/s1600/tute.jpg'
            ,'https://1.bp.blogspot.com/-eKQlsV421o4/XlhPJntVLHI/AAAAAAAAFiM/Wui1F0NwvR0YoSBVxXBI4YKH58rzHoH0QCLcBGAsYHQ/s1600/unzan.jpg'
            ,'https://1.bp.blogspot.com/-FO8XvLovI4s/XlhPJ2RzvVI/AAAAAAAAFiQ/mkGdlzgoEmYdkDg_tD5RuQgekuuzRmqbwCLcBGAsYHQ/s1600/yukkuri.jpg'
            ,'https://1.bp.blogspot.com/-JSAfljVuOyo/XlhPKKU3_OI/AAAAAAAAFiU/MRhhTXxJTo42oNxpineguS4AxzuV3pIIACLcBGAsYHQ/s1600/zun.png'
            ,'https://1.bp.blogspot.com/-dRUlWYTBOek/XzC2oR4ccBI/AAAAAAAAGSo/DEAK97t5vVwZxTt8f0RGU6uEfAzL8icygCLcBGAsYHQ/s1600/pastel.png'
            ,'https://1.bp.blogspot.com/-PIfeVhlhOZU/X-X5PcLQcQI/AAAAAAAAGwk/esQV-moMeSohKyuUt2SLiCwbYumdtAYWgCLcBGAsYHQ/s16000/bankei.png'
            ,'https://1.bp.blogspot.com/-8upaD2OA9eA/X-lZnACHcEI/AAAAAAAAGxo/M6PDGOwEJEEvGhJJpLMBHl71PTzbfPM0ACLcBGAsYHQ/s1020/mochowo.png'
            ,'https://1.bp.blogspot.com/-eAEf7fM4ACw/X-gdE8HTXxI/AAAAAAAAGxM/FgKODI42qRcRmHaAieoZqnTXhm7qHdUHwCLcBGAsYHQ/s1020/pufo1.png'
            ],
      pajaro: "",
    }
  },
  methods: {
    changeHeader(){
      var rand = Math.floor(Math.random() * Math.floor(this.parvada.length));
      this.pajaro = this.parvada[rand];
    }
  },
  created(){
    this.changeHeader();
  }
};
</script>

<style>
li a + ul{
  display: none;
}
li:hover > a + ul{
  display: block;
  background-color:white;
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
.active li:hover > a, .active li ul li:hover > a {
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
  border-top: dashed 1px rgba(128, 128, 128, .5);
}
</style>
