<script>
  //LIBS
  import { Motion } from "svelte-motion";
  import Button from "../../buttons/subscribe.svelte";
  import EmailField from "../../inputs/email.svelte";
</script>

<div
  class="flex flex-col h-full w-full px-196 py-240 gradient-section-bg-light-inverse space-y-64"
>
  <div class="w-full space-y-32">
    <h1 class="text-4xl font-bold text-primary-dark text-left leading-8xl">
      Subscríbete a nuestro newsletter!
    </h1>
    <div class="w-75">
      <h1 class="text-xl text-primary-dark text-left leading-3xl">
        Te mantendremos informados sobre próximos eventos y lanzamientos de
        nuevas colecciones de crrypto'arte
      </h1>
    </div>
  </div>

  <div class="flex items-center space-x-32">
    <EmailField />
    <Button label="Subscribir" />
  </div>
</div>

<style>
</style>
