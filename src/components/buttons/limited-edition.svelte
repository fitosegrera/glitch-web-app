<script>
  //LIBS
  import { Motion } from "svelte-motion";
  import Icon from "@iconify/svelte";
</script>

<Motion whileHover={{ scale: 1.1 }} let:motion>
  <button
    use:motion
    class="flex justify-center items-center color-anim-bg-light hover:border-4 border-gradient-hover border-gradient-color-hover w-auto h-96 space-x-20 text-secondary-light px-32"
  >
    <div class="text-2xl color-anim-icon-infinite">
      <Icon icon="carbon:star-filled" />
    </div>
    <h1 class="text-2xl font-bold text-secondary-light ">Limited Edition</h1>
  </button>
</Motion>

<style>
  div :global(svg) {
    font-size: 48px;
    line-height: 1em;
  }
</style>
