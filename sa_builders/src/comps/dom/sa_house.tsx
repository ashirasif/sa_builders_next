'use client'
import { useEffect, useState, useRef } from "react"

import { useSpring, animated, useInView } from "@react-spring/web"



const SaHouse = () => {



    const [ref, inView] = useInView({
        amount: 0.0009,
        
    })




    return(
        <div className="h-screen text-white group overflow-hidden">
            <div ref={ref} className={"text-3xl flex flex-col h-full font-black" + (inView? ' text-black justify-center': ' text-white justify-start')}>
                <h1 className={"transition-all duration-1000 text-8xl hyphens-auto" + (inView ? " text-9xl" : "")}>Now For Real The Intro</h1>
                <h1 className={"transition-all duration-1000 text-7xl" + (inView ? " text-7xl" : "")}>Behold</h1>
                <h1 className={'uppercase transition-all duration-1000 text-9xl' + (inView ? " text-9xl": "")}>Our Houses</h1>
            </div>
        </div>
    )
}


export default SaHouse
