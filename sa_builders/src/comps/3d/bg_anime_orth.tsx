
'use client'

import { DirectionalLightHelper } from 'three/src/helpers/DirectionalLightHelper.js'
import { useRef, useEffect} from 'react'
import { useFrame, useLoader, useThree} from '@react-three/fiber'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useGLTF} from '@react-three/drei';
import { useHelper } from '@react-three/drei';
import { SpotLightHelper } from 'three';


const BgAnime = () => {

    const lightRef = useRef(null)
    const mesh_ref = useRef(null)
    
    useFrame(({clock}) => {
        const a = Math.sin(clock.getElapsedTime()) * 5
        
        lightRef.current.position.x = a 
        // lightRef.current.target = mesh_ref.current
        // lightRef.current.target.updateMatrixWorld()
        
    })
    
    // useHelper(lightRef, )

    const {nodes, material} = useGLTF("/hexagon.gltf")
    const state_can = useThree();
    useEffect(() => {
        
        let s = state_can.size.width

        if (s <= 640) {
            state_can.camera.zoom = 196
        }
        else if (s <= 768) {
            state_can.camera.zoom = 206 
        }
        else {
            state_can.camera.zoom = 229
        }
    }, [state_can])
    



    return(
        <>
            <mesh
            
            
                rotation-x={Math.PI/-2}
                scale={0.1}
                position-x={-13}
                position-y={2}
                position-z={2}
                scale-x={0.2}
                geometry={nodes.Plane_2.geometry}
            >
                <meshStandardMaterial color={'#f7ae3b'} roughness={0.7}/>
            </mesh>            
            <mesh
                rotation-x={Math.PI/-2}
                scale={0.1}
                position-x={-13}
                position-y={2}
                position-z={2}
                scale-x={0.2}
                ref={mesh_ref}
                castShadow
                receiveShadow
                geometry={nodes.Plane_1.geometry}
            >
                <meshStandardMaterial color={'#de8800'} roughness={0.7}/>
            </mesh>            
            <directionalLight position={[0,0,4]} intensity={0.1} ref={lightRef} color={"white"} />            
            <pointLight position={[0,0,4]} intensity={2} ref={lightRef} decay={2} color={"white"} />
            
        </>
    )

} 


export default BgAnime


