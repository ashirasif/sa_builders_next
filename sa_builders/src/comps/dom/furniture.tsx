import { useInView } from "@react-spring/web";
import Image from "next/image";
import { useState } from "react";

const Furniture = () => {
  const [show, setShow] = useState(false);
  const [ref, InView] = useInView({
    amount: 0.001,
  });

  return (
    <div
      className="h-screen py-5 overflow-hidden"
      onMouseOver={() => setShow(true)}
      onMouseOut={() => setShow(false)}
    >
      <div>
        <div
          className={
            "transition-all duration-500 border-l-8 border-primary" +
            (InView ? " pl-5 tracking-widest" : "")
          }
        >
          <h1 className="text-white text-xl">Comming Soon</h1>
          <h1
            ref={ref}
            className={
              "text-primary duration-500 transition-all text-3xl lg:text-6xl uppercase" +
              (InView || show ? " lg:tracking-[8px] tracking-wider" : "")
            }
          >
            Premium Furniture
          </h1>
        </div>
        <div
          className={
            "transition-all duration-500 relative my-8 mx-4 flex flex-col items-center" +
            (InView || show ? " left-0" : " -left-full")
          }
        >
          <Image
            height={1000}
            width={1000}
            src="/coffe_table.png"
            alt=""
            className="max-sm:w-full sm:h-[50vh]"
          />
          <p className="text-white text-center mt-4 lg:text-lg opacity-70">
            Transform Your Space with Exquisite Customised Furniture! At SA
            Furniture , we bring your dream designs to life, crafting unique and
            personalized pieces that perfectly suit your style and space. From
            luxurious sofas to elegant dining tables, our skilled artisans
            meticulously create furniture that reflects your individuality.
            Elevate your interior with bespoke craftsmanship and exceptional
            materials.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Furniture;
