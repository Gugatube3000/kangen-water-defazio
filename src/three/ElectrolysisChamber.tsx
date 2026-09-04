import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

/* ─── Electrolysis Chamber — site hero ───────────────────────────
   Tells the actual story of what Kangen does:
     • Two electrodes (cathode left = reducing, anode right = oxidizing)
     • Water molecules tumble between them, occasionally split
     • H₂ gas (paired hydrogens) rises from the cathode
     • O₂ (lone, larger) rises from the anode
     • Free electrons stream cathode-ward
     • Faint electric arcs flash between plates
     • Hex water clusters drift in the back

   Composition: action centered around CHAMBER_X = +1.2 (right of center)
   so the left-side hero copy stays readable.
   ────────────────────────────────────────────────────────────── */

const CHAMBER_X = 1.2;
const CHAMBER_Y = 0;
const ELECTRODE_GAP = 1.85;

/* ─── Electrode plate — glassy metal with glowing edge ─────────── */
function Electrode({
  side,
  color,
  glow,
}: {
  side: "cathode" | "anode";
  color: string;
  glow: string;
}) {
  const xOff = side === "cathode" ? -ELECTRODE_GAP / 2 : ELECTRODE_GAP / 2;
  const plateRef = useRef<THREE.Mesh>(null);
  const edgeRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!edgeRef.current) return;
    const t = state.clock.elapsedTime;
    // Subtle pulse on the glowing edge — like current flickering
    const mat = edgeRef.current.material as THREE.MeshStandardMaterial;
    mat.emissiveIntensity = 1.1 + Math.sin(t * 1.8 + (side === "cathode" ? 0 : Math.PI)) * 0.35;
  });

  return (
    <group position={[CHAMBER_X + xOff, CHAMBER_Y, 0]}>
      {/* Plate body — thin slab, slightly transparent so back content shows through */}
      <mesh ref={plateRef}>
        <boxGeometry args={[0.085, 2.4, 1.2]} />
        <meshPhysicalMaterial
          color={color}
          metalness={0.85}
          roughness={0.22}
          clearcoat={1}
          clearcoatRoughness={0.1}
          transparent
          opacity={0.55}
        />
      </mesh>
      {/* Glowing edge frame — defines the electrode visually */}
      <mesh ref={edgeRef} position={[side === "cathode" ? -0.05 : 0.05, 0, 0]}>
        <boxGeometry args={[0.015, 2.45, 1.25]} />
        <meshStandardMaterial
          color={glow}
          emissive={glow}
          emissiveIntensity={1.2}
          toneMapped={false}
        />
      </mesh>
      {/* Anchor caps top/bottom */}
      {[1.22, -1.22].map((y) => (
        <mesh key={y} position={[0, y, 0]}>
          <boxGeometry args={[0.18, 0.06, 1.3]} />
          <meshStandardMaterial color="#3a4870" metalness={0.9} roughness={0.3} />
        </mesh>
      ))}
      {/* Side label glow — small charged dot near the top */}
      <mesh position={[side === "cathode" ? -0.12 : 0.12, 1.0, 0]}>
        <sphereGeometry args={[0.035, 12, 12]} />
        <meshStandardMaterial
          color={glow}
          emissive={glow}
          emissiveIntensity={2.2}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}

