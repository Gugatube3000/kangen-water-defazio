import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import vertexShader from "./shaders/water.vert.glsl?raw";
import fragmentShader from "./shaders/water.frag.glsl?raw";

type ShaderWaterProps = {
  scrollRef?: React.MutableRefObject<number>;
};

export function ShaderWater({ scrollRef }: ShaderWaterProps) {
  const ref = useRef<THREE.ShaderMaterial>(null);
  const { viewport, mouse } = useThree();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uScroll: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uResolution: { value: new THREE.Vector2(1, 1) },
      uColorDeep: { value: new THREE.Color("#122648") },
      uColorMid: { value: new THREE.Color("#1F3F78") },
      uColorLight: { value: new THREE.Color("#A4E7F0") },
    }),
    []
  );

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.uniforms.uTime.value += delta;
    const target = ref.current.uniforms.uMouse.value as THREE.Vector2;
    target.x += (mouse.x - target.x) * 0.04;
    target.y += (mouse.y - target.y) * 0.04;
    if (scrollRef) {
      ref.current.uniforms.uScroll.value = scrollRef.current;
    }
  });

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        ref={ref}
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        depthWrite={false}
      />
    </mesh>
  );
}
