<script>
  //COMPONENTS
  import Item from "./navbar-item.svelte";
  import Icon from "./navbar-icon.svelte";
  import GlitchverseLogo from "../misc/glitchverse-logo.svelte";
</script>

<div class="text-primary-dark w-full">
  <nav
    class="bg-transparent flex w-full px-32 py-32 items-center space-x-120 justify-center"
  >
    <div class="flex flex-grow">
      <GlitchverseLogo id="footer-logo" />
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
</style>
