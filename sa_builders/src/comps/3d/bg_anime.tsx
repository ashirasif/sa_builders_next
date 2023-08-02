
'use client'

import { DirectionalLightHelper } from 'three/src/helpers/DirectionalLightHelper.js'
import { useRef, useEffect} from 'react'
import { useFrame, useLoader} from '@react-three/fiber'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useGLTF} from '@react-three/drei';
import { useHelper } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';

const BgAnime = () => {

    const lightRef = useRef(null)
    
    useFrame(({clock}) => {
        const a = Math.cos(clock.getElapsedTime())
        // lightRef.current.position.x = a*2
        
    })
    
    const {nodes, material} = useGLTF("/hexagon.gltf")

    
    useHelper(lightRef, DirectionalLightHelper)

    return(
        <>
            <directionalLight color={"#ffffff"} intensity={2} scale={0.5} position={[0,0,5]} ref={lightRef}/>
            <mesh
                rotation-x={Math.PI/-2}
                scale={0.1}
                castShadow
                position-x={-8}
                position-y={2}
                position-z={2}
                scale-x={0.2}
                receiveShadow
                geometry={nodes.Plane_2.geometry}
            >
                <meshStandardMaterial color={'#f7ae3b'} />
            </mesh>            
            <mesh
                rotation-x={Math.PI/-2}
                scale={0.1}
                position-x={-8}
                position-y={2}
                position-z={2}
                scale-x={0.2}
                castShadow
                receiveShadow
                geometry={nodes.Plane_1.geometry}
            >
                <meshStandardMaterial color={'#de8800'} />
            </mesh>            
            <OrbitControls />
        </>
    )

} 


export default BgAnime


