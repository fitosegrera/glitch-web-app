<script>
  //LIBS
  import Icon from "@iconify/svelte";

  //PROPS
  export let label;
</script>

<button
  class="flex items-center color-anim-icon-infinite space-x-12 border-8 border-gradient border-gradient-color text-primary-dark text-2xl leading-2xl w-auto px-48 py-16 mb-24"
>
  <Icon icon="el:fire" />
  <h1 class="py-8">{label}</h1>
</button>

<style>
  button {
    border-radius: 50%;
  }
</style>
