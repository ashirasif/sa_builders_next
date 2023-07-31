
import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { TextureLoader } from "three";



export default function SAloading({size=15,ws=1,hs=1}) {
    const loader = useRef(null)

    const logo_tex = useLoader(TextureLoader, "/logo_2.jpg");
    const loader_text = useLoader(TextureLoader, "/loader.png");

    useFrame(({clock}) => {
        loader.current.rotation.z = clock.getElapsedTime() / -1.0
    })


    return (
        <>
            <mesh ref={loader} scale={0.1}>
                <planeGeometry args={[size,size,ws,hs]} />
                <meshBasicMaterial map={loader_text} color={"#f7ae3b"}/> 
            </mesh>
            <mesh scale={0.1}>
                <planeGeometry args={[size-6,size-10,ws,hs]} />
                <meshBasicMaterial map={logo_tex} />
            </mesh>
        </>
    )
}


