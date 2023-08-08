import { useInView, animated } from "@react-spring/web"




const CEO = () => {


    const [ref, InView] = useInView({
        amount: 0.001
    })


    return(
        <div className="h-screen overflow-hidden">
            <div className={"h-[70%] max-sm:bg-[length:50vw_70vw] sm:bg-[length:50vh_71vh] bg-right-bottom transition-all duration-500" + (InView ? " bg-slate-900":" bg-black" )} style={{"backgroundImage":"url(/nazim.png)","backgroundRepeat":"no-repeat"}}>
                <div className="text-primary p-4 mr-4 text-justify grid grid-cols-2 items-end justify-items-center h-[100%] font-sans">
                    <div className="text-white xl:text-xl md:tracking-wider text-justify">Growing companies must not only look into the future but also beleive that it is essential to look into our past from where we began. We should not expect excellence in the future unless we measure the success of our past, listen to our clients and take neccessary and appropriate actions to meet their needs.</div>
                    <br />
                    <div className="text-lg xl:text-xl text-left justify-self-start self-start" ref={ref}>Muhammad Nazim <br />CEO</div>
                </div>
            </div>
            <div className="bg-black h-[30%]">

            </div>
        </div>
    )
}


export default CEO


