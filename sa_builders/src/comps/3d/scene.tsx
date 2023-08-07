'use client'


import { Suspense, useEffect, useRef, useState } from "react"
import BgAnime from "./bg_anime_orth"
import { PerspectiveCamera, OrthographicCamera, useHelper } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import Sa3DHouse from "./houses"
import SimpleHouse from "./simple"
import { PointLightHelper, RectAreaLight } from "three/src/Three.js"


function Perm({handleState} : {handleState: (s: boolean) => void}) {
  useEffect(() => {
    return(() => {
      handleState(true)
    })
  }, []) 
  return (<></>)
}


const Scene = ({setPerm} : {setPerm: (s: boolean) => void}) => {

    // init all refs and states
    
    const [perscam, setPerscam] = useState<boolean>(false)
    const [prog, setProg] = useState<number>(0)
    // handle permission to render dom elements
    function handlePerm() {
        setPerm(true)
    }
    // scroll progress (%)
    function handleScroll() {
        setProg(Math.floor(window.scrollY/ (document.documentElement.scrollHeight - window.innerHeight) * 100))
    }
    

    const state = useThree()

    // toggle camera
    useEffect(() => {
      if (prog > 12) {
        setPerscam(true)
      } else {
        setPerscam(false)
      }
    }, [prog])

    // window scroll event
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    // useEffect(() => {
    //   console.log(prog)
    // }, [prog])
    const ref = useRef()
    
  
    return (
        
        <Suspense fallback={<Perm handleState={handlePerm} />}>
          <BgAnime animation={{start: 0, end: 12, prog: prog}} />
          <Sa3DHouse anime={{start: 13, end: 100, prog: prog}} />
          <SimpleHouse />
          <rectAreaLight color={"#f7aeb3"} width={12} height={12} intensity={199} position={[0,20,15]}/>
          {perscam ? <PerspectiveCamera makeDefault position={[0,0,5]} fov={100} aspect={window.innerWidth/window.innerHeight} near={0.1} far={2000}/> : <OrthographicCamera makeDefault zoom={220} position={[0,0,5]}/>}
        </Suspense>
        
    )
}


export default Scene

