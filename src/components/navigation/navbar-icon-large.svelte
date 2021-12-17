<script>
  //LIBS
  import { Motion } from "svelte-motion";
  import Icon from "@iconify/svelte";

  export let id, url;
</script>

<Motion whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.25 }} let:motion>
  <a href={url}>
    <div use:motion {id} class="">
      <div class="text-6xl color-anim-icon">
        <Icon icon={"akar-icons:" + id + "-fill"} />
      </div>
    </div>
  </a>
</Motion>
