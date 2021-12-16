<script>
  import { onMount } from "svelte";

  export let id;

  onMount(async () => {
    const p5Module = await import("p5");
    let P5 = p5Module.default;
    new P5(sketch);
  });

  const sketch = (p5) => {
    let canv;

    let w;
    let h;

    let model;

    p5.preload = () => {
      model = p5.loadModel("/assets/3d/glitch.stl");
    };

    p5.setup = () => {
      canv = p5.createCanvas(72, 72, p5.WEBGL);
      canv.parent(id);
      p5.background(0, 0);
      p5.angleMode(p5.DEGREES);
      p5.noiseDetail(10, 0.5);
      //p5.textureMode(p5.NORMAL);
      // p5.rectMode(p5.CORNER);
    };

    p5.draw = () => {
      p5.background(255, 0);

      p5.ambientLight(250);
      //pointLight(255, 255, 255, -100, 100, 400);
      //specularMaterial(250);
      // p5.fill(p5.random(255), p5.random(255), p5.random(255));
      p5.stroke(20);
      p5.stroke(p5.random(255), p5.random(255), p5.random(255));
      p5.strokeWeight(1);
      p5.rotateY(p5.frameCount / 10);
      p5.rotateX(p5.millis() / 100);
      p5.rotateZ(p5.frameCount / 2);
      p5.scale(65);
      p5.model(model);
    };

    p5.windowResized = () => {
      p5.resizeCanvas(w, h);
    };
  };
</script>
