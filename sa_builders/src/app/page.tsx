'use client'


import Image from 'next/image'

// comps import
import NavigationBar from '@/comps/dom/nav_bar/NavBar'
import { Canvas } from '@react-three/fiber'
import BgAnime from '@/comps/3d/bg_anime_orth'
import { OrbitControls } from '@react-three/drei'
import SaText from '@/comps/dom/front_page/text'
import SaBottom from '@/comps/dom/front_page/bottom_text'
import { Suspense, useEffect, useState } from 'react'
import SaLoading from '@/sa_3d/loading'
import { div } from 'three/examples/jsm/nodes/Nodes.js'




function Perm({handleState} : any) {
  useEffect(() => {
    return(() => {
      handleState(true)
    })
  }, []) 

  return(<></>)
}



export default function Home() {

  function handleState() {
    setPerm(true)
  }
 
  const [perm, setPerm] = useState(false)
  
  useEffect(() => {
    console.log(perm)
  }, [perm])

  return ( 
    <>
    {perm ? <div className='w-full h-full'>
      <div className='w-full h-full relative z-10'>
      
          <div className='h-[10%]'>
            <NavigationBar props={{
              'Projects':'',
              'Architecture' : '',
              'Contact us' : ''
            }} />
          </div>

          <div className='flex flex-col justify-evenly h-[90%] items-center w-full'> 
            <div className='text-center animate-text-center'>
              <SaText />
            </div>
            <div className='relative -bottom-[100%] text-center animate-text-btm'>
             <SaBottom /> 
            </div>
          </div>
      </div>
      </div> 
      :
      <div className='flex flex-col justify-center items-center h-screen'>
        <img src="/loader_2.png" alt="loader" className="aspect-square animate-spin w-52"/>
      </div>}
      

      <div className='fixed top-0 w-screen h-screen'>
        <Canvas orthographic camera={{zoom:229, position:[0,0,5]}} >
          <Suspense fallback={<Perm handleState={handleState} />} >
          
            <BgAnime/>
            
          </Suspense>
          <OrbitControls />
        </Canvas>
      </div>
      
  </>

  )
}


