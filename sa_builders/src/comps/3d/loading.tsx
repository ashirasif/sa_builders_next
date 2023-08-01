
import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { TextureLoader } from "three";



export default function SAloading() {


    return (
        <>
            <div className='flex flex-col justify-center items-center h-screen'>
                <img src="/loading_loader.png" alt="loader" className="aspect-square animate-spin w-60 absolute"/>
                <img src="/loading_logo.png" alt="logo" className="aspect-auto w-60 absolute" />
            </div>
        
        </>
    )
}


