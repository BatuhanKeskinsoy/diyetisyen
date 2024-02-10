import Image from 'next/image'
import React from 'react'
import OtherContents from '../OtherContents/OtherContents'
import OnlineDiyet from '@/components/OnlineDiyet/OnlineDiyet'
import { GeneralsTypes } from '@/Types';
import Link from 'next/link';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { BlogShares } from '../Shares/Shares';

interface ServiceDetailContentProps {
  generals: GeneralsTypes;
  props: any;
}
function ServiceDetailContent({ props, generals }: ServiceDetailContentProps) {
  return (
    <section className="relative">
      <div className="container mx-auto py-12 px-4 lg:px-0">
        <div className="flex lg:flex-row flex-col gap-x-8 lg:mt-6">
          <div className="flex-[1_1_75%]">
            <div className="relative lg:h-[600px] h-48">
              <Image
                src={props.image}
                sizes="(max-width: 768px) 100vw, 80vw"
                fill
                priority={true}
                alt={props.title}
                title={props.title}
                className="object-cover object-center rounded-xl shadow-2xl shadow-black/10"
              />
            </div>

            <h1 className="lg:text-3xl text-2xl mt-12 mb-4 font-semibold">
              {props.title}
            </h1>
            <div
              className="DetailContent"
              dangerouslySetInnerHTML={{ __html: props.contentText }}
            ></div>

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
  )
}

export default ServiceDetailContent