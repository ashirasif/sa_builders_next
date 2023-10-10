import { useFrame, useLoader } from "@react-three/fiber";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { TextureLoader } from "three";

export default function SAloading() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <Image
          height={300}
          width={300}
          src="/loading_loader.png"
          alt="loader"
          className="aspect-square animate-spin w-60 absolute"
        />
        <Image
          height={300}
          width={300}
          src="/loading_logo.png"
          alt="logo"
          className="aspect-auto w-60 absolute"
        />
      </div>
    </>
  );
}
