import { useInView } from "@react-spring/web";

import { useState } from "react";

const Testimonial = () => {
  const [show, setShow] = useState(false);
  const [ref, InView] = useInView({
    amount: 0.001,
  });

  return (
    <div
      className="h-screen overflow-hidden"
      onMouseOver={() => setShow(true)}
      onMouseOut={() => setShow(false)}
    >
      <h1
        className={
          "text-primary text-3xl lg:text-6xl border-l-8 border-primary pl-4 transition-all duration-500 uppercase" +
          (InView || show ? " tracking-[8px]" : " ")
        }
        ref={ref}
      >
        Our Clients
      </h1>
      <div
        className={
          "h-[90%] grid grid-flow-col grid-cols-5 justify-items-center items-center my-2 transition-all duration-500 relative" +
          (InView || show ? " left-0" : " -left-full")
        }
      >
        <div className="text-primary md:text-9xl text-5xl">&lt;</div>
        <div className="text-white col-span-3">
          <div className="rounded-xl border-primary border-2 grid md:grid-flow-col md:grid-cols-4 max-md:grid-flow-row max-md:grid-rows-4 max-md:h-[90vh]">
            <div className="md:col-span-1 p-4 max-md:row-span-1 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                alt=""
                className="max-md:h-fit"
              />
            </div>
            <div className="md:col-span-3 p-4 max-md:row-span-3">
              <div className="text-center">
                <h1 className="text-white text-xl">Alexandar Murphy</h1>
                <small className="text-primary">Software Engineer</small>
              </div>
              <div>
                <p className="text-white text-center">
                  Their team displayed exceptional professionalism and expertise
                  throughout the entire project. Attention to detail surpassed
                  my expectations, resulting in a beautifully finished building.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-primary md:text-9xl text-5xl">&gt;</div>
      </div>
    </div>
  );
};

export default Testimonial;