/* ─── H₂ gas stream — paired hydrogens rising from cathode ───── */
function H2Stream({ count = 22 }: { count?: number }) {
  const groupRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const seeds = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        xOff: (Math.random() - 0.5) * 0.55,
        zOff: (Math.random() - 0.5) * 0.9,
        speed: 0.4 + Math.random() * 0.45,
        phase: Math.random() * Math.PI * 2,
        wob: 0.06 + Math.random() * 0.12,
        size: 0.07 + Math.random() * 0.05,
      })),
    [count]
  );

  // Each "H₂" is rendered as two close instances. We'll use 2*count instances total.
  const total = count * 2;

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    for (let i = 0; i < count; i++) {
      const s = seeds[i];
      const rise = ((t * s.speed + s.phase) % 4) - 2;
      const x = CHAMBER_X - ELECTRODE_GAP / 2 - 0.25 + s.xOff + Math.sin(t * 1.4 + s.phase) * s.wob;
      const y = CHAMBER_Y - 1.2 + (rise + 2);
      const z = s.zOff;
      const fade = Math.max(0, Math.min(1, (rise + 2) / 0.4)) * Math.max(0, 1 - (rise + 2) / 2.8);
      const sz = s.size * (0.7 + 0.6 * fade);

      // First H
      dummy.position.set(x - 0.075, y, z);
      dummy.scale.setScalar(sz);
      dummy.updateMatrix();
      groupRef.current.setMatrixAt(i * 2, dummy.matrix);
      // Second H
      dummy.position.set(x + 0.075, y, z);
      dummy.scale.setScalar(sz);
      dummy.updateMatrix();
      groupRef.current.setMatrixAt(i * 2 + 1, dummy.matrix);
    }
    groupRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={groupRef} args={[undefined, undefined, total]} frustumCulled={false}>
      <sphereGeometry args={[1, 12, 12]} />
      <meshPhysicalMaterial
        color="#e7f8fb"
        metalness={0.2}
        roughness={0.05}
        transmission={0.82}
        ior={1.33}
        thickness={0.4}
        clearcoat={1}
        transparent
        opacity={0.85}
      />
    </instancedMesh>
  );
}

/* ─── H₂ bond lines — connect each pair so it reads as a molecule ─ */
function H2Bonds({ count = 22 }: { count?: number }) {
  const groupRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const seeds = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        xOff: (Math.random() - 0.5) * 0.55,
        zOff: (Math.random() - 0.5) * 0.9,
        speed: 0.4 + Math.random() * 0.45,
        phase: Math.random() * Math.PI * 2,
        wob: 0.06 + Math.random() * 0.12,
        size: 0.07 + Math.random() * 0.05,
      })),
    [count]
  );

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    for (let i = 0; i < count; i++) {
      const s = seeds[i];
      const rise = ((t * s.speed + s.phase) % 4) - 2;
      const x = CHAMBER_X - ELECTRODE_GAP / 2 - 0.25 + s.xOff + Math.sin(t * 1.4 + s.phase) * s.wob;
      const y = CHAMBER_Y - 1.2 + (rise + 2);
      const z = s.zOff;
      const fade = Math.max(0, Math.min(1, (rise + 2) / 0.4)) * Math.max(0, 1 - (rise + 2) / 2.8);
      const sz = s.size * (0.7 + 0.6 * fade);

      dummy.position.set(x, y, z);
      dummy.scale.set(sz * 0.18, sz * 0.18, 0.16);
      dummy.rotation.set(0, 0, Math.PI / 2);
      dummy.updateMatrix();
      groupRef.current.setMatrixAt(i, dummy.matrix);
    }
    groupRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={groupRef} args={[undefined, undefined, count]} frustumCulled={false}>
      <cylinderGeometry args={[1, 1, 1, 8]} />
      <meshStandardMaterial
        color="#a4e7f0"
        emissive="#6fd7e6"
        emissiveIntensity={0.7}
        transparent
        opacity={0.55}
        toneMapped={false}
      />
    </instancedMesh>
  );
}

/* ─── O₂ bubbles — bigger lone bubbles rising from anode ──────── */
function O2Bubbles({ count = 16 }: { count?: number }) {
  const ref = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const seeds = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        xOff: (Math.random() - 0.5) * 0.5,
        zOff: (Math.random() - 0.5) * 0.8,
        speed: 0.32 + Math.random() * 0.4,
        phase: Math.random() * Math.PI * 2,
        wob: 0.05 + Math.random() * 0.11,
        size: 0.12 + Math.random() * 0.13,
      })),
    [count]
  );

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    for (let i = 0; i < count; i++) {
      const s = seeds[i];
      const rise = ((t * s.speed + s.phase) % 4) - 2;
      const x = CHAMBER_X + ELECTRODE_GAP / 2 + 0.25 + s.xOff + Math.sin(t * 1.1 + s.phase) * s.wob;
      const y = CHAMBER_Y - 1.2 + (rise + 2);
      const z = s.zOff;
      const fade = Math.max(0, Math.min(1, (rise + 2) / 0.4)) * Math.max(0, 1 - (rise + 2) / 2.8);
      const sz = s.size * (0.7 + 0.6 * fade);
      dummy.position.set(x, y, z);
      dummy.scale.setScalar(sz);
      dummy.updateMatrix();
      ref.current.setMatrixAt(i, dummy.matrix);
    }
    ref.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, count]} frustumCulled={false}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshPhysicalMaterial
        color="#fff3e0"
        metalness={0.05}
        roughness={0.0}
        transmission={0.94}
        ior={1.33}
        thickness={0.18}
        clearcoat={1}
        clearcoatRoughness={0.0}
        transparent
        opacity={0.5}
      />
    </instancedMesh>
  );
}

