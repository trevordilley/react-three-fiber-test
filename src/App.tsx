import React, {Suspense, useEffect, useRef, useState} from 'react';
import './App.css';
import {Canvas, PerspectiveCameraProps, useFrame, useThree} from "@react-three/fiber";
import {useFBX, useGLTF} from "@react-three/drei";
import Naga from "./gen/Naga";


const RotatingRot = () => {
  // This reference will give us direct access to the mesh
  const [xRot, setXRot] = useState(0)
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => setXRot(xRot + 0.01))

  return (
      <Naga position={[0,-120,-300]} rotation={[0,xRot, 0]}/>
  )
}

function App() {
  return (
    <div >
      <Canvas style={{height: 800}}>
        <Suspense fallback={null}>
          <ambientLight  />
          <pointLight position={[10, 1, 10]} />
          <RotatingRot />
        </Suspense>
      </Canvas>,
    </div>
  );
}

export default App;
