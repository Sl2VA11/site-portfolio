import React from 'react';
import { useGLTF } from '@react-three/drei';

export function ModelScene(props) {
  const { nodes, materials } = useGLTF('/scene.gltf');
  const scaleFactor = [2, 2, 2];
  return (
    <group {...props} dispose={null} scale={scaleFactor}>
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <group position={[0.01, 0.09, 0.03]} scale={0.26}>
            <mesh
              geometry={nodes.Cube012_key_0.geometry}
              material={materials.material}
            />
            <mesh
              geometry={nodes.Cube012_key_0_1.geometry}
              material={materials.material}
            />
            <mesh
              geometry={nodes.Cube012_key_0_2.geometry}
              material={materials.material}
            />
            <mesh
              geometry={nodes.Cube012_key002_0.geometry}
              material={materials['key.002']}
            />
            <mesh
              geometry={nodes.Cube012_Material026_0.geometry}
              material={materials['Material.026']}
            />
          </group>
          <group position={[-0.4, 0.21, 0.03]} scale={0}>
            <mesh
              geometry={nodes.Cube013_body_0.geometry}
              material={materials.body}
            />
            <mesh
              geometry={nodes.Cube013_body_0_1.geometry}
              material={materials.body}
            />
            <mesh
              geometry={nodes.Cube013_body_0_2.geometry}
              material={materials.body}
            />
            <mesh
              geometry={nodes.Cube013_body_0_3.geometry}
              material={materials.body}
            />
            <mesh
              geometry={nodes.Cube013_body_0_4.geometry}
              material={materials.body}
            />
            <mesh
              geometry={nodes.Cube013_body_0_5.geometry}
              material={materials.body}
            />
            <mesh
              geometry={nodes.Cube013_body_0_6.geometry}
              material={materials.body}
            />
            <mesh
              geometry={nodes.Cube013_body_0_7.geometry}
              material={materials.body}
            />
            <mesh
              geometry={nodes.Cube013_body_0_8.geometry}
              material={materials.body}
            />
            <mesh
              geometry={nodes.Cube013_body_0_9.geometry}
              material={materials.body}
            />
            <mesh
              geometry={nodes.Cube013_body_0_10.geometry}
              material={materials.body}
            />
            <mesh
              geometry={nodes.Cube013_body_0_11.geometry}
              material={materials.body}
            />
            <mesh
              geometry={nodes.Cube013_body_0_12.geometry}
              material={materials.body}
            />
            <mesh
              geometry={nodes.Cube013_body_0_13.geometry}
              material={materials.body}
            />
            <mesh
              geometry={nodes.Cube013_body_0_14.geometry}
              material={materials.body}
            />
            <mesh
              geometry={nodes.Cube013_body_0_15.geometry}
              material={materials.body}
            />
            <mesh
              geometry={nodes.Cube013_body_0_16.geometry}
              material={materials.body}
            />
            <mesh
              geometry={nodes.Cube013_body_0_17.geometry}
              material={materials.body}
            />
            <mesh
              geometry={nodes.Cube013_body_0_18.geometry}
              material={materials.body}
            />
          </group>
          <group position={[0.32, 0.21, 0.03]} scale={0}>
            <mesh
              geometry={nodes.Cube014_body_0.geometry}
              material={materials.body}
            />
            <mesh
              geometry={nodes.Cube014_body_0_1.geometry}
              material={materials.body}
            />
            <mesh
              geometry={nodes.Cube014_body_0_2.geometry}
              material={materials.body}
            />
            <mesh
              geometry={nodes.Cube014_body_0_3.geometry}
              material={materials.body}
            />
            <mesh
              geometry={nodes.Cube014_body_0_4.geometry}
              material={materials.body}
            />
            <mesh
              geometry={nodes.Cube014_body_0_5.geometry}
              material={materials.body}
            />
            <mesh
              geometry={nodes.Cube014_body_0_6.geometry}
              material={materials.body}
            />
            <mesh
              geometry={nodes.Cube014_body_0_7.geometry}
              material={materials.body}
            />
            <mesh
              geometry={nodes.Cube014_body_0_8.geometry}
              material={materials.body}
            />
            <mesh
              geometry={nodes.Cube014_black001_0.geometry}
              material={materials['black.001']}
            />
            <mesh
              geometry={nodes.Cube014_black001_0_1.geometry}
              material={materials['black.001']}
            />
            <mesh
              geometry={nodes.Cube014_black001_0_2.geometry}
              material={materials['black.001']}
            />
            <mesh
              geometry={nodes.Cube014_black001_0_3.geometry}
              material={materials['black.001']}
            />
            <mesh
              geometry={nodes.Cube014_black001_0_4.geometry}
              material={materials['black.001']}
            />
            <mesh
              geometry={nodes.Cube014_black001_0_5.geometry}
              material={materials['black.001']}
            />
            <mesh
              geometry={nodes.Cube014_black001_0_6.geometry}
              material={materials['black.001']}
            />
            <mesh
              geometry={nodes.Cube014_black001_0_7.geometry}
              material={materials['black.001']}
            />
            <mesh
              geometry={nodes.Cube014_black001_0_8.geometry}
              material={materials['black.001']}
            />
            <mesh
              geometry={nodes.Cube014_black001_0_9.geometry}
              material={materials['black.001']}
            />
            <mesh
              geometry={nodes.Cube014_black001_0_10.geometry}
              material={materials['black.001']}
            />
            <mesh
              geometry={nodes.Cube014_black001_0_11.geometry}
              material={materials['black.001']}
            />
          </group>
          <group position={[0, 0, 0.02]} rotation={[-0.02, 0, 0]}>
            <mesh
              geometry={nodes.Cube021_body_0.geometry}
              material={materials.body}
            />
            <mesh
              geometry={nodes.Cube021_Dark_0.geometry}
              material={materials.Dark}
            />
            <mesh
              geometry={nodes.Cube021_Material028_0.geometry}
              material={materials['Material.028']}
            />
          </group>
          <group
            position={[0, 0.28, 0.03]}
            rotation={[-0.26, 0, 0]}
            scale={0.26}
          >
            <group
              position={[0, 0.02, -0.05]}
              rotation={[1.81, 0, 0]}
              scale={1.06}
            >
              <mesh
                geometry={nodes.Cube016_screen_0.geometry}
                material={materials.screen}
              />
              <mesh
                geometry={nodes.Cube016_black002_0.geometry}
                material={materials['black.002']}
              />
              <mesh
                geometry={nodes.Cube016_body_0.geometry}
                material={materials.body}
              />
              <mesh
                geometry={nodes.Cube016_dark_0.geometry}
                material={materials.dark}
              />
              <mesh
                geometry={nodes.Cube016_glass002_0.geometry}
                material={materials['glass.002']}
              />
              <mesh
                geometry={nodes.Cube016_Material024_0.geometry}
                material={materials['Material.024']}
              />
              <mesh
                geometry={nodes.Cube016_Material025_0.geometry}
                material={materials['Material.025']}
              />
              <mesh
                geometry={nodes.Cube016_glass003_0.geometry}
                material={materials['glass.003']}
              />
              <mesh
                geometry={nodes['Cube016_Apple-logo_0'].geometry}
                material={materials['Apple-logo']}
              />
            </group>
            <mesh
              geometry={nodes.Text003_Material029_0.geometry}
              material={materials['Material.029']}
              position={[0.01, -0.01, 0.06]}
              rotation={[1.81, 0, 0]}
              scale={[0.04, 0.05, 0.04]}
            />
          </group>
          <mesh
            geometry={nodes.Cube010_black_0.geometry}
            material={materials.black}
            position={[-0.39, 0.19, 0.02]}
            scale={[0.01, 0, 0]}
          />
          <mesh
            geometry={nodes.Cube011_key_0.geometry}
            material={materials.material}
            position={[0.14, 0.17, 0.03]}
            scale={0.26}
          />
          <mesh
            geometry={nodes.Cube015_body_0.geometry}
            material={materials.body}
            position={[0, -0.15, 0.02]}
            scale={0.12}
          />
          <mesh
            geometry={nodes.Cube017_black_0.geometry}
            material={materials.black}
            position={[-0.39, 0.19, 0.02]}
            scale={[0.01, 0, 0]}
          />
          <mesh
            geometry={nodes.Cube018_black003_0.geometry}
            material={materials['black.003']}
            position={[-0.39, 0.18, 0.02]}
            scale={[0.01, 0.01, 0]}
          />
          <mesh
            geometry={nodes.Cube019_black_0.geometry}
            material={materials.black}
            position={[-0.39, 0.23, 0.02]}
            scale={[0.01, 0, 0]}
          />
          <mesh
            geometry={nodes.Cube020_black_0.geometry}
            material={materials.black}
            position={[-0.39, 0.23, 0.02]}
            scale={[0.01, 0, 0]}
          />
          <mesh
            geometry={nodes.Cube022_black003_0.geometry}
            material={materials['black.003']}
            position={[-0.39, 0.22, 0.02]}
            scale={[0.01, 0.01, 0]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/scene.gltf');
