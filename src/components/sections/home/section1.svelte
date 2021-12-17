<script>
  import Model from "../../sketches/threejs/model.svelte";
  import GenerativeCard from "../../cards/generative-card.svelte";
</script>

<div id="wrapper" class="h-720 flex justify-center items-center  px-196">
  <div
    class="flex py-240 text-4xl leading-3xl text-secondary-light text-left justify-center"
  >
    <GenerativeCard />
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
