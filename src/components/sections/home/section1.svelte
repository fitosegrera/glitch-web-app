<script>
  import Model from "../../sketches/threejs/model.svelte";
</script>

<div id="wrapper" class="h-1000 gradient-bg-dark-secondary">
  <div
    class="flex py-120 px-240 text-6xl leading-8xl text-secondary-light text-center justify-center"
  >
    <div class="gradient-text-dark">
      <div id="model" class="flex justify-center">
        <Model sketch_name="model" />
      </div>
      <p>
        Aquí contamos la carreta de GLITCH. Nuestro statement, nuestra oferta de
        valor, comunidad, cryptoarte, descentralización, etc. La cosa sigue por
        aquí pero no debe extenderse mucho!
      </p>
    </div>
  </div>
</div>

<style>
  #wrapper {
    position: relative;
    z-index: -10;
  }
  #model {
    position: absolute;
    z-index: -1;
  }
</style>
