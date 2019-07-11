/**
* Exampe taken from here : https://github.com/akella/fake3d
* I need to do some more homework on shader basics before returning to this code
*/
export default /* glsl */`
#ifdef GL_ES
  precision mediump float;
#endif

uniform vec4 u_resolution; // Canvas size (width,height)
uniform vec2 u_mouse; // mouse position in screen pixels
uniform float u_time; // Time in seconds since load

uniform float u_pixelRatio;
uniform vec2 threshold;
uniform sampler2D image;
uniform sampler2D depthMap;
varying vec2 vUv;


// vec2 mirrored(vec2 v) {
//   vec2 m = mod(v,2.);
//   return mix(m,2.0 - m, step(1.0 ,m));
// }

void main() {
  // vec2 uv = u_pixelRatio*gl_FragCoord.xy / u_resolution.xy ;
  // uvs and textures
  // vec2 vUv = (uv - vec2(0.5))*u_resolution.zw + vec2(0.5);
  // vUv.y = 1. - vUv.y;
  // vec4 tex1 = texture2D(depthMap,mirrored(vUv));
  // vec2 fake3d = vec2(vUv.x + (tex1.r - 0.5)*u_mouse.x/threshold.x, vUv.y + (tex1.r - 0.5)*u_mouse.y/threshold.y);
  // gl_FragColor = texture2D(image,mirrored(fake3d));
  // gl_FragColor = vec4(uv.x,uv.y,uv.y,1.0);
  // gl_FragColor = vec4(uv.x,uv.y,uv.y,1.0);
  vec4 depth = texture2D(depthMap, vUv);
  gl_FragColor = texture2D(image, vUv);
}
`;
