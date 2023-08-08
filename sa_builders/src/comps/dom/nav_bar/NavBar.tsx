"use client"

import {useState} from 'react'


const NavigationBar = ({props}: any) => {

  const [dd, setDd] = useState(false);  

  return (
    <nav className="bg-transparent p-4 relative -top-[100px] animate-navbar">
      <div className="mx-auto">
        <div className="flex items-center justify-between">
            <div className="md:left-0 md:w-24 w-1/6 relative left-[40%]">
              <a href="#" className=""><img src="/logo.png" alt="logo" className="aspect-auto"/></a>  
          </div>
          <div className="space-x-6 hidden md:block"> 
            {
              Object.keys(props).map(function(key: any) {
                return (<a
                  href={props[key]}
                  key={key}
                  className="text-primary tracking-[2px] border-black font-semibold uppercase hover:border-2 hover:border-primary px-3 py-2 rounded transition-all ease-linear duration-350 hover:tracking-[3px]" style={{"wordSpacing":"-1px"}}
                >
                {key}
                </a>) 
              })
            }
          </div>
          {/* DropDown Starts here */}
          <div className="md:hidden md:w-24 w-1/6">
            <div className="text-primary font-extrabold border-s-[3px] border-b-[3px] border-primary px-5 py-1 text-xl hover:text-2xl hover:bg-primary hover:text-black transition-all duration-200">
              <button onClick={() => setDd(!dd)}>&lt;-</button>
            </div>
            <div className={"h-full fixed top-0 right-0 bg-slate-900 transition-all duration-500 overflow-hidden " + (dd ? "w-full": "w-0")}>
              <button onClick={() => setDd(!dd)} className="text-primary font-extrabold border-e-[3px] border-b-[3px] border-primary px-5 py-3 text-xl hover:bg-primary hover:text-black hover:text-2xl transition-all duration-350">
                -&gt;
              </button>
              {
                Object.keys(props).map(function(key: any) {
                  return (<a
                    href={props[key]}
                    key={key}
                    className="text-primary tracking-[2px] border-black font-semibold uppercase hover:border-2 hover:border-primary px-3 py-2 mx-2 my-4 rounded transition-all ease-linear duration-350 hover:tracking-[3px] block" style={{"wordSpacing":"-1px"}}
                  >
                  {key}
                  </a>) 
                })
              } 
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;