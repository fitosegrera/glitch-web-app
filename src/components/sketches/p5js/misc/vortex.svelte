<script>
  import { onMount } from "svelte";

  onMount(async () => {
    const p5Module = await import("p5");
    let P5 = p5Module.default;
    new P5(sketch);
  });

  const sketch = (p5) => {
    let canv;

    let w = 800;
    let h = 200;

    p5.preload = () => {};

    p5.setup = () => {
      canv = p5.createCanvas(w, h);
      canv.parent("vx");
      p5.background(255);
      p5.noStroke();
      p5.fill(0);
    };

    p5.draw = () => {
      p5.background(255, 70);

      let t = p5.millis() / 32000;
      let n = 3;

      for (let j = 1; j < 49; j++) {
        for (let i = 0; i < n; i++) {
          let f = (i / n) * p5.TWO_PI;
          let r = p5.sin(f + 0) * 127 + 128;
          let g = p5.sin(f + 2) * 127 + 128;
          let b = p5.sin(f + 4) * 127 + 128;

          p5.fill(r, g, b);

          p5.ellipse(
            w / 2 + j * 15 * p5.sin((i / n) * p5.TWO_PI + t * j),
            h / 2 + j * 15 * p5.cos((i / n) * p5.TWO_PI + t * j),
            3,
            3
          );
        }
        n += 3;
      }
    };

    p5.windowResized = () => {
      p5.resizeCanvas(w, h);
    };
  };
</script>
