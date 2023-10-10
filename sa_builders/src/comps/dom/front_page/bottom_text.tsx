
'use client'

import Image from "next/image"

const SaBottom = () => {
    
    
    return (
        <>
            <Image src="/loader_2.png" height={100} width={100} alt="loader" className="rounded-full aspect-square w-20 mx-auto mt-3 animate-spin"/>                
            <p className="text-white text-sm font-[950] md:tracking-[7px] md:text-base tracking-[3px]">SCROLL DOWN FOR A SHORT INTRO</p>            
        </>
        
    )
}


export default SaBottom


