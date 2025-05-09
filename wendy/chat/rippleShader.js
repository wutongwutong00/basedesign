import { createShaderToy } from 'https://cdn.jsdelivr.net/npm/shader-doodle@1.0.0/dist/index.min.mjs';

createShaderToy({
  canvas: document.getElementById('rippleCanvas'),
  fragmentShader: `
// Author: khlorghaal (adapted)
// Ripple Water Shader

precision mediump float;
uniform float iTime;
uniform vec2 iResolution;
uniform sampler2D iChannel0; // background (text image)
uniform sampler2D iChannel1; // noise texture

const float SPEED = 0.21;
const float TURBULENCE = 0.15;
const float ADVECTION = 0.2;
const float DEPTH = 0.021;

const vec3 LIGHT = normalize(vec3(-0.5, 1.0, 0.25));
const vec3 COLOR_SUN = vec3(1.1, 1.0, 1.0) * 9.0;
const vec3 COLOR_SKY = vec3(0.1, 0.14, 0.2) * 0.9;

float lum(vec3 rgb) {
    return dot(rgb, vec3(0.299, 0.587, 0.114));
}

float depthf(vec2 p) {
    float bottom = lum(texture2D(iChannel0, p).rgb);
    vec2 flow = vec2(0.0, iTime * SPEED);
    p += flow + bottom * ADVECTION;
    float surface = lum(texture2D(iChannel1, p * TURBULENCE).rgb) * TURBULENCE;
    return surface * DEPTH;
}

void main() {
    vec2 uv = gl_FragCoord.xy / iResolution.xy;
    float d = 0.009;
    float d0 = depthf(uv);

    vec2 grad = (vec2(
        depthf(uv + vec2(d, 0.0)),
        depthf(uv + vec2(0.0, d))
    ) - d0) / d;

    vec3 N = normalize(vec3(grad.x, grad.y, 1.0));

    float L = max(0.0, reflect(LIGHT, N).z);
    float sun = min(1.0, pow(L * 1.6, 4.11));
    float sky = min(1.0, pow(L + 0.39, 1.11));
    vec3 specular = COLOR_SUN * sun + COLOR_SKY * sky;

    uv += refract(vec3(0.0, 0.0, 1.0), N, 1.4).xy * DEPTH;
    vec3 col = pow(texture2D(iChannel0, uv).rgb, vec3(1.0 / 2.2));

    col -= col * COLOR_SKY;
    col += specular * 4.45;
    col = pow(col - 0.28, vec3(2.35));

    gl_FragColor = vec4(col, 1.0);
}
`,
  inputs: {
    iChannel0: '/assets/1.png',  // <- replace with your text image URL
    iChannel1: '/assets/1.png',  // <- seamless noise texture
  }
});
