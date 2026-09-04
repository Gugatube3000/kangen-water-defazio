import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import { useInViewport } from "./useInViewport";

function Droplet({ x, seed = 0 }: { x: number; seed?: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.position.y =
        Math.sin(clock.elapsedTime * 1.1 + seed) * 0.18;
      ref.current.rotation.y += 0.008;
    }
  });
  return (
    <mesh ref={ref} position={[x, 0, 0]}>
      <sphereGeometry args={[0.6, 48, 48]} />
      <meshPhysicalMaterial
        color="#A4E7F0"
        metalness={0.15}
        roughness={0.1}
        clearcoat={1}
        clearcoatRoughness={0.08}
        emissive="#6FD7E6"
        emissiveIntensity={0.25}
        transparent
        opacity={0.92}
      />
    </mesh>
  );
}

function ElectrolysisCore({ x }: { x: number }) {
  const group = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (group.current) group.current.rotation.y += dt * 0.6;
  });
  return (
    <group ref={group} position={[x, 0, 0]}>
      <mesh>
        <torusGeometry args={[0.55, 0.05, 12, 60]} />
        <meshStandardMaterial
          color="#6FD7E6"
          emissive="#6FD7E6"
          emissiveIntensity={1.4}
          metalness={0.4}
          roughness={0.3}
        />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.55, 0.04, 12, 60]} />
        <meshStandardMaterial
          color="#A4E7F0"
          emissive="#A4E7F0"
          emissiveIntensity={1.2}
          metalness={0.4}
          roughness={0.3}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.18, 24, 24]} />
        <meshStandardMaterial
          color="#F4F6FB"
          emissive="#A4E7F0"
          emissiveIntensity={1.1}
        />
      </mesh>
    </group>
  );
}

function Connector({ x }: { x: number }) {
  return (
    <mesh position={[x, 0, 0]}>
      <boxGeometry args={[0.6, 0.012, 0.012]} />
      <meshStandardMaterial
        color="#6FD7E6"
        emissive="#6FD7E6"
        emissiveIntensity={0.7}
      />
    </mesh>
  );
}

export function PipelineScene() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const inView = useInViewport(wrapRef);

  return (
    <div ref={wrapRef} className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0.4, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true }}
        frameloop={inView ? "always" : "never"}
        className="absolute inset-0"
      >
        <color attach="background" args={["#0B1228"]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 3, 4]} intensity={1.1} />
        <pointLight position={[-3, -2, 2]} intensity={0.6} color="#6FD7E6" />
        <pointLight position={[3, 2, -2]} intensity={0.4} color="#A4E7F0" />
        <Suspense fallback={null}>
          <Float speed={1} rotationIntensity={0.15} floatIntensity={0.5}>
            <Droplet x={-2.6} seed={0} />
          </Float>
          <Connector x={-1.7} />
          <Float speed={1.1} rotationIntensity={0.2} floatIntensity={0.4}>
            <mesh position={[-0.9, 0, 0]}>
              <cylinderGeometry args={[0.45, 0.45, 0.9, 48]} />
              <meshPhysicalMaterial
                color="#CFF3F7"
                metalness={0.2}
                roughness={0.15}
                clearcoat={1}
                clearcoatRoughness={0.1}
                transparent
                opacity={0.85}
              />
            </mesh>
          </Float>
          <Connector x={0} />
          <ElectrolysisCore x={0.9} />
          <Connector x={1.8} />
          <Float speed={1.3} rotationIntensity={0.18} floatIntensity={0.6}>
            <Droplet x={2.7} seed={2.1} />
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
}
