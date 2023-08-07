
'use client'

import {easing} from 'maath'

import { useFrame, useLoader, useThree } from "@react-three/fiber"
import { useState, useEffect, useRef } from "react";

import { useSpring, animated } from '@react-spring/three';
import { Sky, useCamera } from '@react-three/drei';
import { Environment } from '@react-three/drei';



const Sa3DHouse = ({anime}: {anime:{start:number,end:number,prog:number}}) => {
    
    const [show, setShow] = useState(false)
    const three = useThree()
    const coords = useRef({x:0,y:0})

    useEffect(() => {
        if (anime.prog >= anime.start) {
            setShow(true)
            if (anime.prog == anime.start) {
                three.gl.toneMappingExposure = 0
            }
        } else if (anime.prog > anime.end || anime.prog < anime.start) {
            setShow(false)
        }
    }, [anime.prog])    


    useEffect(() => {
        const handleWindowMouseMove = (event : any) => {
        coords.current.x = (event.clientX - (window.innerWidth / 2)) / (window.innerWidth / 2) 
        coords.current.y = (event.clientY - (window.innerHeight / 2)) / (window.innerHeight / 2) 
        };
        console.log(coords.current)
        window.addEventListener('mousemove', handleWindowMouseMove);
        return () => {
        window.removeEventListener(
            'mousemove',
            handleWindowMouseMove,
        );
        };
    }, []);


    useFrame((state, dt) => {
        if (show) {
            easing.damp(state.camera, 'zoom', 5, 0.003, dt)   
            state.camera.updateProjectionMatrix()
            
            if (state.gl.toneMappingExposure <= 0.4) {
                state.gl.toneMappingExposure += 0.01
                
            }
        } else {
            state.gl.toneMappingExposure = 1
        }
    })

    return (
        <>
        {show && (
            <>
                {/* <Sky
                    turbidity={14}
                    rayleigh={4}
                    distance={45000}
                    sunPosition={[0,1,1]}
                /> */}
                <Environment preset='dawn' background ground/>
            </>
        )}
        </>
    )

}

export default Sa3DHouse

