import "./loading.css";
import logo from "./logo.png";
import { Html, useProgress } from "@react-three/drei";

export default function Loadingscreen() {
  return (
    <Html>
      <div className="loader">
        <div>
          <img src={logo} />
          <h1>MASTERMIND</h1>
          <p>Chess Academy</p>
          <h2>Loading</h2>
        </div>
      </div>
    </Html>
  );
}
