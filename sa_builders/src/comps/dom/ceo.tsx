import { useInView, animated } from "@react-spring/web"




const CEO = () => {


    const [ref, InView] = useInView({
        amount: 0.001
    })


    return(
        <div className="h-screen overflow-hidden">
            <div className={"h-[70%] max-sm:bg-[length:150px_214px] bg-right-bottom transition-all duration-500" + (InView ? " bg-slate-900":" bg-black" )} style={{"backgroundImage":"url(/nazim.png)","backgroundRepeat":"no-repeat"}}>
                <div className="text-primary p-4 mr-4 text-justify sm:grid sm:grid-cols-2 sm:justify-evenly lg:h-[100%]">
                    <div className="text-white md:text-2xl md:tracking-wider text-center">Growing companies must no only look into the future but also beleive that it is essential to look into our past from where we began. We should not expect excellence in the future unless we measure the success of our past, listen to our clients and take neccessary and appropriate actions to meet their needs.</div>
                    <br />
                    <div className="text-2xl md:text-4xl md:tracking-[8px] text-center" ref={ref}>Muhammad Nazim <br />CEO</div>
                </div>
            </div>
            
        </div>
    )
}


export default CEO


