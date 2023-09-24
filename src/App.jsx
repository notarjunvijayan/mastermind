import { Canvas } from '@react-three/fiber';
import './App.css';
import Chess from './Components/Chess'
import { OrbitControls } from '@react-three/drei';
import { Loader } from '@react-three/drei';
import { Suspense } from 'react';
import Loadingscreen from './Components/Loadingscreen';

function App() {
  return (
    <div className="App">
      <Loadingscreen/>
      <Canvas camera={{fov:30, position: [25,0,20]}}>
        <Suspense>
          <Chess></Chess>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
