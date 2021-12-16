<script>
  //LIBS
  import { onMount } from "svelte";

  //COMPONENTS
  import HeroSection from "../components/sections/home/hero-section.svelte";
  import Section1 from "../components/sections/home/section1.svelte";
  import Section2 from "../components/sections/home/section2.svelte";
  import Section3 from "../components/sections/home/section3.svelte";
  import ContactSection from "../components/sections/home/contact-section.svelte";

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

<HeroSection heading={heroHeading} subheading="" paragraph="" />
<Section1 />
<Section2 />
<Section3 />
<ContactSection />
