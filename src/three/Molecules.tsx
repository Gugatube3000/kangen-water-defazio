import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

type MoleculesProps = {
  count?: number;
};

const tmpMatrix = new THREE.Matrix4();
const tmpQuat = new THREE.Quaternion();
const tmpScale = new THREE.Vector3(1, 1, 1);
const tmpPos = new THREE.Vector3();
const tmpEuler = new THREE.Euler();

export function Molecules({ count = 24 }: MoleculesProps) {
  const ref = useRef<THREE.InstancedMesh>(null);
  const { viewport } = useThree();

  const seeds = useMemo(() => {
    return new Array(count).fill(0).map(() => ({
      basePos: new THREE.Vector3(
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 4
      ),
      offset: Math.random() * 6.28,
      speed: 0.2 + Math.random() * 0.35,
      scale: 0.05 + Math.random() * 0.18,
      drift: 0.6 + Math.random() * 1.4,
    }));
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    const mx = state.mouse.x * 0.5;
    const my = state.mouse.y * 0.5;

    for (let i = 0; i < count; i++) {
      const s = seeds[i];
      const wobble = Math.sin(t * s.speed + s.offset);
      tmpPos.set(
        s.basePos.x + wobble * s.drift + mx * 0.4,
        s.basePos.y +
          Math.cos(t * s.speed * 0.8 + s.offset) * s.drift * 0.6 +
          my * 0.4,
        s.basePos.z + Math.sin(t * 0.3 + s.offset) * 0.4
      );
      tmpEuler.set(t * 0.2 + s.offset, t * 0.15 + s.offset, 0);
      tmpQuat.setFromEuler(tmpEuler);
      tmpScale.setScalar(s.scale);
      tmpMatrix.compose(tmpPos, tmpQuat, tmpScale);
      ref.current.setMatrixAt(i, tmpMatrix);
    }
    ref.current.instanceMatrix.needsUpdate = true;
  });

  const visibleCount = Math.min(
    count,
    Math.max(12, Math.round(viewport.width * 4))
  );

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, visibleCount]}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color="#CFF3F7"
        roughness={0.25}
        metalness={0.4}
        emissive="#6FD7E6"
        emissiveIntensity={0.4}
        transparent
        opacity={0.75}
      />
    </instancedMesh>
  );
}
