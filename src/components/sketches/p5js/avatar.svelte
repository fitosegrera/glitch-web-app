<script>
  import { onMount } from "svelte";

  export let memory_data;

  onMount(async () => {
    const p5Module = await import("p5");
    let P5 = p5Module.default;
    new P5(sketch);

    // console.log(memory_data);
  });

  const sketch = (p5) => {
    let canv;

    let w = 400;
    let h = 400;

    p5.preload = () => {};

    p5.setup = () => {
      canv = p5.createCanvas(w, h);
      canv.parent("avatar");
      p5.background(0, 0);
      p5.angleMode(p5.DEGREES);
      p5.noiseDetail(10, 0.5);
    };

    p5.draw = () => {
      p5.background(255);
      p5.noStroke();
      p5.fill(255, 0, 255);
      p5.ellipse(p5.width / 2, p5.height / 2, w - 80);
    };

    p5.windowResized = () => {
      p5.resizeCanvas(w, h);
    };
  };
</script>
