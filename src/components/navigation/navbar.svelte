<script>
  //COMPONENTS
  import Item from "./navbar-item.svelte";
  import Icon from "./navbar-icon.svelte";
  import GlitchverseLogo from "../misc/glitchverse-logo.svelte";
</script>

<div class="text-primary-dark w-full">
  <nav
    class="bg-background-light-alpha flex w-full px-32 py-16 items-center space-x-120 justify-center"
  >
    <div class="flex flex-grow">
      <GlitchverseLogo id="navbar-logo" />
    </div>
    <div class="flex space-x-48 pt-16">
      <Item label="GLITCHVERSE?" id="about" />
      <Item label="Colección" id="explorer" />
      <Item label="¿Quién?" id="quien" />
      <Item label="Contacto" id="cuentamelo" />
    </div>
    <div class="flex justify-end space-x-32">
      <Icon img_url="/assets/imgs/discord-icon-h480.png" url="/" id="twitter" />
      <Icon img_url="/assets/imgs/twitter-icon-h480.png" url="/" id="discord" />
    </div>

    <!-- <div>
      <Button />
    </div> -->
  </nav>
</div>

<style>
  nav {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
  }
</style>
