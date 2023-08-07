'use client'


import { useInView } from "@react-spring/web"



const SaHouse = () => {



    const [ref, inView] = useInView({
        amount: 0.0009,
        
    })




    return(
        <div className="h-screen text-white group overflow-hidden py-8">
            <div className={"grid grid-row h-full transition-all duration-500 font-black" + (inView? ' items-center text-black': ' text-white items-start')}>
                <h1 className={"transition-all duration-1000 text-7xl " + (inView ? "" : "")}>Now For The Real Intro</h1>
                <h1 className={"transition-all duration-1000 text-8xl" + (inView ? "" : "")}>Behold</h1>
                <h1 className={'uppercase transition-all duration-1000 text-8xl' + (inView ? "": "")} ref={ref}>Our houses</h1>
                
            </div>
        </div>
    )
}


export default SaHouse
