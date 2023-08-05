'use client'


import { Suspense, useEffect, useRef, useState } from "react"
import BgAnime from "./bg_anime_orth"
import { PerspectiveCamera, OrthographicCamera } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import Sa3DHouse from "./houses"
import SimpleHouse from "./simple_h"


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
      if (prog > 50) {
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


    return (
        
        <Suspense fallback={<Perm handleState={handlePerm} />}>
          <BgAnime animation={{start: 0, end: 8, prog: prog}} />
          {/* <Sa3DHouse anime={{start: 51, end: 100, prog: prog}} /> */}
          
          {perscam ? <PerspectiveCamera makeDefault position={[0,0,5]} fov={70} near={0.1} far={2000}/> : <OrthographicCamera makeDefault zoom={220} position={[0,0,5]}/>}
        </Suspense>
        
    )
}


export default Scene

