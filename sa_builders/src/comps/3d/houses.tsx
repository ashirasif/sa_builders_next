
'use client'

import {easing} from 'maath'

import { useFrame, useLoader } from "@react-three/fiber"
import { useState, useEffect, useRef } from "react";
import { Color, TextureLoader } from "three";
import { useSpring, animated } from '@react-spring/three';
import { Sky } from '@react-ree/drei';
import { Environment } from '@react-three/drei';



const Sa3DHouse = ({anime}: {anime:{start:number,end:number,prog:number}}) => {
    
    const [show, setShow] = useState(false)
    const texture = useLoader(TextureLoader, '/sky.jpg')


    useEffect(() => {
        if (anime.prog >= anime.start) {
            setShow(true)
        } else if (anime.prog > anime.end || anime.prog < anime.start) {
            setShow(false)
        }
    }, [anime.prog])    

    const props = useSpring({
        to : {
            int: show? 2 : 0,
            clr: show? '#9bbee8': '#000000'
        },
        config : {duration: 1000}
    })

    useFrame((state, dt) => {
        if (show) {
            easing.damp(state.camera, 'zoom', 5, 0.003, dt)   
            state.camera.updateProjectionMatrix() 
        }
    })

    return (
        <>
        {show && (
            <>
            <Environment preset='apartment' background blur={0.0}/>
            </>
        )}
        </>
    )

}

export default Sa3DHouse

