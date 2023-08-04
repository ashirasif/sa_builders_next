
'use client'

import {easing} from 'maath'

import { useFrame, useLoader } from "@react-three/fiber"
import { useState, useEffect, useRef } from "react";
import { Color, TextureLoader } from "three";
import { useSpring, animated } from '@react-spring/web';

const Sa3DHouse = ({anime}: {anime:{start:number,end:number,prog:number}}) => {
    const emissiveRef = useRef()
    const [show, setShow] = useState(false)
    const texture = useLoader(TextureLoader, '/sky.jpg')
    useEffect(() => {
        if (anime.prog >= anime.start) {
            setShow(true)
        } else {
            setShow(false)
        }
    }, [anime.prog])    

    const {color} = useSpring({
        from : { color: '#000000'},
        to : { color: '#95b1ba'},
        config: {duration : 1000}
    })

    useFrame((state, dt) => {
        if (show) {
            easing.damp(state.camera, 'zoom', 5, 0.02, dt)          
            if (emissiveRef.current) {
                
            }
            
        }
    })

    return (
        <>
        {show && (
            <mesh>
                <planeGeometry args={[10,10,1,1]} />
                <meshStandardMaterial map={texture} emissive={'#95b1ba'} ref={emissiveRef} />
            </mesh>
        )}
        </>
    )

}

export default Sa3DHouse

