import React, {Suspense, useState} from 'react';
import './App.css';
import {Canvas, useFrame} from "@react-three/fiber";
import CesiumMan from "./gen/CesiumMan";


const RotatingRot = () => {
  // This reference will give us direct access to the mesh
  const [xRot, setXRot] = useState(0)
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => setXRot(xRot + 0.01))

  return (
      <CesiumMan position={[0,-1,2.5]} rotation={[0,xRot, 0]}/>
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
