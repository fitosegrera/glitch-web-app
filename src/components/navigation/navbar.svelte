<script>
  //COMPONENTS
  import Item from "./navbar-item.svelte";
  import Icon from "./navbar-icon.svelte";
  import GlitchverseLogo from "../misc/glitchverse-logo.svelte";
</script>

<div class="text-primary-dark w-full px-240">
  <nav
    class="bg-transparent flex w-full py-32 items-center space-x-120 justify-center"
  >
    <GlitchverseLogo />
    <div class="flex space-x-96 pt-16">
      <Item label="Glitch?" id="about" />
      <Item label="Collection" id="explorer" />
      <Item label="Who?" id="quien" />
      <Item label="Contact" id="cuentamelo" />
    </div>
    <div class="flex justify-end space-x-72">
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
