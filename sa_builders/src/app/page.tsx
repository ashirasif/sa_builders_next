'use client'


import Image from 'next/image'

// comps import
import NavigationBar from '@/comps/dom/nav_bar/NavBar'
import { Canvas } from '@react-three/fiber'
import BgAnime from '@/comps/3d/bg_anime_orth'
import { OrbitControls } from '@react-three/drei'


export default function Home() {
  

  return ( 
    <div className='w-full h-full'>
      <div className='z-10 relative'>
        <NavigationBar props={{
          'Projects':'',
          'Architecture' : '',
          'Contact us' : ''
        }} />
      </div>
      <div className='fixed top-0 w-screen h-screen'>
        <Canvas orthographic camera={{zoom:140, position:[0,0,5]}}>
          <BgAnime/>
          <OrbitControls /> 
        </Canvas>
      </div>
      
    </div>

  )
}
