<script>
  //LIBS
  import { onMount } from "svelte";
  import { flip } from "svelte/animate";
  import { createEventDispatcher, onDestroy } from "svelte";
  import Icon from "@iconify/svelte";

  //SKETCHES
  import Vortex from "../sketches/p5js/misc/vortex.svelte";

  //COMPONENTS
  // import Paginator from "../../navigation/paginator.svelte";
  // import Button from "../../buttons/md-primary-icon-fill.svelte";

  //PROPS
  export let slides;
  export let speed;
  export let autoplay;
  export let autoplaySpeed;
  export let displayControls;

  let interval;
  let paginatorIndex = 0;

  const dispatch = createEventDispatcher();

  onMount(async () => {
    let root = document.querySelector(":root");
    root.style.setProperty("--w", slides.length * 100 + "%");
    // root.style.setProperty("--controlWidth", 100 / slides.length - 2 + "%");
  });

  const handleEnterLeft = () => {
    let chevronLeft = document.getElementById("chevronLeft");
    chevronLeft.src = "/assets/imgs/icons/chevron-left-hover.svg";
  };

  const handleLeaveLeft = () => {
    let chevronLeft = document.getElementById("chevronLeft");
    chevronLeft.src = "/assets/imgs/icons/chevron-left.svg";
  };

  const handleEnterRight = () => {
    let chevronRight = document.getElementById("chevronRight");
    chevronRight.src = "/assets/imgs/icons/chevron-right-hover.svg";
  };

  const handleLeaveRight = () => {
    let chevronRight = document.getElementById("chevronRight");
    chevronRight.src = "/assets/imgs/icons/chevron-right.svg";
  };

  const rotateLeft = (e) => {
    const transitioningSlide = slides[slides.length - 1];
    document.getElementById(transitioningSlide.id).style.opacity = 0;
    slides = [slides[slides.length - 1], ...slides.slice(0, slides.length - 1)];
    document.getElementById(transitioningSlide.id).style.opacity = 1;

    paginatorIndex++;
    if (paginatorIndex >= slides.length) {
      paginatorIndex = 0;
    }
    console.log(paginatorIndex);
  };

  const rotateRight = (e) => {
    const transitioningSlide = slides[0];
    document.getElementById(transitioningSlide.id).style.opacity = 0;
    slides = [...slides.slice(1, slides.length), slides[0]];
    document.getElementById(transitioningSlide.id).style.opacity = 1;

    paginatorIndex++;
    if (paginatorIndex >= slides.length) {
      paginatorIndex = 0;
    }
    console.log(paginatorIndex);
  };

  const startAutoPlay = () => {
    if (autoplay) {
      interval = setInterval(rotateRight, autoplaySpeed);
    }
  };

  const stopAutoPlay = () => {
    clearInterval(interval);
  };

  if (autoplay) {
    startAutoPlay();
  }

  onDestroy(() => {
    stopAutoPlay();
  });
</script>

<div id="carousel-container">
  <div id="carousel-slides">
    {#each slides as slide (slide.id)}
      <div
        alt={slide.id}
        id={slide.id}
        on:mouseover={stopAutoPlay}
        on:mouseout={startAutoPlay}
        on:click={() => dispatch("imageClicked", slide.path)}
        on:blur={() => console.log("BLUR")}
        on:focus={() => console.log("FOCUS")}
        animate:flip={{ duration: speed }}
      >
        <div class="flex">
          <!-- <div id={slide.id} class="sketch" />
          <Vortex id={slide.id} /> -->
          <!-- <img
            class="w-full h-full"
            src="https://media.giphy.com/media/BSx6mzbW1ew7K/giphy.gif"
            alt=""
          /> -->
          <div id="img-wrapper" class="w-full h-full" />

          <div class="p-72 space-y-32 w-full">
            <div class="flex items-center">
              <div class="text-4xl text-secondary-light">
                <Icon icon="mdi:image-filter-center-focus-strong" />
              </div>
              <h1 class="text-2xl text-secondary-light font-bold px-16">
                {slide.headline}
              </h1>
            </div>

            <div class="text-lg text-secondary-light">
              <h1 class="">
                {slide.paragraph}
              </h1>
            </div>

            <!-- <Button
                icon_label="ic:baseline-read-more"
                label="Read More"
                url="/contact"
              /> -->
          </div>
        </div>
      </div>
    {/each}
  </div>
  {#if displayControls}
    <div id="control-wrapper" class="">
      <button id="left" on:click={rotateLeft}>
        <slot name="left-control">
          <!-- <div class="xl:w-48 lg:w-56 md:w-120 sm:w-96"> -->
          <div class="w-32 h-full">
            <img
              id="chevronLeft"
              src="/assets/imgs/icons/chevron-left.svg"
              alt=""
              on:mouseenter={handleEnterLeft}
              on:mouseleave={handleLeaveLeft}
            />
          </div>
        </slot>
      </button>
      <button id="right" on:click={rotateRight}>
        <slot name="right-control">
          <!-- <div class="xl:w-48 lg:w-56 md:w-120 sm:w-96"> -->
          <div class="w-32 h-full">
            <img
              id="chevronRight"
              src="/assets/imgs/icons/chevron-right.svg"
              alt=""
              on:mouseenter={handleEnterRight}
              on:mouseleave={handleLeaveRight}
            />
          </div>
        </slot>
      </button>
      <div
        id="paginator-container"
        class="flex justify-center w-full space-x-12"
      >
        {#each slides as slide (slide.id)}
          <!-- <Paginator is_active={false} /> -->
        {/each}
      </div>
    </div>
  {/if}
</div>

<style>
  * {
    overflow: hidden;
  }

  a {
    cursor: pointer;
  }

  :root {
    --w: 100%;
    --controlWidth: 100%;
  }

  #carousel-container {
    width: var(--w);
    /* position: relative; */
    /* display: flex;
    flex-direction: column; */
    /* overflow-x: hidden; */
  }
  #carousel-slides {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }

  #control-wrapper {
    position: absolute;
    width: var(--controlWidth);
    height: 100%;
    top: 0;
    left: 0;
    z-index: 10;
  }

  button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    z-index: 10;
  }
  button:focus {
    outline: none;
  }
  #left {
    left: 10px;
  }
  #right {
    right: 10px;
  }

  #chevronRight {
    cursor: pointer;
  }

  #chevronLeft {
    cursor: pointer;
  }

  #paginator-container {
    position: absolute;
    bottom: 0;
  }

  #img-wrapper {
    height: 100vh;
    background-image: url("https://media.giphy.com/media/h8sVibFE0NChi/giphy.gif");
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
