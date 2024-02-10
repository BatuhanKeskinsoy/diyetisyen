import { GeneralsTypes } from '@/Types';
import React from 'react'
import { BlogShares } from '../Shares/Shares';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import OtherContents from '../OtherContents/OtherContents';
import OnlineDiyet from '@/components/OnlineDiyet/OnlineDiyet';

interface CalculateDetailContentProps {
  generals: GeneralsTypes;
  props: any;
}
function CalculateDetailContent({ props, generals }: CalculateDetailContentProps) {
  return (
    <section className="relative">
      <div className="container mx-auto py-12 px-4 lg:px-0">
        <div className="flex lg:flex-row flex-col gap-x-8 lg:mt-6">
          <div className="flex-[1_1_75%]">
            <h1 className="text-3xl lg:text-5xl font-dancing tracking-wide">
              {props.title}
            </h1>

            {props.calculationComponent}

            <hr className="my-4" />

            <div
              className="DetailContent"
              dangerouslySetInnerHTML={{ __html: props.contentText }}
            ></div>
            <div className="bg-site text-white p-3 opacity-80 my-6">
              Not: Bu hesaplama sadece genel bir fikir verir ve kişisel
              ihtiyaçlarınızı tam olarak yansıtmayabilir. Sağlıklı bir kilo
              hedefi belirlemek için <strong>bana</strong> ulaşabilirsiniz.
            </div>

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
                sizes="(max-width: 768px) 100vw, 50vw"
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

export default CalculateDetailContent