/* ─── Free electrons — small bright dots, drift toward cathode ── */
function FreeElectrons({ count = 90 }: { count?: number }) {
  const ref = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const seeds = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        ox: CHAMBER_X + (Math.random() - 0.5) * (ELECTRODE_GAP + 1.5),
        oy: CHAMBER_Y + (Math.random() - 0.5) * 2.6,
        oz: (Math.random() - 0.5) * 1.2,
        speed: 0.6 + Math.random() * 1.4,
        phase: Math.random() * Math.PI * 2,
        amp: 0.15 + Math.random() * 0.35,
        size: 0.012 + Math.random() * 0.014,
        // Streak direction — most electrons drift left (toward cathode)
        driftX: -0.08 - Math.random() * 0.15,
      })),
    [count]
  );

  useFrame((state, delta) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    seeds.forEach((s, i) => {
      s.ox += s.driftX * delta;
      // Wrap when off the chamber
      if (s.ox < CHAMBER_X - (ELECTRODE_GAP / 2) - 0.15) {
        s.ox = CHAMBER_X + (ELECTRODE_GAP / 2) + 0.5 + Math.random() * 0.4;
        s.oy = CHAMBER_Y + (Math.random() - 0.5) * 2.4;
      }
      const wob = Math.sin(t * s.speed + s.phase) * s.amp * 0.4;
      dummy.position.set(s.ox, s.oy + wob, s.oz + Math.cos(t * 0.6 + s.phase) * 0.15);
      const pulse = 0.7 + 0.5 * Math.sin(t * 4 + s.phase);
      dummy.scale.setScalar(s.size * pulse);
      dummy.updateMatrix();
      ref.current!.setMatrixAt(i, dummy.matrix);
    });
    ref.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, count]} frustumCulled={false}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#cff3f7" transparent opacity={0.95} toneMapped={false} />
    </instancedMesh>
  );
}

