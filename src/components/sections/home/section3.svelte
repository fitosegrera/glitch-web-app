<script>
  import AvatarCard from "../../cards/avatar-card.svelte";
</script>

<div
  id="wrapper"
  class="h-800 text-6xl leading-2xl text-primary-dark text-center font-bold mt-120"
>
  <h1>#Meet the team</h1>
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
