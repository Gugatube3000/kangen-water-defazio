precision mediump float;

uniform float uTime;
uniform float uScroll;
uniform vec2  uMouse;
uniform vec3  uColorDeep;
uniform vec3  uColorMid;
uniform vec3  uColorLight;

varying vec2 vUv;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

// Lower-iteration FBM — 3 instead of 5.
float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 3; i++) {
    v += a * noise(p);
    p = p * 2.05;
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = vUv;
  vec2 p = uv * 2.5;

  float t = uTime * 0.05;
  float f = fbm(p + vec2(t, -t) + uMouse * 0.2);

  // Single-band caustic — cheaper than the double-product version.
  float caustic = pow(
    abs(sin(uv.y * 5.0 + f * 3.0 + uTime * 0.35)),
    1.8
  );

  vec2 m = uMouse * 0.3;
  float depth = smoothstep(0.0, 1.0, f + 0.1 * (uv.y + m.y));
  vec3 col = mix(uColorDeep, uColorMid, depth);
  col = mix(col, uColorLight, smoothstep(0.55, 0.95, f + caustic * 0.4));

  col += vec3(0.04, 0.06, 0.02) * clamp(uScroll, 0.0, 1.0);

  float v = smoothstep(1.2, 0.35, length(uv - 0.5));
  col *= mix(0.6, 1.0, v);

  col += caustic * vec3(0.2, 0.5, 0.65) * 0.3;
  col += vec3(0.04, 0.08, 0.12) * (1.0 - uv.y);

  gl_FragColor = vec4(col, 1.0);
}
