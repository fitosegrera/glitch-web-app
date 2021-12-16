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
    class="flex justify-center items-center color-anim-bg-light w-auto h-64 space-x-16 px-32"
  >
    <div class="text-2xl text-secondary-light">
      <Icon icon="mdi:email-newsletter" />
    </div>
    <h1 class="text-xl font-bold text-secondary-light">{label}</h1>
  </button>
</Motion>

<style>
  button {
    border-radius: 0px;
  }
</style>
