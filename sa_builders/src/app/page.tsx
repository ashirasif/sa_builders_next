'use client'

// comps import

import { Canvas } from '@react-three/fiber'
import Scene from '@/comps/3d/scene'
import { OrbitControls } from '@react-three/drei'
import { Suspense, useEffect, useRef, useState } from 'react'
import SaLoading from '@/comps/3d/loading'

import SaIntro from '@/comps/dom/sa_intro'
import SaHouse from '@/comps/dom/sa_house'
import Page from '@/comps/dom/emppage'
import WhyChooseUS from '@/comps/dom/why_chose_us'
import Cost_Cal from '@/comps/dom/cost_calc'
import CEO from '@/comps/dom/ceo'
import Testimonial from '@/comps/dom/testimonial'
import Furniture from '@/comps/dom/furniture'
import SimpleHouse from '@/comps/dom/simple_house'
import FancyHouse from '@/comps/dom/fancy_house'
import Pool from '@/comps/dom/pool'
import Neon from '@/comps/dom/noen_room'
import Front from '@/comps/dom/front'



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
          <Front/>
          <SaIntro />
          <SaHouse />
          <SimpleHouse />
          <FancyHouse />
          <Pool />
          <Neon />
          <WhyChooseUS />
          <Cost_Cal />
          <Furniture />
          <Testimonial />
          <CEO />
        </div>
      </>
      :
      <SaLoading />}
      
      <div className='fixed top-0 w-screen h-screen bg-black'>
        <Canvas 
          shadows 
          color='black' 
          linear>
          <Scene setPerm={setPerm}/>
          
        </Canvas>
      </div>
    </>
    

  )
}


