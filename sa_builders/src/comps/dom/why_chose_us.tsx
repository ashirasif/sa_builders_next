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
        amount: 0.001
    })


    return (
        <div className="h-screen overflow-hidden text-white transition-all duration-500">
            <div>
                <div className="text-white text-2xl">Why Your Should <h1 className="text-primary underline-offset-2 inline-block">REALLY</h1> Choose Us:</div>
            </div>
            <div className={InView ? "mt-6": ""}>
                <ul className='list-disc list-inside'>
                    <div className={"text-primary transition-all duration-200" + inView?" space-y-3": " "}>
                        <li onClick={() => handleClick(1)}>
                            Experience and Expertise<p className={showDet == 1 ? "inline text-white":"hidden"}>: With years of experience in the construction industry, we bring a wealth of expertise to every project,ensuring top-quality results.</p>
                        </li>
                        <li onClick={() => handleClick(2)}>
                            Timely Delivery<p className={showDet == 2 ? "inline text-white":"hidden"}>: Our streamlined processes and efficient project management ensure that we meet deadlines without compromising quality.</p>
                        </li>
                        <li onClick={() => handleClick(3)}>
                            Quality Materials<p className={showDet == 3 ? "inline text-white":"hidden"}>: Using only the finest materials, we ensure that our construction work stands the test of time.</p>
                        </li>
                        <li onClick={() => handleClick(4)}>
                            Honest Pricing<p className={showDet == 4 ? "inline text-white": "hidden"}>: Our transparent pricing policy ensures no hidden costs and provides you with value for your investment.</p>
                        </li>
                        <animated.li onClick={() => handleClick(5)} ref={ref}>
                            Aftercare Services<p className={showDet == 5? "inline text-white":"hidden"}>: While most companies stop after construction, we don't. Covering maintanance for the initial years is complementary from our side</p>
                        </animated.li>
                    </div>
                </ul>
            </div>
        </div>
    )    
}


export default WhyChooseUS


