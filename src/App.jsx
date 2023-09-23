import { Canvas } from '@react-three/fiber';
import './App.css';
import Chess from './Components/Chess'
import { OrbitControls } from '@react-three/drei';

function App() {
  return (
    <div className="App">
      <Canvas camera={{fov:30, position: [25,0,20]}}>
        <Chess></Chess>
      </Canvas>
    </div>
  );
}

export default App;
