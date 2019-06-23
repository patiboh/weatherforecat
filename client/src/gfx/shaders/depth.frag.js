/**
* Exampe taken from here : https://github.com/akella/fake3d
* I need to do some more homework on shader basics before returning to this code
*/
export default /* glsl */`
#ifdef GL_ES
  precision mediump float;
#endif

uniform vec4 u_resolution;
uniform vec2 u_mouse;
uniform float u_pixelRatio;
uniform vec2 threshold;
uniform float u_time;
uniform sampler2D image;
uniform sampler2D depthMap;


vec2 mirrored(vec2 v) {
  vec2 m = mod(v,2.);
  return mix(m,2.0 - m, step(1.0 ,m));
}

void main() {
  // uvs and textures
  vec2 uv = u_pixelRatio*gl_FragCoord.xy / u_resolution.xy ;
  // vec2 vUv = (uv - vec2(0.5))*u_resolution.zw + vec2(0.5);
  // vUv.y = 1. - vUv.y;
  // vec4 tex1 = texture2D(depthMap,mirrored(vUv));
  // vec2 fake3d = vec2(vUv.x + (tex1.r - 0.5)*u_mouse.x/threshold.x, vUv.y + (tex1.r - 0.5)*u_mouse.y/threshold.y);
  // gl_FragColor = texture2D(image,mirrored(fake3d));
  // gl_FragColor = vec4(uv.x,uv.y,uv.y,1.0);
  // gl_FragColor = vec4(uv.x,uv.y,uv.y,1.0);
  vec4 depth = texture2D(depthMap, uv);
  gl_FragColor = texture2D(image, uv);
}
`;
