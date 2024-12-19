import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

export function Globe() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group>
      {/* Earth */}
      <Sphere ref={meshRef} args={[1, 64, 64]}>
        <meshPhongMaterial
          map={new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg')}
          bumpMap={new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg')}
          bumpScale={0.05}
          specularMap={new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg')}
          specular={new THREE.Color('grey')}
          shininess={10}
        />
      </Sphere>
      
      {/* Atmosphere glow */}
      <Sphere args={[1.01, 64, 64]}>
        <meshPhongMaterial
          transparent
          opacity={0.2}
          color="lightblue"
          blending={THREE.AdditiveBlending}
        />
      </Sphere>
    </group>
  );
}