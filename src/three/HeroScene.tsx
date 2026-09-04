import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float, Preload } from "@react-three/drei";
import * as THREE from "three";
import { ShaderWater } from "./ShaderWater";
import { useInViewport } from "./useInViewport";

function HeroBubbles({ count = 18 }: { count?: number }) {
  const ref = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const bubbles = useMemo(
    () =>
      Array.from({ length: count }, (_, index) => ({
        x: 0.85 + (index % 6) * 0.32 + (Math.random() - 0.5) * 0.18,
        y: -1.55 + Math.floor(index / 6) * 0.72 + Math.random() * 0.28,
        z: -0.6 + Math.random() * 0.5,
        size: 0.045 + Math.random() * 0.075,
        speed: 0.18 + Math.random() * 0.18,
        phase: Math.random() * Math.PI * 2,
      })),
    [count],
  );

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;

    bubbles.forEach((bubble, index) => {
      const rise = ((t * bubble.speed + bubble.phase) % 3.2) / 3.2;
      const y = -1.45 + rise * 2.7;
      const wobble = Math.sin(t * 0.9 + bubble.phase) * 0.055;
      dummy.position.set(bubble.x + wobble, y, bubble.z);
      dummy.scale.setScalar(bubble.size * (0.85 + rise * 0.45));
      dummy.updateMatrix();
      ref.current?.setMatrixAt(index, dummy.matrix);
    });

    ref.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 18, 18]} />
      <meshPhysicalMaterial
        color="#E6FDFF"
        roughness={0.04}
        metalness={0.02}
        transmission={0.84}
        thickness={0.18}
        ior={1.33}
        clearcoat={1}
        transparent
        opacity={0.42}
      />
    </instancedMesh>
  );
}

function MolecularRing() {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.z = t * 0.08;
    ref.current.rotation.y = Math.sin(t * 0.12) * 0.18;
  });

  const atoms = useMemo(
    () =>
      Array.from({ length: 6 }, (_, index) => {
        const angle = (index / 6) * Math.PI * 2;
        return [Math.cos(angle) * 0.55, Math.sin(angle) * 0.55, 0] as [
          number,
          number,
          number,
        ];
      }),
    [],
  );

  return (
    <group ref={ref}>
      {atoms.map((position, index) => (
        <mesh key={index} position={position}>
          <sphereGeometry args={[0.09, 18, 18]} />
          <meshPhysicalMaterial
            color="#DFFBFF"
            roughness={0.08}
            transmission={0.55}
            thickness={0.2}
            transparent
            opacity={0.58}
          />
        </mesh>
      ))}
      {atoms.map((position, index) => {
        const next = atoms[(index + 1) % atoms.length];
        const mid: [number, number, number] = [
          (position[0] + next[0]) / 2,
          (position[1] + next[1]) / 2,
          0,
        ];
        const angle = Math.atan2(next[1] - position[1], next[0] - position[0]);
        const length = Math.hypot(next[0] - position[0], next[1] - position[1]);

        return (
          <mesh
            key={`bond-${index}`}
            position={mid}
            rotation={[0, 0, angle + Math.PI / 2]}
          >
            <cylinderGeometry args={[0.008, 0.008, length, 8]} />
            <meshStandardMaterial
              color="#A4E7F0"
              emissive="#6FD7E6"
              emissiveIntensity={0.25}
              transparent
              opacity={0.34}
            />
          </mesh>
        );
      })}
    </group>
  );
}

