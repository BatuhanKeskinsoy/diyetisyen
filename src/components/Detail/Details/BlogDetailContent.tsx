"use client"
import { GeneralsTypes } from "@/Types";
import Image from "next/image";
import React from "react";
import { BlogShares } from "../Shares/Shares";
import Link from "next/link";
import { AiOutlineDoubleRight } from "react-icons/ai";
import OtherContents from "../OtherContents/OtherContents";
import OnlineDiyet from "@/components/OnlineDiyet/OnlineDiyet";

interface BlogDetailContentProps {
  generals: GeneralsTypes;
  props: any;
}

function BlogDetailContent({ props, generals }: BlogDetailContentProps) {
  const dateStr = props.date;

  const months = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ];

  const parts = dateStr.split("-"); // "-" karakterine göre tarihi ayır

  const day = parts[0];
  const monthIndex = parseInt(parts[1]) - 1; // Ay indeksleri 0'dan başladığı için 1 çıkarıyoruz
  const month = months[monthIndex];
  const year = parts[2];
  return (
    <section className="relative">
      <div className="container mx-auto py-12 px-4 lg:px-0">
        <div className="flex lg:flex-row flex-col gap-x-8 lg:mt-6">
          <div className="flex-[1_1_75%]">
            <div className="relative lg:h-[600px] h-48">
              {props.isRecipe && (
                <div className='absolute -left-5 lg:top-5 top-3 right-auto rounded-xl rounded-bl-none lg:py-3 py-1 lg:px-6 px-4 bg-site text-white z-10 before:content-[""] before:absolute before:w-5 before:h-5 before:-bottom-5 before:left-0 before:bg-site/90 before:opacity-50 before:clip-your-needful-style'>
                  <span className="lg:text-2xl text-xl font-gemunu tracking-wider">
                    TARİF
                  </span>
                </div>
              )}
              <Image
                src={props.image}
                sizes="(max-width: 768px) 100vw, 80vw"
                fill
                priority={true}
                alt={props.title}
                title={props.title}
                className="object-cover object-center rounded-xl shadow-2xl shadow-black/10"
              />
              <time
                dateTime={props.date}
                className="absolute bg-white/70 py-1 px-2 text-xs font-bold text-black lg:top-4 top-2 lg:right-4 right-2 flex flex-col items-center rounded-xl"
              >
                <span className="lg:text-4xl text-3xl">{day}</span>
                <span className="lg:text-sm text-xs font-semibold">
                  {month}
                </span>
                <span className="lg:text-xl text-lg font-semibold">{year}</span>
              </time>
            </div>

            <h1 className="lg:text-3xl text-2xl mt-12 mb-4 font-semibold">
              {props.title}
            </h1>
            <div
              className="DetailContent"
              dangerouslySetInnerHTML={{ __html: props.contentText }}
            ></div>
            <div className="bg-site text-white p-3 opacity-80 my-6">
              Not: Bu makale yalnızca genel bilgilendirme amacı taşımaktadır.
              Kişisel olarak daha doğru ve net bilgiler için{" "}
              <strong>Bana</strong> ulaşabilirsiniz.
            </div>
            <hr className="my-4" />

            <BlogShares
              title={props.title}
              description={props.description}
              tags={props.tags}
            />
          </div>
          <div className="flex-[1_1_25%] lg:mt-0 mt-6">
            <Link
              href={"/hakkimda"}
              title={`${generals?.fullName} Hakkımda`}
              className="relative h-96 flex group"
            >
              <div className="lg:bg-transparent bg-gradient-to-t from-black absolute left-0 top-0 w-full h-full z-10 opacity-70 group-hover:opacity-90 transition-all rounded-xl">
                <div className="flex w-full h-full flex-col justify-between items-center">
                  <span className="text-3xl text-white font-gemunu tracking-wider flex w-full h-full justify-between items-start p-6 text-center uppercase lg:opacity-0 group-hover:opacity-100 lg:invisible group-hover:visible lg:-translate-y-full group-hover:-translate-y-0 transition-all overflow-hidden">
                    Hakkımda
                    <AiOutlineDoubleRight />
                  </span>
                  <span className="text-3xl text-white font-gemunu tracking-wider flex w-full h-full justify-center items-end px-4 py-6 text-center">
                    {generals?.fullName}
                  </span>
                </div>
              </div>
              <Image
                src={"/profile/picture1.png"}
                sizes="(max-width: 768px) 100vw, 30vw"
                fill
                loading="lazy"
                alt={generals ? generals.fullName : ""}
                title={generals?.fullName}
                className="object-cover object-center rounded-xl shadow-2xl shadow-black/10"
              />
            </Link>

            <OtherContents
              title={props.title}
              tags={props.tags}
              showAllUrl={props.showAllUrl}
            />
          </div>
        </div>
      </div>
      <OnlineDiyet generals={generals} />
    </section>
  );
}

export default BlogDetailContent;
