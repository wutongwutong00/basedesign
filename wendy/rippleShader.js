import { createShaderToy } from 'https://cdn.jsdelivr.net/npm/shader-doodle@1.0.0/dist/index.min.mjs';

createShaderToy({
  canvas: document.getElementById('rippleCanvas'),
  fragmentShader: `
// khlorghaal shader
precision mediump float;
uniform float iTime;
uniform vec2 iResolution;
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;

const float SPEED=.21, TURBULENCE=.15, ADVECTION=.2, DEPTH=.021;
const vec3 LIGHT= normalize(vec3(-.5,1.,.25));
const vec3 COLOR_SUN= vec3(1.1,1.,1.)*9.;
const vec3 COLOR_SKY= vec3(.1,.14,.2)*.9;

float lum(vec3 rgb){ return dot(rgb,vec3(0.299, 0.587, 0.114)); }

float depthf(vec2 p){
    float bottom= lum(texture2D(iChannel0,p).rgb);
    vec2 flow= vec2(0.,iTime*SPEED);
    p+= flow;
    p+= bottom*ADVECTION;
    float surface= lum(texture2D(iChannel1,p*TURBULENCE).rgb)*TURBULENCE;
    return surface*DEPTH;
}

void main() {
    vec2 uv= gl_FragCoord.xy/iResolution.xy;
    float d= 0.009;
    float d0= depthf(uv);    
    vec2 grad= (vec2(
        depthf(uv+vec2(d,0)),
        depthf(uv+vec2(0,d))
    )-d0)/d;
    vec3 N= normalize(vec3(grad.x,grad.y,1.));
    float L= max(0., reflect(LIGHT, N).z );
    float sun= min(1.,pow(L*1.6,4.11));
    float sky= min(1.,pow(L+.39,1.11));
    vec3 specular= COLOR_SUN*sun + COLOR_SKY*sky;
    uv+= refract(vec3(0.,0.,1.), N, 1.4).xy*DEPTH;
    vec3 col= pow(texture2D(iChannel0, uv).rgb, vec3(1./2.2));
    col-= col*COLOR_SKY;
    col+= specular*4.45;
    col= pow(col-.28,vec3(2.35));
    gl_FragColor = vec4(col,1.0);
}
`,
  inputs: {
    iChannel0: '/assets/1.png', // base image texture (e.g. your type)
    // iChannel1: 'yourImage2.jpg', // turbulence/noise texture (optional)
  }
});
