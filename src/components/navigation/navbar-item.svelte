<script>
  //LIBS
  import { Motion } from "svelte-motion";

  export let label, id;

  const handleMouseEnter = async () => {
    let underline = document.getElementById(id);
    underline.style.background =
      "linear-gradient(90deg,rgb(255, 0, 76) 10%, rgb(9, 255, 0) 30%, rgb(251, 255, 0) 90%)";
  };

  const handleMouseLeave = async () => {
    let underline = document.getElementById(id);
    underline.style.background = "#00000000";
  };
</script>

<div
  id="wrapper"
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
  class="text-xl w-auto"
>
  <Motion whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.25 }} let:motion>
    <div class="text-primary-dark color-anim-txt" use:motion>
      <a href={"/" + id}>{label}</a>
      <div {id} class="h-4" />
    </div>
  </Motion>
</div>

<style>
  #wrapper:hover {
  }

  a {
    font-weight: 400;
  }
</style>
