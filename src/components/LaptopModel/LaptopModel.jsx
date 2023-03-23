import { Model } from "assets/macbook/Scene";
import { Canvas } from "react-three-fiber";
import { Environment, OrbitControls, PerspectiveCamera} from "@react-three/drei";
import { Suspense } from "react";
import { ModelScene } from "components/ModelScene/ModelScene";

export function LaptopModel() {
   return (
     <Canvas camera={{ fov: 14}}>
       <PerspectiveCamera rotation={[0.5, 24.5, -0.1]}>
         <ambientLight intensity={1.25} />
         <directionalLight intensity={0.4} />

         <Suspense fallback={null}>
           <ModelScene />
         </Suspense>

         <Environment preset={'night'} />
         <OrbitControls enableZoom={false} enablePan={false} />
       </PerspectiveCamera>
     </Canvas>
   );
}