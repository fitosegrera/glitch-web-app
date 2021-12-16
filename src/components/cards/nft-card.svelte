<script>
  //COMPONENTS
  import BuyButton from "../buttons/buy.svelte";

  //PROPS
  export let id, price, label, img_url;
</script>

<div id="wrapper" class="w-400 h-auto leading-4xl">
  <img class="" src={img_url} alt="" />
  <div class="border-2 border-primary-dark text-primary-dark ">
    <h1 class="text-primary-dark text-2xl font-bold mt-8">glitch#{id}</h1>
    <p class="text-xl">@artistName</p>
    <div class="flex justify-center space-x-32">
      <div class="flex space-x-24 justify-center items-center">
        <div class="flex items-center space-x-16">
          <img
            class="h-32"
            src="/assets/icons/ethereum-icon-purple.svg"
            alt=""
          />
          <p class="text-2xl">{price}</p>
        </div>
      </div>

      <div class="flex justify-center my-16">
        <BuyButton {label} />
      </div>
    </div>
  </div>
</div>

<style>
  #wrapper {
    box-shadow: 1rem 1rem 0rem #2f022f;
  }
</style>
