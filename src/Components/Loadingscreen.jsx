import "./loading.css";
import logo from "./logo.png";
import { Html, useProgress } from "@react-three/drei";
import { motion } from "framer-motion";

export default function Loadingscreen() {
  const progress = useProgress();
  return (
    <Html>
      <motion.div className="loader">
        <div>
          <img src={logo} />
          <h1>MASTERMIND</h1>
          <p>Chess Academy</p>
          <p className="load-percent">Loading {progress.progress.toFixed()}%</p>
        </div>
      </motion.div>
    </Html>
  );
}
