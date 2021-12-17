<script>
  import AvatarCard from "../../cards/avatar-card.svelte";
</script>

<div
  id="wrapper"
  class="h-full text-4xl gradient-section-bg-light leading-8xl text-center font-bold pt-120 mt-120"
>
  <h1>🖖 ¿Quién? 🖖</h1>
  <div class="grid grid-cols-3 gap-72 mt-120">
    <div>
      <AvatarCard />
    </div>
    <div>
      <AvatarCard />
    </div>
    <div>
      <AvatarCard />
    </div>
    <div>
      <AvatarCard />
    </div>
    <div>
      <AvatarCard />
    </div>
  </div>
</div>

<style>
  #wrapper {
    /* position: relative; */
  }
</style>
