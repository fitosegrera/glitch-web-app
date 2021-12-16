<script>
  //COMPONENTS
  import NftCard from "../../cards/nft-card.svelte";
  import Button from "../../buttons/limited-edition.svelte";
</script>

<div id="wrapper" class="h-960">
  <div
    class="flex flex-col py-120 px-240 text-4xl leading-8xl text-secondary-light text-center justify-center items-center"
  >
    <div class="flex justify-center space-x-72 gradient-text-light">
      <NftCard
        id="0001"
        price={0.1}
        label="Buy"
        img_url="https://cnft.tools/static/assets/projectthumbs/pussyglam/7.png"
      />
      <NftCard
        id="0002"
        price={0.1}
        label="Buy"
        img_url="https://cnft.tools/static/assets/projectthumbs/pussyglam/9580.png"
      />
      <NftCard
        id="0003"
        price={0.1}
        label="Buy"
        img_url="https://cnft.tools/static/assets/projectthumbs/pussyglam/7686.png"
      />
      <NftCard
        id="0003"
        price={0.1}
        label="Buy"
        img_url="https://cnft.tools/static/assets/projectthumbs/pussyglam/7686.png"
      />
    </div>
    <div class="gradient-text-light mt-72">
      <p>Nuestra colección de cryptoarte</p>
    </div>
    <div class="flex w-full justify-center gradient-text-light mt-72">
      <Button label="Edición Limitada" url="" />
    </div>
  </div>
</div>

<style>
  #wrapper {
    position: relative;
  }
  #model {
    position: absolute;
    z-index: -1;
  }
</style>
