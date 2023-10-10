import { useInView } from "@react-spring/web";
import Image from "next/image";
import { useState } from "react";

const SimpleHouse = () => {
  const [show, setShow] = useState(false);
  const [ref, inView] = useInView({
    amount: 0.001,
  });

  return (
    <div
      className={
        "h-screen p-4 flex overflow-hidden flex-col justify-center text-center transition-all duration-500" +
        (inView || show ? " lg:border-l-8 lg:border-primary" : "")
      }
      onMouseOver={() => setShow(true)}
      onMouseOut={() => setShow(false)}
      ref={ref}
    >
      <div
        className={
          "transition-all duration-500 relative" +
          (inView || show ? " left-0" : " -left-full")
        }
      >
        <div className="flex flex-row justify-center">
          <Image
            height={1000}
            width={1000}
            src="/simple_house.png"
            alt=""
            className="md:w-[120vh]"
          />
        </div>
        <div
          className={"text-6xl uppercase" + (inView ? " tracking-widest" : "")}
        >
          <div className="text-white transition-all duration-500">
            Whether You Want a Simple{" "}
            <div
              className={
                "transition-all duration-500" +
                (inView || show ? " text-primary" : "")
              }
            >
              Straight Line
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleHouse;
