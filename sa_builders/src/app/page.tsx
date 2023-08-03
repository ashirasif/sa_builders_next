'use client'




// comps import
import NavigationBar from '@/comps/dom/nav_bar/NavBar'
import { Canvas } from '@react-three/fiber'
import Scene from '@/comps/3d/scene'
import { OrbitControls } from '@react-three/drei'
import SaText from '@/comps/dom/front_page/text'
import SaBottom from '@/comps/dom/front_page/bottom_text'
import { Suspense, useEffect, useRef, useState } from 'react'
import SaLoading from '@/comps/3d/loading'
import { PerspectiveCamera, OrthographicCamera } from '@react-three/drei'
import SaIntro from '@/comps/dom/sa_intro'
import SaHouse from '@/comps/dom/sa_house'



export default function Home() {

  function handleState() {
    setPerm(true)
  }

  const [perm, setPerm] = useState(false)
  const scr = useRef(0)

  return ( 
    
    <>
    {perm ? <> 
        <div className='w-full h-full relative z-10'>  
          <div className='h-[10%] relative z-20'>
            <NavigationBar props={{
              'Projects':'',
              'Architecture' : '',
              'Contact us' : ''
            }} />
          </div>
          
          <div className='flex flex-col justify-evenly h-[90%] items-center w-full'> 
            <div className='text-center animate-text-center relative top-[10%]'>
              <SaText />
            </div>
            <div className='relative -bottom-[100%] text-center animate-text-btm'>
             <SaBottom /> 
            </div>
          </div> 
          <SaIntro />
          <SaHouse />
        </div>
      </>
      :
      <SaLoading />}
      
      <div className='fixed top-0 w-screen h-screen bg-black'>
        <Canvas shadows color='black'>
          <Scene setPerm={setPerm}/>
          <OrbitControls />
          <gridHelper />
        </Canvas>
      </div>
    </>
    

  )
}


