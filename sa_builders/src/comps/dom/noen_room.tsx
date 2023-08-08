
import { useInView } from "@react-spring/web"
import { useState } from "react"


const Neon = () => {
    const [show, setShow] = useState(false)
    const [ref, inView] = useInView({
        amount: 0.001
    })

    return(
        <div className={"h-screen p-4 flex overflow-hidden flex-col justify-center text-center transition-all duration-500" + (inView || show ? ' lg:border-l-8 lg:border-primary': '')} onMouseOver={() => setShow(true)} onMouseOut={() => setShow(false)} ref={ref}>
            <div className={"transition-all duration-500 relative"+ (inView || show ? " left-0": " -left-full")}>
                <div className={"text-6xl uppercase" + (inView? " tracking-widest" : "")}>
                    <div className="text-white transition-all duration-500">To <div className={"transition-all duration-500" + (inView || show ? " text-primary": "" )}>Neon Rooms</div></div>
                </div>
                <div className="flex flex-row justify-center">
                    <img src="/neon.png" alt="" className="md:w-[120vh]"/>
                </div>
            </div>
        </div>
    )
}


export default Neon
