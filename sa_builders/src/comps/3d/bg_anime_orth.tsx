
'use client'

import { DirectionalLightHelper } from 'three/src/helpers/DirectionalLightHelper.js'
import { useRef, useState, useEffect, useContext} from 'react'
import { useFrame, useLoader, useThree} from '@react-three/fiber'

import { useGLTF} from '@react-three/drei';

import { SpotLightHelper, Object3D, Camera } from 'three';
import {easing} from 'maath'



const BgAnime = ({animation}: {animation:{start:number,end:number,prog:number}}) => {

    const coords = useRef({x: 0, y: 0});
    const lightRef = useRef(null)
    const mesh_ref = useRef(null)
    const mesh_2_ref = useRef(null)
    const [dummy] = useState(() => new Object3D())
    
    




    // animation
    useFrame((state, dt) => {
    
        // point light animation
        const a = Math.sin(state.clock.getElapsedTime()) * 5
        lightRef.current.position.x = a
        

        
        // pointer animation
        
        
        mesh_ref.current.geometry.center()
        mesh_2_ref.current.geometry.center()
        dummy.lookAt(coords.current.x / 60, 1 , 0.1)
        easing.dampQ(mesh_ref.current.quaternion, dummy.quaternion, 0.02, dt)
        easing.dampQ(mesh_2_ref.current.quaternion, dummy.quaternion, 0.02, dt)

        if (animation.end >= animation.prog) {
            if (state.camera.zoom != 200) {
                easing.damp(state_can.camera, 'zoom', handleZoom(), 0.06, dt)
                state_can.camera.updateProjectionMatrix()
            }
            // fade out animation
            // if (animation.prog >= animation.end) {
            //     console.log("hide")
            //     mesh_2_ref.current.visible = false
            //     mesh_ref.current.visible = false
            // } else {
            //     mesh_2_ref.current.visible = true
            //     mesh_ref.current.visible = true

            // }

        } else {
            if (state.camera.zoom != 400) {
                easing.damp(state_can.camera, 'zoom', 400, 0.09, dt)
                state_can.camera.updateProjectionMatrix()
            }
        }
    })
    
    // useeffect zoom 
    // useEffect(() => {
    //   console.log(animation.end, animation.prog)
    //   if (animation.end < animation.prog) {
        
        
    //   } else {
    //     console.log('happened')
    //     easing.damp(state_can.camera, 'zoom', handleZoom(), 0.02)
    //     state_can.camera.updateProjectionMatrix()
    //   }
    // }, [animation.prog])
    
    
    // importing models
    const {nodes} = useGLTF("/hexagon.gltf")
    
    // adjust orthographi camera's zoom
    const state_can = useThree();
    useEffect(() => {
        state_can.camera.zoom = handleZoom()
        state_can.camera.updateProjectionMatrix()
    }, [state_can.size.width])
    
    
    // effect to get mouse coords over dom elements
    useEffect(() => {
        const handleWindowMouseMove = (event : any) => {
        coords.current.x = (event.clientX - (window.innerWidth / 2)) / (window.innerWidth / 2) 
        };
        window.addEventListener('mousemove', handleWindowMouseMove);
        return () => {
        window.removeEventListener(
            'mousemove',
            handleWindowMouseMove,
        );
        };
    }, []);


    function handleZoom() {
        let s = state_can.size.width
        let z = 0
        if (s <= 640) {
            z = 196
        }
        else if (s <= 768) {
            z = 206 
        }
        else {
            z = 229
        }
        
        return(z)
    }


    return(
        <>
            <mesh
                rotation-x={Math.PI/-2}
                scale={0.1}
                ref={mesh_2_ref}
                position-x={-0.41}
                position-y={0}
                position-z={2}
                scale-x={0.2}
                castShadow
                receiveShadow
                geometry={nodes.Plane_2.geometry}
            >
                <meshStandardMaterial color={'#f7ae3b'} roughness={0.7}/>
            </mesh>            
            <mesh
                rotation-x={Math.PI/-2}
                scale={0.1}
                position-x={0}
                position-y={0}
                position-z={2}
                scale-x={0.2}
                ref={mesh_ref}
                castShadow
                receiveShadow
                geometry={nodes.Plane_1.geometry}
            >
                <meshStandardMaterial color={'#de8800'} roughness={0.7}/>
            </mesh>            
            
            <ambientLight position={[0,0,4]} intensity={0.15} color={"white"} />            
            <pointLight position={[0,0,4]} intensity={2} ref={lightRef} decay={2} color={"white"} />
            
        </>
    )

} 


export default BgAnime


