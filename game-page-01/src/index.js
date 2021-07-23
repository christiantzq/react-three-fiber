import { render } from "react-dom";
import React, { Suspense, useEffect, useRef, useMemo } from "react";
import { Canvas, useThree, useFrame, extend } from "@react-three/fiber";
import { useGLTF, Stage, Stars } from "@react-three/drei";
import HtmlContent from "./components/HtmlContent";
import Categories from "./components/Categories";
import "./style.css";

function App() {
  const domContent = useRef();

  return (
    <Canvas
      colorManagement
      dpr={[1, 2]}
      camera={{ position: [0, 0, 10], fov: 50 }}
      gl={{ antialias: false }}
    >
      <color attach="background" args={["#051024"]} />

      <Stars />

      <HtmlContent portal={domContent} className="welcome">
        <h1>Hi, there!</h1>
        <h2>Welcome to my site.</h2>
        <h3>
          <span>my name is</span>&nbsp;
          <span className="italic"><strong>CHRISTIAN ZAMORA</strong></span>
        </h3>
        <Categories/>
      </HtmlContent>
    </Canvas>
  );
}

render(<App />, document.querySelector("#root"));
