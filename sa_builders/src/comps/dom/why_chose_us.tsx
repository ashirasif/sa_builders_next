import { useInView, animated } from "@react-spring/web"
import { useEffect, useState } from "react"
import { InView } from "react-intersection-observer"


const WhyChooseUS = () => {

    const [showDet, setshowDet] = useState(0)

    function handleClick(n) {
        if (showDet == n) {
            setshowDet(0)
        } else {
            setshowDet(n)
        }
    }
    
    const [ref, InView] = useInView({
        amount: 0.001,
        once: false
    })



    return (
        <div className="h-screen overflow-hidden grid grid-cols-1 justify-start border-primary border-b-4">
            <div className={"mt-6"}>
                <div className={"text-white text-4xl lg:text-7xl lg:border-l-8 lg:border-primary pl-3 transition-all duration-500" + ( InView ? " lg:tracking[10px] tracking-wider" : ' ')}>Why You Should <br /><h1 className="text-primary inline-block">REALLY</h1> Choose <br /> Us</div>
            </div>
            <div className={InView ? " lg:mt-20 mt-6 self-center": ""}>
                <ul className='list-inside' >
                    <div className={"text-primary transition-all duration-500 ml-2 relative lg:text-2xl pr-4" + (InView?" space-y-3 lg:space-y-12 left-0": " -left-full")} >
                        <li onClick={() => handleClick(1)} className={'transition-all duration-200lg:border-l-4 lg:hover:border-primary border-primary border-l-2 lg:pl-4 pl-2 lg:hover:text-3xl hover:text-lg lg:hover:border-l-8 hover:cursor-pointer group' + (showDet == 1 ? " border-l-8 lg:text-3xl":"")}>
                            Experience and Expertise<p className={showDet == 1 ? " inline text-white lg:hover:text-2xl group-hover:lg:text-2xl lg:text-2xl text-base":" hidden"}>: With years of experience in the construction industry, we bring a wealth of expertise to every project,ensuring top-quality results.</p>
                        </li>
                        <li onClick={() => handleClick(2)} className={'transition-all duration-200lg:border-l-4 lg:hover:border-primary border-primary border-l-2 lg:pl-4 pl-2 lg:hover:text-3xl hover:text-lg lg:hover:border-l-8 hover:cursor-pointer group' + (showDet == 2 ? " border-l-8 lg:text-3xl":"")}>
                            Timely Delivery<p className={showDet == 2 ? " inline text-white lg:hover:text-2xl group-hover:lg:text-2xl lg:text-2xl text-base":" hidden"}>: Our streamlined processes and efficient project management ensure that we meet deadlines without compromising quality.</p>
                        </li>
                        <li onClick={() => handleClick(3)} className={'transition-all duration-200lg:border-l-4 lg:hover:border-primary border-primary border-l-2 lg:pl-4 pl-2 lg:hover:text-3xl hover:text-lg lg:hover:border-l-8 hover:cursor-pointer group' + (showDet == 3 ? " border-l-8 lg:text-3xl":"")}>
                            Quality Materials<p className={showDet == 3 ? " inline text-white lg:hover:text-2xl group-hover:lg:text-2xl lg:text-2xl text-base":" hidden"}>: Using only the finest materials, we ensure that our construction work stands the test of time.</p>
                        </li>
                        <li onClick={() => handleClick(4)} className={'transition-all duration-200lg:border-l-4 lg:hover:border-primary border-primary border-l-2 lg:pl-4 pl-2 lg:hover:text-3xl hover:text-lg lg:hover:border-l-8 hover:cursor-pointer group' + (showDet == 4 ? " border-l-8 lg:text-3xl":"")}>
                            Honest Pricing<p className={showDet == 4 ? " inline text-white lg:hover:text-2xl group-hover:lg:text-2xl lg:text-2xl text-base":" hidden"}>: Our transparent pricing policy ensures no hidden costs and provides you with value for your investment.</p>
                        </li>
                        <li onClick={() => handleClick(5)} className={'transition-all duration-200lg:border-l-4 lg:hover:border-primary border-primary border-l-2 lg:pl-4 pl-2 lg:hover:text-3xl hover:text-lg lg:hover:border-l-8 hover:cursor-pointer group' + (showDet == 5 ? " border-l-8 lg:text-3xl":"")}>
                            Aftercare Services<p className={showDet == 5? " inline text-white lg:hover:text-2xl group-hover:lg:text-2xl lg:text-2xl text-base":" hidden"}>: While most companies stop after construction, we don't. Covering maintanance for the initial years is complementary from our side.</p>
                        </li>
                    </div>
                </ul>
            </div>
            <div className="text-left self-center" ref={ref}>
                <button className="text-lg text-primary bg-transparent border-4 px-3 py-2 border-primary rounded hover:px-3 hover:py-2 mt-8 transition-all lg:border-0 lg:border-transparent lg:hover:border-primary lg:hover:border-2 lg:text-3xl">Interested? Get In Touch</button>

            </div>
        </div>
    )    
}


export default WhyChooseUS


