'use client'


import { MutableRefObject, Suspense, createContext, useContext, useEffect, useRef, useState } from "react"
import BgAnime from "./bg_anime_orth"
import { useFrame } from "@react-three/fiber"





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
    const scr = useRef<number>(0)
    const totalPages = useRef<number>(0)
    const [prog, setProg] = useState<number>(0)
    // handle permission to render dom elements
    function handlePerm() {
        setPerm(true)
    }
    // scroll progress (%)
    function handleScroll() {
      
        setProg(Math.floor(window.scrollY/ (document.documentElement.scrollHeight - window.innerHeight) * 100))
        totalPages.current = Math.floor(document.documentElement.scrollHeight / window.innerHeight)
        
    }

    // window scroll event
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])


    return (
        
        <Suspense fallback={<Perm handleState={handlePerm} />}>
          <BgAnime animation={{start: 0, end: 50, prog: prog}} />
        </Suspense>
        
    )
}


export default Scene

