'use client'

import { useInView } from "@react-spring/web";

import { useEffect, useState } from "react"


const Cost_Cal = () => {


    const [width, setWidth] = useState(window.innerWidth)


    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        
        // Remove the event listener when the component is unmounted
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

      const [show, setShow] = useState(false)
      const [ref, Inview] = useInView({
        amount:0.001,
        
      })

    return (
        <div className={"h-screen overflow transition-all duration-500 grid grid-cols-1 items-center relative" + (Inview ? '': '')} onMouseOver={() => setShow(true)} onMouseOut={() => setShow(false)}>
            <div className="tracking-widest self-start pl-3 border-l-8 border-primary">
                <h1 className="text-white text-xl lg:text-2xl">Try Our </h1>
                <h1 className={"text-primary text-3xl uppercase lg:text-6xl transition-all duration-500" + (Inview || show ? " lg:tracking-[10px] tracking-wider":" ")} ref={ref}>Cost Calculator</h1>
            </div>
            <div className={'justify-self-center pl-5 pr-3 transition-all duration-500' + (Inview || show ? ' left-0 relative': ' -left-full relative')}>
                <div className="text-left">
                    <p className="text-primary text-2xl tracking-widest inline">?: </p>
                    {width < 1024 ?
                    <>
                    <p className="text-white text-base inline font-light opacity-70 lg:text-lg">Get an instant quotation from the comfort of your living room sofa. Provide a brief explanation, and we'll promptly provide a rough estimate for your dream house. Afterwards, ring us to get started.</p>
                    </>
                    :
                    <>
                    <p className="text-white text-base inline font-light opacity-70 lg:text-lg">Obtain a prompt and accurate quotation from the comfort of your living room sofa. A concise elucidation is all it takes, and you shall promptly receive a rough estimate for the realization of your envisioned residence. Subsequently, kindly contact our team, and we shall commence the necessary actions without delay.</p>
                    </>}
                </div>
                <div className="text-left" >
                    <button className={"text-lg my-3 text-primary bg-transparent border-4 px-3 py-2 border-primary rounded transition-all duration-500 lg:border-2 lg:border-transparent lg:hover:border-primary lg:hover:border-2 lg:text-xl"+ (Inview || show ? " tracking-widest":"")}>Try It</button>
                </div>
            </div>
            <div className={"text-primary text-3xl border-l-8 border-primary"+(Inview || show ? " ":" lg:tracking-[10px] tracking-wider")}>
                &#9135;&#9135;&#9135;OR&#9135;&#9135;&#9135;
            </div>
            <div className={"pl-5 pr-3 transition-all duration-500"+(Inview || show ? ' left-0 relative': ' -left-full relative')}>
                <div className="">
                    <div className="text-white text-base inline font-light opacity-70 lg:text-xl">Alongside contruction services, we also operate as <p className="text-primary inline">brokers</p>. We have done your homework for you and now it's time to make a move.</div>
                </div>
                <div className="text-left">
                    <button className={"text-lg my-3 text-primary bg-transparent border-4 px-3 py-2 border-primary rounded transition-all lg:border-2 lg:border-transparent lg:hover:border-primary lg:hover:border-2 lg:text-xl"+ (Inview ? " tracking-widest":"")}>Check Out Some Trending Properties</button>
                </div>
            </div>
        </div>
    )
}


export default Cost_Cal




