import { Canvas } from "@react-three/fiber";
import "./App.css";
import Chess from "./Components/Chess";
import { Suspense } from "react";
import Loadingscreen from "./Components/Loadingscreen";
import {
  EffectComposer,
  Vignette,
  HueSaturation,
} from "@react-three/postprocessing";

import { BlendFunction } from "postprocessing";

function App() {
  return (
    <div className="App">
      <Canvas
        gl={{ antialias: false }}
        pixelRatio={window.devicePixelRatio * 0.6}
        performance={{ min: 0.5 }}
        camera={{ fov: 30, position: [25, 0, 20] }}
      >
        <Suspense fallback={<Loadingscreen />}>
          <Chess></Chess>
          <EffectComposer>
            <Vignette
              offset={0.1} // vignette offset
              darkness={0.3} // vignette darkness
              eskil={false} // Eskil's vignette technique
              blendFunction={BlendFunction.NORMAL} // blend mode
            />
            <HueSaturation
              blendFunction={BlendFunction.NORMAL} // blend mode
              hue={0} // hue in radians
              saturation={0.25} // saturation in radians
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
