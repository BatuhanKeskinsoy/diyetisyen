"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";

function Loading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false));
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading && (
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
      )}
    </>
  );
}

export default Loading;
