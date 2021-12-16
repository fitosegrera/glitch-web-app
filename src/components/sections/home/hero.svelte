<script>
  //LIBS
  import { Motion } from "svelte-motion";

  //STORES
  import { memoryData } from "../../../stores/stores";

  //COMPONENTS
  import TwitterButton from "../../buttons/retro/twitter.svelte";
  import DiscordButton from "../../buttons/retro/discord.svelte";
  import Sketch from "../../sketches/p5js/model.svelte";

  //PROPS
  export let heading;
</script>

<div class="h-screen" />
<div
  id="wrapper"
  class="h-screen w-full justify-center px-64 pt-240 gradient-section-bg-light"
>
  <div class="flex items-center ">
    <div class="flex w-full mt-32">
      <div class="px-240 space-y-32">
        <h1 class="text-8xl font-bold text-primary-dark text-left leading-8xl">
          Headline
        </h1>
        <h1
          id="heading"
          class="text-2xl text-primary-dark text-left leading-5xl"
        >
          {heading.split("%%")[0]}
          <span class="color-anim-icon">{heading.split("%%")[1]}</span>
          {heading.split("%%")[2]}
        </h1>
      </div>
    </div>
    <div
      class="flex flex-col justify-center items-center w-full h-full space-x-16"
    >
      <div id="model" />
      <Sketch />
    </div>

    <!-- <div class="flex h-190 justify-center space-x-48 mt-56">
    <TwitterButton />
    <DiscordButton />
  </div> -->
  </div>
</div>
<div class="w-auto mt-120">
  <div class="flex justify-center h-120 animate-bounce">
    <img src="/assets/imgs/chevron-down.svg" alt="" />
  </div>
</div>

<!-- <div id="alpha-layer" /> -->
<style>
  #wrapper {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
  }

  #logo {
    font-family: "Press Start 2P", cursive;
  }

  #heading {
    /* background: -webkit-linear-gradient(rgb(90, 48, 107), rgb(143, 103, 29));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
  }
  #alpha-layer {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    background-color: rgba(0, 0, 0, 0.534);
    width: 100vw;
    height: 100vh;
  }
</style>
