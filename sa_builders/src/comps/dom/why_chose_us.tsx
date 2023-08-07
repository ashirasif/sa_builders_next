import { useInView } from "@react-spring/web"
import { useState } from "react"



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
        <div className="h-screen overflow-hidden grid grid-row-2 items-center gap-0">
            <div ref={ref} >
                <div className={"text-white text-3xl lg:text-5xl border-l-8 border-primary pl-3 transition-all duration-500" + ( InView ? " lg:tracking[10px] tracking-wider" : ' ')}>Why You Should <br /><h1 className="text-primary inline-block">REALLY</h1> Choose <br /> Us</div>
            </div>
            <div className={InView ? "  self-center": ""}>
                <ul className='list-inside' >
                    <div className={"text-primary transition-all duration-500 ml-2 relative lg:text-xl pr-4" + (InView?" space-y-3 lg:space-y-4 left-0": " -left-full")} >

                        <li onClick={() => handleClick(1)} className={'transition-all duration-200lg:border-l-4 lg:hover:border-primary border-primary border-l-2 lg:pl-4 pl-2 lg:hover:text-xl hover:text-lg lg:hover:border-l-8 hover:cursor-pointer group' + (showDet == 1 ? " border-l-8 lg:text-xl":"")}>
                            Experience and Expertise<p className={showDet == 1 ? " inline text-white lg:hover:text-xl group-hover:lg:text-xl lg:text-xl text-base":" hidden"}>: With years of experience in the construction industry, we bring a wealth of expertise to every project,ensuring top-quality results.</p>
                        </li>

                        <li onClick={() => handleClick(2)} className={'transition-all duration-200lg:border-l-4 lg:hover:border-primary border-primary border-l-2 lg:pl-4 pl-2 lg:hover:text-xl hover:text-lg lg:hover:border-l-8 hover:cursor-pointer group' + (showDet == 2 ? " border-l-8 lg:text-xl":"")}>
                            Timely Delivery<p className={showDet == 2 ? " inline text-white lg:hover:text-xl group-hover:lg:text-xl lg:text-xl text-base":" hidden"}>: Our streamlined processes and efficient project management ensure that we meet deadlines without compromising quality.</p>
                        </li>

                        <li onClick={() => handleClick(3)} className={'transition-all duration-200lg:border-l-4 lg:hover:border-primary border-primary border-l-2 lg:pl-4 pl-2 lg:hover:text-xl hover:text-lg lg:hover:border-l-8 hover:cursor-pointer group' + (showDet == 3 ? " border-l-8 lg:text-xl":"")}>
                            Quality Materials<p className={showDet == 3 ? " inline text-white lg:hover:text-xl group-hover:lg:text-xl lg:text-xl text-base":" hidden"}>: Using only the finest materials, we ensure that our construction work stands the test of time.</p>
                        </li>

                        <li onClick={() => handleClick(4)} className={'transition-all duration-200lg:border-l-4 lg:hover:border-primary border-primary border-l-2 lg:pl-4 pl-2 lg:hover:text-xl hover:text-lg lg:hover:border-l-8 hover:cursor-pointer group' + (showDet == 4 ? " border-l-8 lg:text-xl":"")}>
                            Honest Pricing<p className={showDet == 4 ? " inline text-white lg:hover:text-xl group-hover:lg:text-xl lg:text-xl text-base":" hidden"}>: Our transparent pricing policy ensures no hidden costs and provides you with value for your investment.</p>
                        </li>

                        <li onClick={() => handleClick(5)} className={'transition-all duration-200lg:border-l-4 lg:hover:border-primary border-primary border-l-2 lg:pl-4 pl-2 lg:hover:text-xl hover:text-lg lg:hover:border-l-8 hover:cursor-pointer group' + (showDet == 5 ? " border-l-8 lg:text-xl":"")}>
                            Aftercare Services<p className={showDet == 5 ? " inline text-white lg:hover:text-xl group-hover:lg:text-xl lg:text-xl text-base":" hidden"}>: While most companies stop after construction, we don't. Covering maintanance for the initial years is complementary from our side.</p>
                        </li>

                        <li className="">
                            <button className={"text-lg my-3 text-primary bg-transparent border-4 px-3 py-2 border-primary rounded transition-all lg:border-2 lg:border-transparent lg:hover:border-primary lg:hover:border-2 lg:text-xl tracking-widest"}>Interested? Get In Touch</button>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    )    
}


export default WhyChooseUS


