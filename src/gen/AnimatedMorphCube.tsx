/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

type ActionName = 'Square'
interface GLTFAction extends THREE.AnimationAction {
  name: ActionName
}

type GLTFResult = GLTF & {
  nodes: {
    AnimatedMorphCube: THREE.Mesh
  }
  materials: {
    Material: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

export default function Square({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/cube/AnimatedMorphCube.gltf') as GLTFResult
  const { actions } = useAnimations(animations, group)

  actions['Square']?.play()
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        name="AnimatedMorphCube"
        geometry={nodes.AnimatedMorphCube.geometry}
        material={materials.Material}
        morphTargetDictionary={nodes.AnimatedMorphCube.morphTargetDictionary}
        morphTargetInfluences={nodes.AnimatedMorphCube.morphTargetInfluences}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={100}
      />
    </group>
  )
}

useGLTF.preload('/AnimatedMorphCube.gltf')