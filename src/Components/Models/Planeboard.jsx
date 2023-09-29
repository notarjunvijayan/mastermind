import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useFrame, useLoader } from "@react-three/fiber";
import { Plane } from "@react-three/drei";

export default function Planeboard() {
  const [colorMap, aoMap, normalMap, dispMap, metalMap] = useLoader(
    TextureLoader,
    [
      "/texturemap/WoodFlooringAshSuperWhite001_COL_2K.jpg",
      "/texturemap/WoodFlooringAshSuperWhite001_AO_2K.jpg",
      "/texturemap/WoodFlooringAshSuperWhite001_NRM_2K.png",
      "/texturemap/WoodFlooringAshSuperWhite001_DISP_2K.jpg",
      "/texturemap/WoodFlooringAshSuperWhite001_REFL_2K.jpg",
    ]
  );


  return (
    <group>
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
          color="#faebd7"
          metalnessMap={metalMap}
        />
      </Plane>
    </group>
  );
}
