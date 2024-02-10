import Image from "next/image";
import React from "react";

function Loading() {
  return (
    <div className="z-50 w-screen h-full fixed overflow-hidden left-0 top-0 bg-white">
      <div className="flex h-screen w-screen justify-center items-center">
        <Image
          src={"/logo/logo.svg"}
          width={250}
          height={65}
          priority
          alt={`${process.env.NEXT_PUBLIC_SITE_NAME}`}
          title={process.env.NEXT_PUBLIC_SITE_NAME}
          className="animate-scaleMobile lg:animate-scaleDesktop"
        />
      </div>
    </div>
  );
}

export default Loading;
