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

    let w;
    let h;

    let memoryData = JSON.parse(memory_data);
    console.log("memory_data", memoryData[0]);

    p5.preload = () => {};

    p5.setup = () => {
      w = p5.windowWidth / 8;
      h = p5.windowHeight / 3;
      canv = p5.createCanvas(w, h, p5.WEBGL);
      canv.parent("generative");
      p5.background(0, 0);
      p5.angleMode(p5.DEGREES);
      p5.noiseDetail(10, 0.5);
      //p5.textureMode(p5.NORMAL);
      // p5.rectMode(p5.CORNER);
    };

    p5.draw = () => {
      p5.background(255);

      p5.ambientLight(250);
      //pointLight(255, 255, 255, -100, 100, 400);
      //specularMaterial(250);
      p5.fill(
        p5.random(255),
        p5.random(255),
        p5.random(255),
        p5.random(15, 15)
      );
      p5.stroke(20);
      p5.stroke(255, 200, 255);
      p5.strokeWeight(1);
      p5.rotateX(p5.frameCount / 10);
      //rotateY(frameCount / 100);

      for (let i = 0; i < 4; i++) {
        //p5.push(0);
        // p5.ambientMaterial(255, 255, 255, 60);
        p5.rotateY(p5.frameCount / 10);
        p5.rotateX(p5.frameCount / 8);
        p5.rotateZ(p5.frameCount / 6);

        // p5.box(
        //   (w / 2) * p5.noise(p5.millis() / 10),
        //   h * p5.noise(p5.frameCount / 10),
        //   (w / 4) * p5.cos(p5.noise(p5.frameCount))
        // );
        p5.box(w / 2);
        //p5.pop();
      }
    };

    p5.windowResized = () => {
      p5.resizeCanvas(w, h);
    };
  };
</script>
