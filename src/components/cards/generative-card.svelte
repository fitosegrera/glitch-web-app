<script>
  //SKETCHES
  import Vortex from "../sketches/p5js/misc/vortex.svelte";
</script>

<div id="wrapper" class="w-800 space-y-32 p-32 px-48 border-4 border-black">
  <h1 class="text-4xl text-primary-dark font-bold">Entra al Glitchverse</h1>
  <p class="text-xl gradient-text-dark">
    Glitchverse es un fallo disruptivo para el sistema. Un colectivo humanístico
    que a partir del arte y la tecnología genera anomalías espacio-temporales
    como escenarios para la innovación y la creación de valor social, combinando
    lo físico y lo virtual en un solo código que reta el status quo de todo lo
    que sea excluyente.
  </p>
  <div>
    <div id="vx" />
    <Vortex />
  </div>
</div>

<style>
  #wrapper {
    box-shadow: 1rem 1.4rem 0rem #2f022f;
  }
</style>