function GlassIonizer() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.y = -0.2 + Math.sin(t * 0.22) * 0.08;
    group.current.position.y = Math.sin(t * 0.32) * 0.035;
  });

  return (
    <group ref={group} position={[1.55, -0.06, 0]} scale={0.86}>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.05, 2.15, 0.34]} />
        <meshPhysicalMaterial
          color="#BDEFF6"
          roughness={0.18}
          metalness={0.08}
          transmission={0.42}
          thickness={0.24}
          transparent
          opacity={0.34}
          clearcoat={1}
        />
      </mesh>

      <mesh position={[0, -0.2, 0.21]}>
        <boxGeometry args={[0.72, 1.1, 0.045]} />
        <meshStandardMaterial
          color="#133C62"
          emissive="#1A88A0"
          emissiveIntensity={0.18}
          roughness={0.38}
          transparent
          opacity={0.78}
        />
      </mesh>

      <mesh position={[-0.2, -0.2, 0.26]}>
        <boxGeometry args={[0.035, 1.4, 0.055]} />
        <meshStandardMaterial
          color="#8CCEDF"
          emissive="#6FD7E6"
          emissiveIntensity={0.5}
          roughness={0.28}
        />
      </mesh>

      <mesh position={[0.2, -0.2, 0.26]}>
        <boxGeometry args={[0.035, 1.4, 0.055]} />
        <meshStandardMaterial
          color="#F2D7B8"
          emissive="#FFB37A"
          emissiveIntensity={0.42}
          roughness={0.28}
        />
      </mesh>

      <mesh position={[0, 1.2, 0.03]}>
        <cylinderGeometry args={[0.19, 0.21, 0.18, 40]} />
        <meshStandardMaterial
          color="#EEF8FA"
          roughness={0.18}
          metalness={0.55}
        />
      </mesh>

      <mesh position={[0.25, 1.28, 0.02]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.035, 0.035, 0.66, 32]} />
        <meshStandardMaterial
          color="#D8EFF3"
          roughness={0.2}
          metalness={0.62}
        />
      </mesh>

      <mesh position={[0, -1.18, 0]}>
        <boxGeometry args={[1.16, 0.08, 0.46]} />
        <meshStandardMaterial
          color="#DDEBF0"
          roughness={0.16}
          metalness={0.5}
        />
      </mesh>
    </group>
  );
}

function HeroComposition() {
  const { viewport } = useThree();
  const mobileScale = viewport.width < 6 ? 0.72 : 1;

  return (
    <group position={[0.35, 0.02, 0]} scale={mobileScale}>
      <Float speed={0.85} rotationIntensity={0.08} floatIntensity={0.24}>
        <GlassIonizer />
      </Float>

      <HeroBubbles count={18} />

      <Float speed={0.72} rotationIntensity={0.18} floatIntensity={0.22}>
        <group position={[2.62, 0.94, -1.25]} scale={0.54}>
          <MolecularRing />
        </group>
      </Float>

      <Float speed={0.62} rotationIntensity={0.12} floatIntensity={0.2}>
        <group position={[0.52, -1.15, -1.4]} scale={0.38}>
          <MolecularRing />
        </group>
      </Float>
    </group>
  );
}

export function HeroScene() {
  const scrollRef = useRef(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const inView = useInViewport(wrapRef, "100px");
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (mq) setReduce(mq.matches);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const value = Math.min(window.scrollY / Math.max(window.innerHeight, 1), 1);
      scrollRef.current = value;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (reduce) {
    return (
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-700 to-aqua-400/30"
      />
    );
  }

  return (
    <div ref={wrapRef} className="absolute inset-0">
      <Canvas
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 1.35]}
        camera={{ position: [0.2, 0, 6.4], fov: 42 }}
        frameloop={inView ? "always" : "never"}
        className="absolute inset-0"
      >
        <Suspense fallback={null}>
          <ShaderWater scrollRef={scrollRef} />

          <ambientLight intensity={0.7} />
          <directionalLight
            position={[3.5, 4, 4.2]}
            intensity={0.72}
            color="#E7F8FB"
          />
          <pointLight
            position={[2.8, 1.4, 2.8]}
            intensity={1.25}
            color="#6FD7E6"
            distance={6}
          />
          <pointLight
            position={[1.1, -1.2, 2.2]}
            intensity={0.52}
            color="#FFB37A"
            distance={4}
          />

          <HeroComposition />

          <Environment preset="studio" />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
