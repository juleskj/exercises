const body = document.querySelector("body");

window.addEventListener("mousemove", function (event) {
  console.log(`x: ${event.x} y: ${event.y}`);

  let lightnessProcent = Math.round(
    (event.clientX / this.window.innerWidth) * 100
  );

  lightnessProcent = lightnessProcent + "%";

  //her finder jeg hvilke hvilke procent den af skærmen jeg er ved
  let saturationProcent = Math.round(
    (event.clientY / this.window.innerHeight) * 100
  );

  //her laver jeg talet om til en sting med % så jeg kan bruge den til min bacgrounds farve
  saturationProcent = saturationProcent + "%";

  document.querySelector(".x-value").textContent = `${lightnessProcent}`;
  document.querySelector(".y-value").textContent = `${saturationProcent}`;

  console.log(lightnessProcent);
  console.log(saturationProcent);

  body.style.setProperty(
    "background-color",
    `hsl(325, ${saturationProcent}, ${lightnessProcent})`
  );
});
