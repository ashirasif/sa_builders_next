'use client'
import { useEffect, useState, useRef } from "react"

import { useSpring, animated, useInView } from "@react-spring/web"



const SaHouse = () => {



    const [ref, inView] = useInView({
        amount: [0.01],
        
    })

    const animation = useSpring({
        transform: inView ? 'translateX(30px)': 'translateX(0px)',
        
    }) 

    useEffect(() => {
        console.log(inView)
    }, [inView])


    return(
        <div className="h-screen text-white group overflow-hidden border-primary border-l-4">
            <animated.div ref={ref} className="text-white text-3xl" >
                <h1 className={"transition-all duration-500" + (inView ? " my-10" : "")}>Now For Some Real Introduction!</h1>
                <h1 className={"transition-all duration-500" + (inView ? " my-10" : "")}>Behold</h1>
                <h1 className={'uppercase transition-all duration-500' + (inView ? " my-10": "")}>Our Houses</h1>
            </animated.div>
        </div>
    )
}


export default SaHouse
