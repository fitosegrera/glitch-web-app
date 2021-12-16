<script>
  import { onMount } from "svelte";

  export let sketch_name;

  let e;

  onMount(async () => {
    const three = await import("./" + sketch_name);
    three.createScene(e);
  });
</script>

<canvas bind:this={e} />

<style>
  * {
    font-family: "Primary";
  }
  canvas {
    margin: auto;
  }
</style>
