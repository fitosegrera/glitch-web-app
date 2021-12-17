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

    const textToWrite = "ENTRA AL GLITCHVERSE **";
    const SEGMENTS = 60;
    let mover = 0;
    //auto start variables
    let centerX, centerY, fontSize, INNER_RADIUS, RADIUS_VARIATION;

    p5.preload = () => {};

    p5.setup = () => {
      canv = p5.createCanvas(w, h);
      canv.parent("slide1");
      p5.background(255);
      p5.noStroke();
      p5.fill(0);

      centerX = 0;
      centerY = 0;

      let screenPct = p5.min(p5.height, p5.width) / 1000;
      fontSize = screenPct * 140;
      INNER_RADIUS = screenPct * 300;
      RADIUS_VARIATION = screenPct * 200;

      p5.textFont("Helvetica");
      p5.textSize(fontSize);
    };

    p5.draw = () => {
      p5.background(255, 50);
      // p5.background(
      //   p5.random(220, 255),
      //   p5.random(220, 255),
      //   p5.random(220, 255)
      // );

      p5.fill(p5.random(255), p5.random(255), p5.random(255));

      p5.noStroke();
      p5.translate(p5.width / 2, p5.height / 2);

      for (let n = 0; n < 10; n++) {
        //draw sphere

        p5.strokeWeight(3);
        p5.push();
        p5.scale(0.8 - n / 10);
        p5.beginShape();
        for (let i = 0; i < SEGMENTS; i++) {
          let p0 = pointForIndex(i / SEGMENTS);
          p5.vertex(p0.x, p0.y);
        }
        p5.endShape(p5.CLOSE);
        p5.pop();
      }

      let btnSize = 200;

      p5.fill(
        p5.map(p5.mouseX, p5.width, 0, 0, 255),
        p5.map(p5.mouseY, 0, p5.height, 0, 255),
        p5.map(p5.mouseX, 0, p5.width, 0, 255)
      );
      p5.ellipse(
        p5.map(p5.mouseX, 0, p5.width, -btnSize / 4, btnSize / 4),
        p5.map(p5.mouseY, 0, p5.height, -btnSize / 4, btnSize / 4),
        btnSize
      );

      //draw text
      let pct =
        p5.atan2(p5.mouseY - centerY, p5.mouseX - centerX) +
        mover / 180 / p5.TWO_PI; //follow mouse
      //let pct = 0;//dont follow mouse
      let pixToAngularPct =
        1 / ((INNER_RADIUS + RADIUS_VARIATION / 2) * p5.TWO_PI);
      for (let i = 0; i < textToWrite.length; i++) {
        let charWidth = p5.textWidth(textToWrite.charAt(i));
        pct += (charWidth / 1.2) * pixToAngularPct;

        //calculate angle
        let leftP = pointForIndex(pct - 0.01);
        let rightP = pointForIndex(pct + 0.01);
        let angle = p5.atan2(leftP.y - rightP.y, leftP.x - rightP.x) + p5.PI;

        p5.push();
        let p = pointForIndex(pct);
        //apply angle
        p5.translate(p.x, p.y);
        p5.rotate(angle);
        p5.translate(-p.x, -p.y);

        p5.text(textToWrite.charAt(i), p.x - charWidth / 2, p.y);
        p5.pop();

        pct += (charWidth / 2) * pixToAngularPct;
      }

      mover++;
    };

    p5.windowResized = () => {
      p5.resizeCanvas(w, h);
    };

    const pointForIndex = (pct) => {
      const NOISE_SCALE = 1.5;
      let angle = pct * p5.TWO_PI;
      let cosAngle = p5.cos(angle);
      let sinAngle = p5.sin(angle);
      let time = p5.frameCount / 300;
      // let noiseValue = noise(NOISE_SCALE * cosAngle + NOISE_SCALE, NOISE_SCALE * sinAngle + NOISE_SCALE, time);
      let noiseValue = 0;
      let radius = INNER_RADIUS + RADIUS_VARIATION * noiseValue;
      return {
        x: radius * cosAngle + centerX,
        y: radius * sinAngle + centerY,
      };
    };
  };
</script>
