<script>
  //LIBS
  import Icon from "@iconify/svelte";

  //SKETCHES
  import Vortex from "../sketches/p5js/misc/vortex.svelte";
</script>

<div id="wrapper" class="w-800 h-560 px-48 p-32 border-2 border-black">
  <div
    class="flex items-center space-x-16 mt-96 text-4xl text-primary-dark font-bold"
  >
    <Icon icon="flat-color-icons:entering-heaven-alive" />
    <h1 class="">Entra al Glitchverse</h1>
  </div>
  <p class="text-xl gradient-text-dark py-24">
    Glitchverse es un fallo disruptivo para el sistema. Un colectivo humanístico
    que a partir del arte y la tecnología genera anomalías espacio-temporales
    como escenarios para la innovación y la creación de valor social, combinando
    lo físico y lo virtual en un solo código que reta el status quo de todo lo
    que sea excluyente.
  </p>
  <div id="sketch">
    <div id="vx" />
    <Vortex />
  </div>
</div>

<style>
  #wrapper {
    box-shadow: 1rem 1.4rem 0rem #2f022f;
    position: relative;
  }
  #sketch {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
</style>
