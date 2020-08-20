import React, { useEffect, useRef } from "react";
import { CanvasContainer } from "./BouncingDvd.styles";
import useWidth from "../../../hooks/useWidth.hooks";
const BouncingDvd = () => {
  const width = useWidth().width;
  const height = useWidth().height;
  const el = document.getElementById("app");
  const style = getComputedStyle(el);

  let scale = 0.5;
  //0.11 0.5
  //40 25
  let logoColor;
  const canvasRef = useRef(null);
  let dvd = {
    x: 300,
    y: 400,
    xSpeed: 8,
    ySpeed: 8,
    speed: 25,
    img: new Image(),
    background: style.getPropertyValue("--secondary-color"),
  };

  useEffect(() => {
    main();
  }, []);
  function vh(v) {
    var h = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
    return (v * h) / 100;
  }

  const main = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const imgPath = "https://i.ibb.co/pJ8CK41/DVD-1.png";
    dvd.img.src = imgPath;
    canvas.width = width;
    //
    //
    canvas.height = height - vh(7);

    // pickColor();
    update();
  };
  const update = () => {
    let ctx;
    setTimeout(() => {
      const canvas = canvasRef.current;
      if (canvas) {
        ctx = canvas.getContext("2d");
        ctx.fillStyle = dvd.background;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = logoColor || "#82d8d8";
        ctx.fillRect(
          dvd.x,
          dvd.y,
          dvd.img.width * scale,
          dvd.img.height * scale
        );
        ctx.drawImage(
          dvd.img,
          dvd.x,
          dvd.y,
          dvd.img.width * scale,
          dvd.img.height * scale
        );
        dvd.x += dvd.xSpeed;
        dvd.y += dvd.ySpeed;
        checkHitBox();
        update();
      }
    }, dvd.speed);
  };
  const checkHitBox = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      if (dvd.x + dvd.img.width * scale >= canvas.width || dvd.x <= 0) {
        dvd.xSpeed *= -1;

        pickColor();
      }

      if (dvd.y + dvd.img.height * scale >= canvas.height || dvd.y <= 0) {
        dvd.ySpeed *= -1;
        pickColor();
      }
    }
  };
  function pickColor() {
    let r, g, b;
    r = Math.random() * (254 - 0) + 0;
    g = Math.random() * (254 - 0) + 0;
    b = Math.random() * (254 - 0) + 0;

    logoColor = "rgb(" + r + "," + g + ", " + b + ")";
  }

  return (
    <CanvasContainer>
      {/* <h1>{width}</h1>
      <h1>{height}</h1> */}
      <canvas id="tv-screen" ref={canvasRef} width={1000} height={1000} />
    </CanvasContainer>
  );
};
export default BouncingDvd;
