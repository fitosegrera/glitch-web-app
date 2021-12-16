<script>
  //LIBS
  import { Motion } from "svelte-motion";
  import Icon from "@iconify/svelte";
</script>

<Motion whileHover={{ scale: 1.1 }} let:motion>
  <button
    use:motion
    class="border-gradient border-gradient-color flex mt-72 justify-center items-center border-8 color-anim-bg color-anim-shadow text-4xl w-160 h-auto space-x-20 gradient-icons"
  >
    <div class="text-2xl gradient-icons">
      <Icon icon="akar-icons:discord-fill" />
    </div>
  </button>
</Motion>

<style>
  div :global(svg) {
    font-size: 48px;
    line-height: 1em;
  }
</style>
