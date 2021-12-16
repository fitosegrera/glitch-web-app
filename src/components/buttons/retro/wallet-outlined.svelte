<script>
  //LIBS
  import { Motion } from "svelte-motion";
</script>

<Motion
  animate={{ scale: 1.3 }}
  transition={{ duration: 0.25 }}
  whileHover={{ scale: 1.4 }}
  whileTap={{ scale: 1.25 }}
  let:motion
>
  <button
    use:motion
    class="flex border-gradient border-gradient-color justify-center items-center border-4 rounded-lg text-2xl font-bold w-auto px-24 h-auto space-x-20"
  >
    <h1 class="text-xl my-16">Connect Wallet</h1>
  </button>
</Motion>

<style>
  div :global(svg) {
    font-size: 48px;
    line-height: 1em;
  }
</style>
