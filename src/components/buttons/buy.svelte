<script>
  //LIBS
  import { Motion } from "svelte-motion";
  import Icon from "@iconify/svelte";

  //PROPS
  export let label;
</script>

<Motion whileHover={{ scale: 1.1 }} let:motion>
  <button
    use:motion
    class="flex justify-center items-center anim-border anim-border-color w-auto h-64 space-x-48 px-32"
  >
    <h1 class="text-xl text-secondary-dark">{label}</h1>
  </button>
</Motion>

<style>
  button {
    border-radius: 20px;
  }

  div :global(svg) {
    font-size: 48px;
    line-height: 1em;
  }
</style>
