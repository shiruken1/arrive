import ReactDOM from 'react-dom'
import { Text, Box } from '@react-three/drei'
import React, { useState, useRef } from 'react'
// import { useFrame, useThree } from '@react-three/fiber'
import { Interactive, useHitTest, ARCanvas } from '@react-three/xr'
// import {
//   ImageTracker
// } from '@zappar/zappar-react-three-fiber';

import targetFile from './ammo_box.zpt';

function Button(props) {
  const ref = useRef()
  const [hover, setHover] = useState(false)
  const [color, setColor] = useState(0x123456)

  // ???
  // useHitTest((hit) => {
  //   hit.decompose(ref.current.position, ref.current.rotation, ref.current.scale)
  // });

  return (
    <Interactive
      onSelect={() => setColor((Math.random() * 0xffffff) | 0)}
      onHover={() => setHover(true)}
      onBlur={() => setHover(false)}>
      <Box ref={ref} scale={hover ? [1.5, 1.5, 1.5] : [1, 1, 1]} args={[0.2, 0.1, 0.1]} {...props}>
        <meshStandardMaterial attach="material" color={color} />
        <Text position={[0, 0, 0.06]} fontSize={0.025} color="#000" anchorX="center" anchorY="middle">
          Hello world!
        </Text>
      </Box>
    </Interactive>
  )
}

function App() {
  return (
    <ARCanvas camera={{ position: [0, 0, 0.1]}}>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} />
      {/* <ImageTracker */}
      {/*   // onNotVisible={() => { setVisibleState(false); }} */}
      {/*   // onNewAnchor={(anchor) => console.log(`New anchor ${anchor.id}`)} */}
      {/*   // onVisible={() => { setVisibleState(true); }} */}
      {/*   // visible={visibleState} */}
      {/*   targetImage={targetFile} */}
      {/* > */}
        <Button position={[0, 0, 0]} />
      {/* </ImageTracker> */}
    </ARCanvas>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
