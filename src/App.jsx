import { Canvas } from "@react-three/fiber";
import "./App.css";
import Chess from "./Components/Chess";
import { Suspense } from "react";
import Loadingscreen from "./Components/Loadingscreen";
import {
  EffectComposer,
  Vignette,
  HueSaturation,
  Bloom,
  DepthOfField,
  SMAA,
} from "@react-three/postprocessing";

import { BlendFunction, KernelSize, Resolution } from "postprocessing";

function App() {
  return (
    <div className="App">
      <Loadingscreen />
      <Canvas gl={{ antialias: false }} pixelRatio={window.devicePixelRatio * 0.6} performance={{min:0.1}}camera={{ fov: 30, position: [25, 0, 20] }}>
        <Suspense>
          <Chess></Chess>
          <EffectComposer>
            <Bloom
              intensity={0.2} // The bloom intensity.
              blurPass={undefined} // A blur pass.
              kernelSize={KernelSize.LARGE} // blur kernel size
              luminanceThreshold={0.9} // luminance threshold. Raise this value to mask out darker elements in the scene.
              luminanceSmoothing={0.5} // smoothness of the luminance threshold. Range is [0, 1]
              mipmapBlur={false} // Enables or disables mipmap blur.
              resolutionX={Resolution.AUTO_SIZE} // The horizontal resolution.
              resolutionY={Resolution.AUTO_SIZE} // The vertical resolution.
            />
            <DepthOfField
              focusDistance={0} // where to focus
              focalLength={0.02} // focal length
              bokehScale={1.5} // bokeh size
            />
            <Vignette
              offset={0.1} // vignette offset
              darkness={0.3} // vignette darkness
              eskil={false} // Eskil's vignette technique
              blendFunction={BlendFunction.NORMAL} // blend mode
            />
            <HueSaturation
              blendFunction={BlendFunction.NORMAL} // blend mode
              hue={0} // hue in radians
              saturation={0.6} // saturation in radians
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
