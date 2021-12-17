<script>
  //LIBS
  import Button from "../../buttons/subscribe.svelte";
  import EmailField from "../../inputs/email.svelte";

  //COMPONENTS
  import Icon from "../../navigation/navbar-icon-large.svelte";
</script>

<div
  class="flex flex-col h-full w-full px-196 py-160 gradient-section-bg-light-inverse space-y-64"
>
  <div class="w-full">
    <h1
      class="text-4xl font-bold text-primary-dark text-center leading-8xl py-120"
    >
      💌 Contacto 💌
    </h1>
    <div class="grid grid-flow-col grid-cols-3">
      <div class="col-start-1 col-end-3">
        <h1 class="text-2xl font-bold text-primary-dark text-left leading-3xl">
          Subscríbete a nuestro newsletter!
        </h1>
        <div class="w-full">
          <h1 class="text-xl text-primary-dark text-left leading-xl my-32">
            Te mantendremos informados sobre próximos eventos y lanzamientos de
            nuevas colecciones de crrypto'arte
          </h1>
        </div>
      </div>
      <div>
        <h1
          class="text-2xl font-bold text-primary-dark text-center leading-3xl"
        >
          Síguenos:
        </h1>
        <div class="flex justify-center py-32 space-x-72">
          <Icon
            img_url="/assets/imgs/discord-icon-h480.png"
            url="/"
            id="twitter"
          />
          <Icon
            img_url="/assets/imgs/twitter-icon-h480.png"
            url="/"
            id="discord"
          />
        </div>
      </div>
    </div>
  </div>

  <div class="flex items-center space-x-32">
    <EmailField />
    <Button label="Subscribir" />
  </div>
</div>

<style>
</style>
