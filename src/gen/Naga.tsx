/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Rzyas (https://sketchfab.com/rzyas)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/naga-7ab26d5cc7ff4f398908001136aac455
title: NAGA
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

type GLTFResult = GLTF & {
  nodes: {
    Object_6: THREE.Mesh
  }
  materials: {
    Naga_MAT: THREE.MeshStandardMaterial
  }
}

export default function Naga({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/naga/scene.gltf') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 137.13, 212.88]} rotation={[-0.92, Math.PI / 2, 0]} scale={[100, 100, 100]}>
            <mesh geometry={nodes.Object_6.geometry} material={materials.Naga_MAT} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
