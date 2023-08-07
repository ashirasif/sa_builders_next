import { useGLTF, useHelper } from "@react-three/drei"
import { useEffect } from "react"
import { DirectionalLightHelper } from "three/src/Three.js"


const SimpleHouse = () => {

    const model = useGLTF("/simple.gltf")
    
    useEffect(() => {
        console.log(model.scene)
    })


    return(
        <>
        <primitive object={model.scene} />
        </>
    )    
}


export default SimpleHouse


