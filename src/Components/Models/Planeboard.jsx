import React, { useLayoutEffect, useRef } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useFrame, useLoader } from "@react-three/fiber";
import gsap from "gsap";
import { Plane, useTexture, useScroll } from "@react-three/drei";

export default function Planeboard(props) {
  const ref = useRef();
  const tl = useRef();
  const scroll = useScroll();


  //Animation
  useFrame((state, delta) => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });
  useLayoutEffect(() => {
    tl.current = gsap.timeline({
      defaults: { duration: 10, ease: "power1.inOut" },
    });
    tl.current.to(ref.current.position, { y: 10 }, 1);
  }, []);

  //Texture Loading
  const [colorMap, aoMap, normalMap, dispMap, bumpMap] = useLoader(
    TextureLoader,
    [
      "/texturemap/WoodFlooringAshSuperWhite001_COL_2K.jpg",
      "/texturemap/WoodFlooringAshSuperWhite001_AO_2K.jpg",
      "/texturemap/WoodFlooringAshSuperWhite001_NRM_2K.png",
      "/texturemap/WoodFlooringAshSuperWhite001_DISP_2K.jpg",
      "/texturemap/WoodFlooringAshSuperWhite001_BUMP_2K.jpg",
    ]
  );

  //Return Background Component
  return (
    <group ref={ref}>
      <Plane
        receiveShadow
        position={[-15, 0, -20]}
        rotation={[0, 0.9, 0]}
        scale={50}
        matrixWorldAutoUpdate={false}
      >
        <planeGeometry />
        <meshStandardMaterial
          map={colorMap}
          aoMap={aoMap}
          normalMap={normalMap}
          displacementMap={dispMap}
          bumpMap={bumpMap}
          color="#faebd7"
          metalness={0.35}
          roughness={0.45}
        />
      </Plane>
    </group>
  );
}

//Texture Preload
useTexture.preload("/texturemap/WoodFlooringAshSuperWhite001_COL_2K.jpg");
useTexture.preload("/texturemap/WoodFlooringAshSuperWhite001_AO_2K.jpg");
useTexture.preload("/texturemap/WoodFlooringAshSuperWhite001_NRM_2K.png");
useTexture.preload("/texturemap/WoodFlooringAshSuperWhite001_DISP_2K.jpg");
useTexture.preload("/texturemap/WoodFlooringAshSuperWhite001_BUMP_2K.jpg");
