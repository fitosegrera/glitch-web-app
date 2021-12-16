<script>
  import Sketch from "../sketches/p5js/logo-model.svelte";
</script>

<div class="flex items-center space-x-16 h-48">
  <div id="logo-model" />
  <Sketch />
  <h1 id="logo" class="text-primary-dark text-xl">GLITCHVERSE</h1>
</div>

<style>
  #logo {
    font-family: "Press Start 2P", cursive;
    /* text-shadow: 0.2rem 0.2rem 0rem #000000c2; */
  }
</style>
