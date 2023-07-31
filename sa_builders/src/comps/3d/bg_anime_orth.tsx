
'use client'

import { DirectionalLightHelper } from 'three/src/helpers/DirectionalLightHelper.js'
import { useRef, useEffect} from 'react'
import { useFrame, useLoader} from '@react-three/fiber'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useGLTF} from '@react-three/drei';
import { useHelper } from '@react-three/drei';


const BgAnime = () => {

    const lightRef = useRef(null)
    
    useFrame(({clock}) => {
        const a = Math.cos(clock.getElapsedTime())
        lightRef.current.position.x = a
        
    })
    
    const {nodes, material} = useGLTF("/hexagon.gltf")

    useEffect(() => {
      console.log(nodes)
      console.log(material)
      console.log("hello")
    }, [])
    
    useHelper(lightRef, DirectionalLightHelper)

    return(
        <>
            <directionalLight color={"white"} intensity={0.2} scale={0.5} position={[0,0,10]} ref={lightRef}/>
            <mesh
                rotation-x={Math.PI/-2}
                scale={0.1}
                
                position-x={-13}
                position-y={2}
                position-z={2}
                scale-x={0.2}
                geometry={nodes.Plane_2.geometry}
            >
                <meshStandardMaterial color={'#f7ae3b'} roughness={0.5}/>
            </mesh>            
            <mesh
                rotation-x={Math.PI/-2}
                scale={0.1}
                position-x={-13}
                position-y={2}
                position-z={2}
                scale-x={0.2}
                castShadow
                receiveShadow
                geometry={nodes.Plane_1.geometry}
            >
                <meshStandardMaterial color={'#de8800'} />
            </mesh>            

        </>
    )

} 


export default BgAnime


