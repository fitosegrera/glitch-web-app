<script>
  import Interactive from "../../widgets/interactive.svelte";
  import BarScroller from "../../misc/bar-scroller.svelte";

  const slides = [
    {
      headline: "Entra al Glitchverse",
      paragraph:
        "Glitchverse es un fallo disruptivo para el sistema. Un colectivo humanístico que a partir del arte y la tecnología genera anomalías espacio-temporales como escenarios para la innovación y la creación de valor social, combinando lo físico y lo virtual en un solo código que reta el status quo de todo lo que sea excluyente.",
      path: "https://cdn.shopify.com/s/files/1/2255/9153/products/key_lime_74b07b44-898f-4cf8-9896-01b7d9e53495_2048x2235.jpg?v=1591808720",
      id: "slide1",
    },
  ];
</script>

<div id="wrapper" class="flex flex-col w-full items-center">
  <!-- <BarScroller /> -->
  <Interactive {slides} displayControls={true} />
</div>

<style>
  * {
    overflow-x: hidden;
  }
  #wrapper {
    background: linear-gradient(-45deg, #000000, #121300, #010501, #03080a);
    background-size: 400% 400%;
    animation: gradient 30s ease infinite;
    height: 100vh;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
</style>
