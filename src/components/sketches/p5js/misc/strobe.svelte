<script>
  import { onMount } from "svelte";

  onMount(async () => {
    const p5Module = await import("p5");
    let P5 = p5Module.default;
    new P5(sketch);
  });

  const sketch = (p5) => {
    let canv;

    let w = p5.windowWidth;
    let h = p5.windowHeight;

    p5.preload = () => {};

    p5.setup = () => {
      canv = p5.createCanvas(w, h);
      canv.parent("vx");
      p5.background(255);
      p5.noStroke();
      p5.fill(0);
    };

    p5.draw = () => {
      p5.background(
        p5.random(220, 255),
        p5.random(220, 255),
        p5.random(220, 255)
      );
    };

    p5.windowResized = () => {
      p5.resizeCanvas(w, h);
    };
  };
</script>
