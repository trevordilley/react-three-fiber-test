/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'


type ActionName = 'animation_0'
interface GLTFAction extends THREE.AnimationAction {
  name: ActionName
}

type GLTFResult = GLTF & {
  nodes: {
    Cesium_Man: THREE.SkinnedMesh
    Skeleton_torso_joint_1: THREE.Bone
  }
  materials: {
    ['Cesium_Man-effect']: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

export default function CesiumMan({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/CesiumMan.gltf') as GLTFResult
  const { actions } = useAnimations(animations, group)

  actions["animation_0"]?.play()
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[0, 0, -Math.PI / 2]}>
          <primitive object={nodes.Skeleton_torso_joint_1} />
          <skinnedMesh
            geometry={nodes.Cesium_Man.geometry}
            material={materials['Cesium_Man-effect']}
            skeleton={nodes.Cesium_Man.skeleton}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/CesiumMan.gltf')