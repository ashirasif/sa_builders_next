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


      const [ref, Inview] = useInView({
        amount:0.01,
        
      })

      useEffect(() => {
        console.log(Inview)
      }, [Inview])



    return (
        <div className={"h-screen overflow border-b-4 transition-all duration-500 border-primary" + (Inview ? ' grid grid-cols-1 items-center': '')}>
            <div className="text-center tracking-widest self-start mt-8">
                <h1 className="text-white text-3xl lg:text-4xl">Try Our </h1>
                <h1 className={"text-primary text-3xl uppercase lg:text-7xl transition-all duration-500" + (Inview ? " lg:tracking-[10px] tracking-wider":" ")}>Cost Calculator</h1>
            </div>
            <div className='justify-self-center' ref={ref}>
                <div className="p-2 text-center">
                    <p className="text-primary text-2xl tracking-widest inline">?: </p>
                    {width < 1024 ?
                    <>
                    <p className="text-white text-base inline font-light opacity-70 lg:text-xl">Get an instant quotation from the comfort of your living room sofa. Provide a brief explanation, and we'll promptly provide a rough estimate for your dream house. Afterwards, ring us to get started.</p>
                    </>
                    :
                    <>
                    <p className="text-white text-base inline font-light opacity-70 lg:text-xl">Obtain a prompt and accurate quotation from the comfort of your living room sofa. A concise elucidation is all it takes, and you shall promptly receive a rough estimate for the realization of your envisioned residence. Subsequently, kindly contact our team, and we shall commence the necessary actions without delay.</p>
                    </>}
                </div>
                <div className="text-center">
                    <button className="text-lg text-primary bg-transparent border-4 px-3 py-2 border-primary rounded hover:px-3 hover:py-2  transition-all lg:border-0 lg:border-transparent lg:hover:border-primary lg:hover:border-2 lg:text-3xl">Try It</button>
                </div>
            </div>
            <div className="text-primary text-3xl text-center ">
                &#9135;&#9135;&#9135;OR&#9135;&#9135;&#9135;
            </div>
            <div>
                <div className="mx-4 text-center">
                    <button className="text-lg text-primary bg-transparent border-4 px-3 py-2 border-primary rounded hover:px-3 hover:py-2  transition-all lg:border-0 lg:border-transparent lg:hover:border-primary lg:hover:border-2 lg:text-3xl ">Check Out Some <br /> Trending Properties</button>
                </div>
                <div className="p-2 text-center">
                    <div className="text-white text-base inline font-light opacity-70 lg:text-xl">Alongside contruction services, we also operate as <p className="text-primary inline">brokers</p>. We have done your homework for you and now it's time to make a move.</div>
                </div>
            </div>
        </div>
    )
}


export default Cost_Cal




