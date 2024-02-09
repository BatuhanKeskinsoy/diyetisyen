import React from "react";
import Link from "next/link";
import Image from "next/image";
import { meta404 } from "@/meta";
import { getGenerals } from "@/utils/getGenerals";
import { GeneralsTypes } from "@/Types";

export const metadata = meta404();

async function notFound() {
  const generals: GeneralsTypes = await getGenerals();
  return (
    <>
      <section className="container mx-auto px-4 flex flex-col justify-between items-center h-[calc(100vh-136px)] mt-8 lg:mt-0">
        <div className="flex lg:flex-row flex-col items-center h-full justify-center gap-6">
          <div className="flex flex-col gap-y-10 lg:order-1 order-2">
            <Link
              href={"/"}
              title={process.env.NEXT_PUBLIC_SITE_NAME}
              className="lg:order-1 order-4"
            >
              <Image
                src={generals ? generals.logo : "/"}
                alt={`${process.env.NEXT_PUBLIC_SITE_NAME}`}
                title={process.env.NEXT_PUBLIC_SITE_NAME}
                width={375}
                height={100}
                priority
                className="mx-auto"
              />
            </Link>
            <h1 className="font-gemunu tracking-wide text-4xl lg:text-6xl text-center">
              Sayfa Bulunamadı
            </h1>
            <p className="text-base text-gray-600 text-center">
              Üzgünüz, aradığınızı bulamadık. Bu sayfa, silinmiş veya
              değiştirilmiş olabilir.
            </p>
            <Link
              href={"/"}
              title={process.env.NEXT_PUBLIC_SITE_NAME}
              className="flex items-center gap-x-2 px-6 py-3 mt-4 bg-site shadow-lg hover:bg-site/80 text-white font-gemunu text-xl lg:text-2xl tracking-wider min-w-fit rounded-lg transition-all w-full lg:justify-center mx-auto justify-center"
            >
              Anasayfaya Dön
            </Link>
          </div>
          <Image
            src="/theme/404.svg"
            alt={`${process.env.NEXT_PUBLIC_SITE_NAME}`}
            title={process.env.NEXT_PUBLIC_SITE_NAME}
            width={582}
            height={380}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            className="lg:order-2 order-1"
          />
        </div>
      </section>
    </>
  );
}

export default notFound;
