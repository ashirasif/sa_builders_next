'use client'

import {useState} from 'react'

const SaIntro = () => {
    const [showDet, setShowDet] = useState(true)
    
    const handleOnClick = (e:Event) => {
        
    }
    
    return (
        <div className="w-full h-screen overflow-hidden lg:flex lg:flex-row lg:items-center lg:justify-start group">
            <div className={'relative border-l-8 border-primary h-full pl-4 p-8 lg:h-auto lg:transition-all lg:duration-1000' + (showDet?' lg:animate-none animate-back-left lg:basis-full lg:group-hover:translate-x-44': ' lg:animate-none animate-go-left lg:basis-1/2')}>
                <div className="text-white text-5xl">WE<br />BUILD<br /><h1 className="text-primary">STUFF</h1></div>
                <ul className='text-gray-300 mt-4 lg:text-gray-500 lg:text-xl text-lg'>
                    <li><a onClick={() => setShowDet(false)}className="hover:text-white hover:after:content-['_\27F6'] after:text-white transition-all duration-200">Single/Multi Floor Houses</a></li>
                    <li><a onClick={() => setShowDet(false)} className="hover:text-white hover:after:content-['_\27F6'] after:text-white transition-all duration-200">Studio Apartments</a></li>
                    <li><a onClick={() => setShowDet(false)}className="hover:text-white hover:after:content-['_\27F6'] after:text-white transition-all duration-200">Luxury Offices</a></li>
                    <li><a onClick={() => setShowDet(false)}className="hover:text-white hover:after:content-['_\27F6'] after:text-white transition-all duration-200">Shopping Centers</a></li>
                </ul>
                <button className='text-lg text-primary bg-transparent border-transparent hover:border-primary hover:border-2 rounded hover:px-3 hover:py-2 mt-8 transition-all'>Check out our past projects</button>
            </div>
            <div className={'h-screen relative left-[100vw] -top-[100vh] p-8 transition-all duration-1000 lg:static' + (showDet?' animate-go-right lg:animate-none lg:hidden':' lg:basis-1/2 animate-back-right lg:animate-none lg:block')}>
                <div className='flex flex-col justify-center items-center h-full'>
                    <button className="text-primary p-2 transition-all duration-200 mb-4 text-2xl hover:text-black hover:bg-primary hover:rounded-lg before:content-['<-'] before:text-primary before:text-2xl hover:before:text-black lg:before:content-['\2297'] lg:before:text-4xl self-start" onClick={() => setShowDet(true)}></button>
                    <div className='flex flex-col justify-center space-y-6 items-center'>
                        <img src="https://i.pinimg.com/564x/e2/15/8d/e2158d9a47aed9dedf9e5ead757445d5.jpg" alt="apartment" className='aspect-square lg:w-3/5 w-60 border-primary border-2' />
                        <p className='text-white text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate tempore magni unde illo voluptate voluptates commodi eius et ut recusandae consectetur, alias dignissimos ad eligendi nam quis vitae. Hic, eum.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SaIntro
