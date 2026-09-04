import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import { useScroll, useReducedMotion } from "framer-motion";

/* ─── Hexagonal water cluster ──────────────────────────────────────
   Soft, glassy ring of 6 oxygen atoms + 1 center, joined by faint
   aqua edges. Tuned DOWN so it sits behind copy, not over it.
   ─────────────────────────────────────────────────────────────── */
function HexagonCluster({
  position,
  scale = 1,
  speed = 0.5,
}: {
  position: [number, number, number];
  scale?: number;
  speed?: number;
}) {
  const groupRef = useRef<THREE.Group>(null);

  const { vertices, bonds } = useMemo(() => {
    const v: [number, number, number][] = [];
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      v.push([Math.cos(a) * 0.65, Math.sin(a) * 0.65, 0]);
    }
    const b: { mid: [number, number, number]; angle: number; len: number }[] =
      [];
    for (let i = 0; i < 6; i++) {
      const p1 = v[i];
      const p2 = v[(i + 1) % 6];
      b.push({
        mid: [(p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2, 0],
        angle: Math.atan2(p2[1] - p1[1], p2[0] - p1[0]),
        len: Math.hypot(p2[0] - p1[0], p2[1] - p1[1]),
      });
    }
    return { vertices: v, bonds: b };
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime * speed;
    groupRef.current.rotation.y = t * 0.32;
    groupRef.current.rotation.x = Math.sin(t * 0.22) * 0.16;
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {vertices.map((pos, i) => (
        <mesh key={`atom-${i}`} position={pos}>
          <sphereGeometry args={[0.2, 20, 20]} />
          <meshPhysicalMaterial
            color="#e7f8fb"
            metalness={0.1}
            roughness={0.08}
            transmission={0.6}
            ior={1.33}
            thickness={0.5}
            clearcoat={1}
            clearcoatRoughness={0.05}
            envMapIntensity={0.9}
            transparent
            opacity={0.55}
          />
        </mesh>
      ))}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.22, 20, 20]} />
        <meshPhysicalMaterial
          color="#cff3f7"
          metalness={0.15}
          roughness={0.08}
          transmission={0.55}
          ior={1.4}
          thickness={0.6}
          clearcoat={1}
          transparent
          opacity={0.55}
        />
      </mesh>
      {bonds.map((b, i) => (
        <mesh
          key={`bond-${i}`}
          position={b.mid}
          rotation={[0, 0, b.angle + Math.PI / 2]}
        >
          <cylinderGeometry args={[0.012, 0.012, b.len, 8]} />
          <meshStandardMaterial
            color="#a4e7f0"
            emissive="#6fd7e6"
            emissiveIntensity={0.35}
            transparent
            opacity={0.35}
          />
        </mesh>
      ))}
    </group>
  );
}

/* ─── Bubbles — rare, slow, glassy ────────────────────────────── */
function Bubbles({ count = 14 }: { count?: number }) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const bubbles = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        x: (Math.random() - 0.5) * 24,
        y: -12 + Math.random() * 8,
        z: -5 - Math.random() * 4,
        speed: 0.22 + Math.random() * 0.35,
        size: 0.18 + Math.random() * 0.32,
        wobblePhase: Math.random() * Math.PI * 2,
        wobbleAmp: 0.15 + Math.random() * 0.3,
      })),
    [count]
  );

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    bubbles.forEach((b, i) => {
      b.y += b.speed * delta;
      if (b.y > 12) {
        b.y = -12;
        b.x = (Math.random() - 0.5) * 24;
      }
      const wobble = Math.sin(t * 1.1 + b.wobblePhase) * b.wobbleAmp;
      dummy.position.set(b.x + wobble, b.y, b.z);
      dummy.scale.setScalar(b.size);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh
      ref={meshRef}
      args={[undefined, undefined, count]}
      frustumCulled={false}
    >
      <sphereGeometry args={[1, 12, 12]} />
      <meshPhysicalMaterial
        color="#e7f8fb"
        metalness={0.05}
        roughness={0}
        transmission={0.92}
        ior={1.33}
        thickness={0.15}
        transparent
        opacity={0.32}
        clearcoat={1}
        clearcoatRoughness={0}
      />
    </instancedMesh>
  );
}

/* ─── Calm camera — gentle drift, no aggressive dolly ─────────── */
function CalmCamera() {
  const { camera } = useThree();
  const { scrollYProgress } = useScroll();

  useFrame((state) => {
    const p = scrollYProgress.get();
    const t = state.clock.elapsedTime;
    // Tiny breathing motion + faint scroll parallax — never dizzying
    const targetZ = 8 - p * 0.6;
    const targetX = Math.sin(t * 0.08) * 0.25;
    const targetY = -p * 0.4 + Math.cos(t * 0.06) * 0.15;
    camera.position.x += (targetX - camera.position.x) * 0.03;
    camera.position.y += (targetY - camera.position.y) * 0.03;
    camera.position.z += (targetZ - camera.position.z) * 0.03;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

function SceneContents() {
  return (
    <>
      {/* Soft warm fill — matches lighter palette */}
      <ambientLight intensity={0.65} />
      <directionalLight position={[5, 4, 5]} intensity={0.45} color="#e7f8fb" />
      <pointLight position={[-6, 3, 3]} intensity={0.55} color="#a4e7f0" />
      <pointLight position={[6, -3, 2]} intensity={0.5} color="#cff3f7" />

      <CalmCamera />

      {/* Only 3 clusters — pushed back, faint */}
      <Float speed={1.0} rotationIntensity={0.2} floatIntensity={0.35}>
        <HexagonCluster position={[-6.5, 2.8, -6]} scale={1} speed={0.45} />
      </Float>
      <Float speed={0.85} rotationIntensity={0.2} floatIntensity={0.35}>
        <HexagonCluster position={[6.8, -2.4, -7]} scale={0.85} speed={0.4} />
      </Float>
      <Float speed={1.1} rotationIntensity={0.25} floatIntensity={0.4}>
        <HexagonCluster position={[0.5, 4.2, -8]} scale={0.7} speed={0.55} />
      </Float>

      {/* Light bubbles — sparse, well behind copy */}
      <Bubbles count={12} />
    </>
  );
}

export function AmbientScene() {
  const reduce = useReducedMotion();

  if (reduce) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 55 }}
        dpr={[1, 1.4]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        frameloop="always"
      >
        <Suspense fallback={null}>
          <SceneContents />
        </Suspense>
      </Canvas>
      {/* Readability scrim — soft radial darkening at edges + center, keeps copy crisp */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(14,26,54,0.45) 0%, rgba(14,26,54,0.25) 60%, rgba(14,26,54,0) 100%)",
        }}
      />
    </div>
  );
}
