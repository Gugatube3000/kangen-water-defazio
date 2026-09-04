import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

type IonizerSilhouetteProps = {
  position?: [number, number, number];
  scale?: number;
};

export function IonizerSilhouette({
  position = [0, 0, 0],
  scale = 1,
}: IonizerSilhouetteProps) {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.18;
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={0.2} floatIntensity={0.8}>
      <group ref={group} position={position} scale={scale}>
        {/* Body — soft rounded slab */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.5, 2.4, 0.55]} />
          <MeshTransmissionMaterial
            color="#A4E7F0"
            thickness={0.5}
            roughness={0.08}
            transmission={1}
            ior={1.35}
            chromaticAberration={0.03}
            samples={3}
            resolution={128}
            backside={false}
          />
        </mesh>

        {/* Top spout */}
        <mesh position={[0, 1.45, 0]}>
          <cylinderGeometry args={[0.18, 0.22, 0.55, 32]} />
          <meshStandardMaterial
            color="#E7ECF3"
            metalness={0.85}
            roughness={0.2}
          />
        </mesh>

        {/* Cap */}
        <mesh position={[0, 1.78, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 0.06, 32]} />
          <meshStandardMaterial
            color="#6FD7E6"
            emissive="#6FD7E6"
            emissiveIntensity={0.6}
            metalness={0.6}
            roughness={0.25}
          />
        </mesh>

        {/* Display ring */}
        <mesh position={[0, 0.45, 0.28]} rotation={[0, 0, 0]}>
          <torusGeometry args={[0.42, 0.018, 16, 64]} />
          <meshStandardMaterial
            color="#6FD7E6"
            emissive="#6FD7E6"
            emissiveIntensity={1.2}
            metalness={0.2}
            roughness={0.4}
          />
        </mesh>

        {/* Subtle plates inside */}
        {Array.from({ length: 5 }).map((_, i) => (
          <mesh key={i} position={[0, -0.5 + i * 0.18, 0.08]}>
            <boxGeometry args={[1.1, 0.02, 0.32]} />
            <meshStandardMaterial
              color="#48C7DC"
              emissive="#48C7DC"
              emissiveIntensity={0.3}
              metalness={0.8}
              roughness={0.4}
            />
          </mesh>
        ))}

        {/* Hairline base */}
        <mesh position={[0, -1.25, 0]}>
          <boxGeometry args={[1.4, 0.06, 0.5]} />
          <meshStandardMaterial
            color="#D7DEEA"
            metalness={0.9}
            roughness={0.15}
          />
        </mesh>
      </group>
    </Float>
  );
}
