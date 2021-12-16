<script>
  //COMPONENTS
  import NftCard from "../../cards/nft-card.svelte";
  import Button from "../../buttons/limited-edition.svelte";
</script>

<div id="wrapper" class="h-960">
  <h1 class="text-4xl text-center font-bold">-- Nuestra Colección --</h1>
  <div
    class="flex flex-col pt-120 px-240 text-4xl leading-8xl text-secondary-light text-center justify-center items-center"
  >
    <div class="flex justify-center space-x-72">
      <NftCard
        id="0001"
        price={0.1}
        label="Buy NFT"
        img_url="https://cnft.tools/static/assets/projectthumbs/pussyglam/7.png"
      />
      <NftCard
        id="0002"
        price={0.1}
        label="Buy NFT"
        img_url="https://cnft.tools/static/assets/projectthumbs/pussyglam/9580.png"
      />
      <NftCard
        id="0003"
        price={0.1}
        label="Buy NFT"
        img_url="https://cnft.tools/static/assets/projectthumbs/pussyglam/7686.png"
      />
      <NftCard
        id="0003"
        price={0.1}
        label="Buy NFT"
        img_url="https://cnft.tools/static/assets/projectthumbs/pussyglam/7686.png"
      />
    </div>
    <div class="text-primary-dark mt-72 text-2xl">
      <span class="font-bold color-anim-icon-infinite text-4xl"
        >Próximamente</span
      >
      <p>encontrarás nuestra colección de cryptoarte aquí:</p>
    </div>
    <div class="flex w-full justify-center mt-72">
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