/* ─── Water molecule — H₂O ball-and-stick with split animation ── */
function WaterMolecule({
  seed,
}: {
  seed: number;
}) {
  const group = useRef<THREE.Group>(null);
  const h1 = useRef<THREE.Group>(null);
  const h2 = useRef<THREE.Group>(null);
  const bond1 = useRef<THREE.Mesh>(null);
  const bond2 = useRef<THREE.Mesh>(null);

  const baseX = useMemo(() => CHAMBER_X + (Math.random() - 0.5) * (ELECTRODE_GAP * 0.72), []);
  const baseY = useMemo(() => CHAMBER_Y + (Math.random() - 0.5) * 1.55, []);
  const baseZ = useMemo(() => (Math.random() - 0.5) * 0.45, []);
  const orbitPhase = useMemo(() => seed * 1.7, [seed]);
  const splitPhase = useMemo(() => Math.random() * 10, []);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    // Slow tumble
    group.current.position.x = baseX + Math.sin(t * 0.4 + orbitPhase) * 0.12;
    group.current.position.y = baseY + Math.cos(t * 0.3 + orbitPhase) * 0.12;
    group.current.position.z = baseZ + Math.sin(t * 0.25 + orbitPhase) * 0.08;
    group.current.rotation.x = t * 0.25 + orbitPhase;
    group.current.rotation.y = t * 0.2 + orbitPhase;

    // Dissociation cycle: most of the time bonded, briefly snaps open ~every 8s
    const cyclePos = ((t + splitPhase) % 8) / 8;
    let stretch = 0;
    let opacity = 1;
    if (cyclePos > 0.85 && cyclePos < 0.95) {
      const k = (cyclePos - 0.85) / 0.1;
      stretch = k * 0.5;
      opacity = 1;
    } else if (cyclePos >= 0.95 && cyclePos < 0.98) {
      // brief flash — bonds break
      stretch = 0.5 + (cyclePos - 0.95) * 8;
      opacity = 1 - (cyclePos - 0.95) * 25;
    } else if (cyclePos >= 0.98) {
      // re-form: bonds invisible while H atoms drift back
      stretch = 0;
      opacity = (cyclePos - 0.98) * 50;
    }
    opacity = Math.max(0, Math.min(1, opacity));

    if (h1.current && h2.current) {
      h1.current.position.set(-0.32 - stretch, 0.18 + stretch * 0.3, 0);
      h2.current.position.set(0.32 + stretch, 0.18 + stretch * 0.3, 0);
    }
    if (bond1.current && bond2.current) {
      const m1 = bond1.current.material as THREE.MeshStandardMaterial;
      const m2 = bond2.current.material as THREE.MeshStandardMaterial;
      m1.opacity = opacity * 0.7;
      m2.opacity = opacity * 0.7;
    }
  });

  return (
    <group ref={group}>
      {/* O atom */}
      <mesh>
        <sphereGeometry args={[0.18, 20, 20]} />
        <meshPhysicalMaterial
          color="#A4E7F0"
          metalness={0.1}
          roughness={0.1}
          transmission={0.55}
          ior={1.4}
          thickness={0.5}
          clearcoat={1}
          transparent
          opacity={0.72}
        />
      </mesh>
      {/* H atoms */}
      <group ref={h1} position={[-0.32, 0.18, 0]}>
        <mesh>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshPhysicalMaterial
            color="#e7f8fb"
            metalness={0.2}
            roughness={0.05}
            transmission={0.75}
            ior={1.33}
            thickness={0.3}
            clearcoat={1}
            transparent
            opacity={0.72}
          />
        </mesh>
      </group>
      <group ref={h2} position={[0.32, 0.18, 0]}>
        <mesh>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshPhysicalMaterial
            color="#e7f8fb"
            metalness={0.2}
            roughness={0.05}
            transmission={0.75}
            ior={1.33}
            thickness={0.3}
            clearcoat={1}
            transparent
            opacity={0.72}
          />
        </mesh>
      </group>
      {/* Bonds — animated via opacity */}
      <mesh ref={bond1} position={[-0.16, 0.09, 0]} rotation={[0, 0, Math.PI / 4]}>
        <cylinderGeometry args={[0.013, 0.013, 0.37, 8]} />
        <meshStandardMaterial
          color="#a4e7f0"
          emissive="#6fd7e6"
          emissiveIntensity={0.65}
          transparent
          opacity={0.7}
        />
      </mesh>
      <mesh ref={bond2} position={[0.16, 0.09, 0]} rotation={[0, 0, -Math.PI / 4]}>
        <cylinderGeometry args={[0.013, 0.013, 0.37, 8]} />
        <meshStandardMaterial
          color="#a4e7f0"
          emissive="#6fd7e6"
          emissiveIntensity={0.65}
          transparent
          opacity={0.7}
        />
      </mesh>
    </group>
  );
}

/* ─── Arc current — occasional flash between plates ──────────── */
function ArcFlash() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    // Rare, irregular flashes — fires every ~3-5 seconds for ~0.18s
    const cycle = (t % 3.7) / 3.7;
    let intensity = 0;
    if (cycle > 0.93) {
      const k = (cycle - 0.93) / 0.07;
      intensity = Math.sin(k * Math.PI) * (0.8 + Math.sin(t * 60) * 0.2);
    }
    const mat = ref.current.material as THREE.MeshStandardMaterial;
    mat.opacity = intensity * 0.55;
    mat.emissiveIntensity = intensity * 2.6;
    ref.current.scale.y = 1 + Math.sin(t * 70) * intensity * 0.08;
    ref.current.position.y = CHAMBER_Y + (Math.sin(t * 13) * 0.6);
  });

  return (
    <mesh ref={ref} position={[CHAMBER_X, CHAMBER_Y, 0.5]}>
      <boxGeometry args={[ELECTRODE_GAP * 0.85, 0.05, 0.02]} />
      <meshStandardMaterial
        color="#FFFFFF"
        emissive="#A4E7F0"
        emissiveIntensity={4}
        transparent
        opacity={0}
        toneMapped={false}
      />
    </mesh>
  );
}

