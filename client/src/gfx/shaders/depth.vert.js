export default /* glsl */`
#ifdef GL_ES
  precision mediump float;
#endif
varying vec2 vUv; // pass the uv coordinates of each pixel to the frag shader
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
// attribute vec2 a_position;

// void main() {
//   gl_Position = vec4( a_position, 0, 1 );
// }
`;
