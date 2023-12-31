import React, { useLayoutEffect, useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import gsap from "gsap";
import Planeboard from './Planeboard.jsx'
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import "./queen.css";
export const FLOOR_HEIGHT = 3;
export const NB_FLOORS = 3;

export function Model(props) {
  const { nodes, materials } = useLoader(GLTFLoader, "/queen.glb");

  const ref = useRef();
  const tl = useRef();
  const chess = useRef();
  const scroll = useScroll();

  const isMobile = window.innerWidth < 768;

  if (isMobile) {
    chess.visible = false;
  }
  useFrame((state, delta) => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline({
      defaults: { duration: 1, ease: "power1.inOut" },
    });

    tl.current
      .to(ref.current.rotation, { y: -0.5 }, 0.2)
      .to(ref.current.position, { x: 5, z: 2.5 }, 0.2)

      .to(ref.current.rotation, { y: -1.5 }, 1.5)
      .to(ref.current.position, { x: 22, y: 0, z: -10 }, 1.5)

      .to(ref.current.rotation, { y: -2.5 }, 3)
      .to(ref.current.position, { x: 37, y: 0, z: 9 }, 3)

      .to(ref.current.rotation, { y: -2, z: 1 }, 4.5)
      .to(ref.current.position, { x: 23, y: -13, z: 9 }, 4.5);
  }, []);

  return (
    <>
      <Planeboard/>
      <group {...props} dispose={null} ref={ref}>
        <mesh
          ref={chess}
          castShadow
          geometry={nodes.queen_copy19_lambert4_0.geometry}
          material={materials.lambert4}
          position={[10, -6.5, 13]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={2}
        />
      </group>
    </>
  );
}

useGLTF.preload("/queen.glb");