/* ─── Hexagonal water cluster — distant, drifting ──────────────── */
function HexCluster({
  position,
  scale = 1,
}: {
  position: [number, number, number];
  scale?: number;
}) {
  const ref = useRef<THREE.Group>(null);
  const verts = useMemo(() => {
    const v: [number, number, number][] = [];
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      v.push([Math.cos(a) * 0.55, Math.sin(a) * 0.55, 0]);
    }
    return v;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.y = t * 0.3;
    ref.current.rotation.x = Math.sin(t * 0.2) * 0.2;
  });

  return (
    <group ref={ref} position={position} scale={scale}>
      {verts.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.13, 12, 12]} />
          <meshPhysicalMaterial
            color="#e7f8fb"
            metalness={0.1}
            roughness={0.1}
            transmission={0.7}
            ior={1.33}
            thickness={0.4}
            clearcoat={1}
            transparent
            opacity={0.38}
          />
        </mesh>
      ))}
      <mesh>
        <sphereGeometry args={[0.16, 12, 12]} />
        <meshPhysicalMaterial
          color="#cff3f7"
          metalness={0.15}
          roughness={0.1}
          transmission={0.65}
          ior={1.4}
          thickness={0.5}
          clearcoat={1}
          transparent
          opacity={0.38}
        />
      </mesh>
      {verts.map((p, i) => {
        const next = verts[(i + 1) % 6];
        const mid: [number, number, number] = [(p[0] + next[0]) / 2, (p[1] + next[1]) / 2, 0];
        const angle = Math.atan2(next[1] - p[1], next[0] - p[0]);
        const len = Math.hypot(next[0] - p[0], next[1] - p[1]);
        return (
          <mesh key={`b-${i}`} position={mid} rotation={[0, 0, angle + Math.PI / 2]}>
            <cylinderGeometry args={[0.008, 0.008, len, 6]} />
            <meshStandardMaterial
              color="#a4e7f0"
              emissive="#6fd7e6"
              emissiveIntensity={0.45}
              transparent
              opacity={0.34}
            />
          </mesh>
        );
      })}
    </group>
  );
}

/* ─── Chamber glass shell — faint container around the reaction ── */
function ChamberShell() {
  const shellGeometry = useMemo(
    () => new THREE.BoxGeometry(ELECTRODE_GAP + 0.45, 2.35, 1.05),
    []
  );
  const shellEdges = useMemo(() => new THREE.EdgesGeometry(shellGeometry), [shellGeometry]);

  return (
    <group position={[CHAMBER_X, CHAMBER_Y, -0.04]}>
      <mesh position={[0, 0, -0.53]}>
        <planeGeometry args={[ELECTRODE_GAP + 0.28, 2.1]} />
        <meshBasicMaterial
          color="#6FD7E6"
          transparent
          opacity={0.045}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <lineSegments geometry={shellEdges}>
        <lineBasicMaterial
          color="#CFF3F7"
          transparent
          opacity={0.34}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
      {[1.18, -1.18].map((y) => (
        <mesh key={y} position={[0, y, 0]}>
          <boxGeometry args={[ELECTRODE_GAP + 0.42, 0.018, 1.02]} />
          <meshBasicMaterial
            color="#A4E7F0"
            transparent
            opacity={0.12}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  );
}

export function ElectrolysisChamber() {
  // Water molecules tumbling in the chamber
  const moleculeSeeds = useMemo(() => Array.from({ length: 5 }, (_, i) => i), []);

  return (
    <group>
      <ChamberShell />
      <Electrode side="cathode" color="#7da4d9" glow="#6FD7E6" />
      <Electrode side="anode" color="#d4a888" glow="#FFB37A" />

      {moleculeSeeds.map((s) => (
        <WaterMolecule key={s} seed={s} />
      ))}

      <H2Stream count={14} />
      <O2Bubbles count={9} />
      <FreeElectrons count={46} />
      <ArcFlash />

      {/* Hex water clusters drift in the background, slightly behind chamber */}
      <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.45}>
        <HexCluster position={[CHAMBER_X + 1.65, 1.18, -1.55]} scale={0.5} />
      </Float>
      <Float speed={0.9} rotationIntensity={0.3} floatIntensity={0.4}>
        <HexCluster position={[CHAMBER_X - 0.2, -1.35, -2]} scale={0.38} />
      </Float>
      <Float speed={1.4} rotationIntensity={0.2} floatIntensity={0.5}>
        <HexCluster position={[CHAMBER_X + 0.55, 1.85, -2.5]} scale={0.32} />
      </Float>
    </group>
  );
}

export { CHAMBER_X };
