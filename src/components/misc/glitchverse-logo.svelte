<script>
  import Sketch from "../sketches/p5js/logo-model.svelte";
</script>

<div class="flex items-center space-x-16 h-48">
  <div id="logo-model" />
  <Sketch />
  <h1 id="logo" class="gradient-text-dark text-xl">GLITCHVERSE</h1>
</div>

<style>
  #logo {
    font-family: "Press Start 2P", cursive;
  }
</style>
