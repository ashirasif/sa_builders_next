
'use client'

import {easing} from 'maath'
import { Environment } from "@react-three/drei"
import { useFrame, useLoader } from "@react-three/fiber"
import { useState, useEffect } from "react";
import { TextureLoader } from "three";

const Sa3DHouse = ({anime}: {anime:{start:number,end:number,prog:number}}) => {

    const [show, setShow] = useState(false)
    const texture = useLoader(TextureLoader, '/sky.jpg')
    useEffect(() => {
        if (anime.prog >= anime.start) {
            setShow(true)
        } else {
            setShow(false)
        }
    }, [anime.prog])    

    useFrame((state, dt) => {
        if (show) {
            easing.damp(state.camera, 'zoom', 5, 0.02, dt)          
        }
    })

    return (
        <>
        {show && (
            <mesh>
                <planeGeometry args={[10,10,1,1]} />
                <meshStandardMaterial emissive={'#faad32'} map={texture} />
            </mesh>
        )}
        </>
    )

}

export default Sa3DHouse

