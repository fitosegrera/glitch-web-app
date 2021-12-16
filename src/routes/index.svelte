<script>
  //LIBS
  import { onMount } from "svelte";

  //COMPONENTS
  import Hero from "../components/sections/home/hero.svelte";
  import Section1 from "../components/sections/home/section1.svelte";
  import Section2 from "../components/sections/home/section2.svelte";
  import Section3 from "../components/sections/home/section3.svelte";

  //STORES
  import { memoryData, dataUrl } from "../stores/stores";

  let heroHeading =
    "%%xyz%% arte, tecnología, cultura, emprendimiento e innovación.";

  const fetchData = async () => {
    let res = await fetch($dataUrl).then((response) => response.json());
    $memoryData = JSON.stringify(res.data);
  };

  onMount(async () => {
    // fetchData();
  });
</script>

<Hero heading={heroHeading} subheading="" paragraph="" />
<Section1 />
<Section2 />
<Section3 />
