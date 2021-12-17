<script>
  //LIBS
  import { onMount } from "svelte";
  import { flip } from "svelte/animate";
  import { createEventDispatcher, onDestroy } from "svelte";

  //SKETCHES
  import Vortex from "../sketches/p5js/slides/slide1.svelte";

  //PROPS
  export let slides;
  export let speed;
  export let displayControls;

  const dispatch = createEventDispatcher();

  onMount(async () => {
    let root = document.querySelector(":root");
    root.style.setProperty("--w", slides.length * 100 + "%");
    // root.style.setProperty("--controlWidth", 100 / slides.length - 2 + "%");
  });

  const handleEnterCenter = () => {
    let chevronCenter = document.getElementById("chevronCenter");
    chevronCenter.src = "/assets/imgs/icons/chevron-center-hover.svg";
  };

  const handleLeaveCenter = () => {
    let chevronCenter = document.getElementById("chevronCenter");
    chevronCenter.src = "/assets/imgs/icons/chevron-center.svg";
  };

  const popUp = () => {
    let infoWrapepr = document.getElementById("info-wrapper");
    infoWrapepr.style.visibility = "visible";
  };
</script>

<div id="carousel-container">
  <div id="carousel-slides">
    {#each slides as slide (slide.id)}
      <div
        alt={slide.id}
        id={slide.id}
        on:click={() => dispatch("imageClicked", slide.path)}
        on:blur={() => console.log("BLUR")}
        on:focus={() => console.log("FOCUS")}
        animate:flip={{ duration: speed }}
      >
        <div class="flex">
          <div>
            <div id="slide1" class="" />
            <Vortex id="slide1" />
          </div>
        </div>
      </div>
    {/each}
  </div>
  {#if displayControls}
    <div id="control-wrapper" class="flex items-center">
      <button id="center" on:click={popUp}>
        <slot name="center-control">
          <div class="w-120 h-full">
            <img
              id="chevronCenter"
              src="/assets/imgs/icons/chevron-center.svg"
              alt=""
              on:mouseenter={handleEnterCenter}
              on:mouseleave={handleLeaveCenter}
            />
          </div>
        </slot>
      </button>
    </div>
    <div id="info-wrapper">
      <div class="p-64 space-y-56">
        <div>
          <h1 class="text-4xl text-secondary-light">Glitchverse</h1>
          <p class="text-lg text-secondary-light">
            Glitchverse es un fallo disruptivo para el sistema. Un colectivo
            humanístico que a partir del arte y la tecnología genera anomalías
            espacio-temporales como escenarios para la innovación y la creación
            de valor social, combinando lo físico y lo virtual en un solo código
            que reta el status quo de todo lo que sea excluyente.
          </p>
        </div>
        <div>
          <h1 class="text-4xl text-secondary-light">Visión</h1>
          <p class="text-lg text-secondary-light">
            Empoderar la diversidad del talento regional de la Costa Caribe
            Colombiana para que, desde sus diferentes expresiones creativas,
            participen del mercado nacional e internacional del arte en sus
            diferentes formas, involucrando transversalmente géneros, etnias,
            razas y otros segmentos demográficos que a partir de sus medios
            artísticos físicos o digitales generen innovación social y
            tecnológica.
          </p>
        </div>
        <div>
          <h1 class="text-4xl text-secondary-light">Propósito Transformador</h1>
          <p class="text-lg text-secondary-light">
            Desde la aceptación de la diversidad humana, las diferentes
            expresiones artísticas, y siendo consientes de que las acciones
            individuales redundan colectivamente en nuestra sociedad y el medio
            ambiente, Glitchverse participará de la economía creativa y las
            finanzas descentralizadas para empoderar artistas y demás partes
            interesadas en el arte y la tecnología, facilitando los medios y las
            herramientas para la educación, nuevas formas de aproximación a la
            cultura y la generación de valor compartido.
          </p>
        </div>
        <!-- <div id="">
          <button class="text-2xl text-secondary-light">Close</button>
        </div> -->
      </div>
    </div>
  {/if}
</div>

<style>
  * {
    overflow: hidden;
  }

  :root {
    --w: 100%;
    --controlWidth: 100%;
    --buttonWidth: 300px;
  }

  #carousel-container {
    width: var(--w);
    position: relative;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
  }

  #carousel-slides {
    width: 100%;
    height: 100%;
    /* display: flex;
    justify-content: center;
    align-items: center; */
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

  #info-wrapper {
    position: absolute;
    width: var(--controlWidth);
    height: 100%;
    top: 0;
    left: 0;
    z-index: 20;
    visibility: hidden;
    background: -webkit-linear-gradient(rgba(0, 0, 0, 0.815), rgb(17, 0, 29));
  }

  #close-btn {
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

  #center {
    left: calc(50% - 52px);
  }

  #chevron-center {
    background-color: aqua;
    border-radius: 50%;
    width: var(--buttonWidth);
    height: var(--buttonWidth);
    visibility: hidden;
    left: calc(50% - var(--buttonWidth) / 2);
  }
  #chevronCenterHover {
  }

  #chevronCenter {
    cursor: pointer;
  }

  #chevronCenterHover {
    cursor: pointer;
  }

  #paginator-container {
    position: absolute;
    bottom: 0;
  }

  #Slide1 {
    position: absolute;
    text-align: center;
    top: 50%;
    width: 100%;
    /* z-index: 100; */
  }
</style>
