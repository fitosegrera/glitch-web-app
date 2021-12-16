<script>
  import Model from "../../sketches/threejs/model.svelte";
</script>

<div id="wrapper" class="h-720 flex justify-center items-center  px-196">
  <div
    class="flex py-240 text-4xl leading-3xl text-secondary-light text-center justify-center"
  >
    <div class="gradient-text-dark">
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
    z-index: 10;
  }
</style>
