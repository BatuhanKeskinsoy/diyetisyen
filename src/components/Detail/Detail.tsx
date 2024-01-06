"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import generalsData from "@/data/generals.json";
import { AiOutlineDoubleRight } from "react-icons/ai";
import OtherContents from "@/components/Detail/OtherContents/OtherContents";
import OtherContentsItem from "./OtherContents/Item";
import {
  BlogShares,
  OnlineDiyetShares,
} from "@/components/Detail/Shares/Shares";
import blogsData from "@/data/blogs.json";
import OnlineDiyet from "@/components/OnlineDiyet/OnlineDiyet";

function CalculateDetail(props: any) {
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
              title={`${generalsData.fullName} Hakkımda`}
              className="relative h-96 flex group"
            >
              <div className="lg:bg-transparent bg-gradient-to-t from-black absolute left-0 top-0 w-full h-full z-10 opacity-70 group-hover:opacity-90 transition-all rounded-xl">
                <div className="flex w-full h-full flex-col justify-between items-center">
                  <span className="text-3xl text-white font-gemunu tracking-wider flex w-full h-full justify-between items-start p-6 text-center uppercase lg:opacity-0 group-hover:opacity-100 lg:invisible group-hover:visible lg:-translate-y-full group-hover:-translate-y-0 transition-all overflow-hidden">
                    Hakkımda
                    <AiOutlineDoubleRight />
                  </span>
                  <span className="text-3xl text-white font-gemunu tracking-wider flex w-full h-full justify-center items-end px-4 py-6 text-center">
                    {generalsData.fullName}
                  </span>
                </div>
              </div>
              <Image
                src={"/profile/picture1.png"}
                sizes="(max-width: 768px) 100vw, 50vw"
                fill
                loading="lazy"
                alt={generalsData.fullName}
                title={generalsData.fullName}
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
      <OnlineDiyet />
    </section>
  );
}

function ServiceDetail(props: any) {
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
              title={`${generalsData.fullName} Hakkımda`}
              className="relative h-96 flex group"
            >
              <div className="lg:bg-transparent bg-gradient-to-t from-black absolute left-0 top-0 w-full h-full z-10 opacity-70 group-hover:opacity-90 transition-all rounded-xl">
                <div className="flex w-full h-full flex-col justify-between items-center">
                  <span className="text-3xl text-white font-gemunu tracking-wider flex w-full h-full justify-between items-start p-6 text-center uppercase lg:opacity-0 group-hover:opacity-100 lg:invisible group-hover:visible lg:-translate-y-full group-hover:-translate-y-0 transition-all overflow-hidden">
                    Hakkımda
                    <AiOutlineDoubleRight />
                  </span>
                  <span className="text-3xl text-white font-gemunu tracking-wider flex w-full h-full justify-center items-end px-4 py-6 text-center">
                    {generalsData.fullName}
                  </span>
                </div>
              </div>
              <Image
                src={"/profile/picture1.png"}
                sizes="(max-width: 768px) 100vw, 30vw"
                fill
                loading="lazy"
                alt={generalsData.fullName}
                title={generalsData.fullName}
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
      <OnlineDiyet />
    </section>
  );
}

function BlogDetail(props: any) {
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
              title={`${generalsData.fullName} Hakkımda`}
              className="relative h-96 flex group"
            >
              <div className="lg:bg-transparent bg-gradient-to-t from-black absolute left-0 top-0 w-full h-full z-10 opacity-70 group-hover:opacity-90 transition-all rounded-xl">
                <div className="flex w-full h-full flex-col justify-between items-center">
                  <span className="text-3xl text-white font-gemunu tracking-wider flex w-full h-full justify-between items-start p-6 text-center uppercase lg:opacity-0 group-hover:opacity-100 lg:invisible group-hover:visible lg:-translate-y-full group-hover:-translate-y-0 transition-all overflow-hidden">
                    Hakkımda
                    <AiOutlineDoubleRight />
                  </span>
                  <span className="text-3xl text-white font-gemunu tracking-wider flex w-full h-full justify-center items-end px-4 py-6 text-center">
                    {generalsData.fullName}
                  </span>
                </div>
              </div>
              <Image
                src={"/profile/picture1.png"}
                sizes="(max-width: 768px) 100vw, 30vw"
                fill
                loading="lazy"
                alt={generalsData.fullName}
                title={generalsData.fullName}
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
      <OnlineDiyet />
    </section>
  );
}

function OnlineDiyetDetail(props: any) {
  const title = "Online Diyet";
  const description =
    "Online diyet, sağlıklı bir yaşam tarzı sürdürmek isteyenlere internet üzerinden diyetisyenlik hizmeti sunan bir yöntemdir. Bu hizmet, beslenme planları, diyet önerileri ve kilo kontrolü gibi konularda rehberlik almanızı sağlar.";
  const tags = [
    "online diyet",
    "online diyet nedir",
    "online diyet faydaları",
    "online diyet ücretleri",
  ];
  const image = "/theme/online-diyet-nedir.jpg";
  return (
    <section className="relative">
      <div className="container mx-auto py-12 px-4 lg:px-0">
        <div className="flex lg:flex-row flex-col gap-x-8 lg:mt-6">
          <div className="flex-[1_1_75%]">
            <div className="relative lg:h-[600px] h-48">
              <Image
                src={image}
                sizes="(max-width: 768px) 100vw, 80vw"
                fill
                priority={true}
                alt={title}
                title={title}
                className="object-cover object-center rounded-xl shadow-2xl shadow-black/10"
              />
            </div>

            <h1 className="lg:text-3xl text-2xl mt-12 mb-4 font-semibold">
              {title} Nedir?
            </h1>
            <div className="DetailContent">
              <p>{description}</p>
              <p>
                Online diyet, internet üzerinden sağlanan diyetisyenlik
                hizmetidir. Bu hizmet sayesinde, uzman diyetisyenlerle çevrimiçi
                olarak iletişim kurabilir ve beslenme konusunda rehberlik
                alabilirsiniz. Online diyet programları, kişisel ihtiyaçlarınıza
                uygun olarak özelleştirilebilir ve sağlıklı beslenme
                hedeflerinizi destekleyen bir plan oluşturulabilir. Bu yöntem,
                geleneksel diyetisyenlik hizmetlerine göre daha esnek,
                erişilebilir ve ekonomik bir seçenektir.
              </p>

              <h2>Online Diyetin Faydaları Nelerdir?</h2>
              <ul>
                <li>
                  <p>
                    <strong>Zaman ve Mekan Bağımsızlığı</strong>: Online diyet,
                    internet bağlantısı olan her yerden erişilebilir olması
                    sayesinde zamandan ve mekandan bağımsız bir şekilde hizmet
                    almanızı sağlar. Yoğun iş temposu veya uzak mesafeler,
                    geleneksel diyetisyenlik hizmetlerine ulaşmayı
                    zorlaştırabilirken, online diyet bu sorunları ortadan
                    kaldırır.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Uygun Maliyet</strong>: Online diyet, geleneksel
                    diyetisyenlik hizmetlerine göre daha ekonomik bir
                    seçenektir. Ofis ziyaretleri, seyahat masrafları gibi ek
                    maliyetler ortadan kalkar. Böylece, sağlıklı beslenme
                    hedeflerinize uygun bir bütçeyle uzman diyetisyenlik hizmeti
                    alabilirsiniz.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Uzman Rehberlik</strong>: Online diyet programları,
                    deneyimli ve lisanslı diyetisyenler tarafından sunulur.
                    Uzmanlar, bireysel beslenme ihtiyaçlarınızı değerlendirir ve
                    size kişiselleştirilmiş bir beslenme planı sunar. Online
                    diyet sayesinde, sağlıklı beslenme konusunda doğru bilgilere
                    erişebilir ve uzman rehberliğinde hedeflerinize
                    ulaşabilirsiniz.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Motivasyon ve Takip</strong>: Online diyet
                    programları genellikle düzenli takip ve motivasyon sağlar.
                    Diyetisyenler, ilerlemenizi izler, sorularınızı yanıtlar ve
                    sizi motive eder. Bu sayede, beslenme hedeflerinizi daha
                    etkin bir şekilde takip edebilir ve başarıya
                    ulaşabilirsiniz.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Esneklik</strong>: Online diyet programları, kişisel
                    ihtiyaçlarınıza ve programınıza uygun olarak esneklik sunar.
                    Randevuları düzenlemek, iletişimi e-posta veya video
                    konferans yoluyla gerçekleştirmek gibi seçenekler size
                    özgürlük sağlar. Bu şekilde, günlük yaşamınızın diğer
                    zorluklarıyla başa çıkmak için uygun bir diyet planı
                    oluşturabilirsiniz.
                  </p>
                </li>
              </ul>

              <h2>
                Online Diyet: Sağlıklı Beslenmeyi İnternetin Sunduğu Kolaylıkla
                Yakalayın!
              </h2>
              <p>
                Sonuç olarak, online diyet sağlıklı beslenme hedeflerinize
                ulaşmanızı kolaylaştıran ve internetin sunduğu kolaylıkla
                erişilebilen bir yöntemdir. Zamandan ve mekandan bağımsız olarak
                uzman diyetisyenlerle iletişim kurabilir, kişiselleştirilmiş
                beslenme planlarına erişebilir ve motivasyonunuzu yüksek
                tutabilirsiniz. Online diyetin avantajlarından faydalanarak,
                sağlıklı bir yaşam tarzı için adımlar atabilirsiniz.
              </p>

              <h3>
                Online Diyet Ücretleri: Sağlıklı Beslenmeyi Uygun Maliyetlerle
                Yakalayın!
              </h3>
              <p>
                Online diyet, sağlıklı bir yaşam tarzı sürdürmek isteyenler için
                erişilebilir bir seçenek sunar. Bu programların ücretlendirme
                politikaları çeşitlilik gösterebilir. Online diyetin geleneksel
                diyetisyenlik hizmetlerine kıyasla{" "}
                <strong>daha ekonomik bir seçenek</strong> olduğunu söylemek
                mümkündür. Bazı programlar aylık abonelikler veya paketler
                şeklinde sunulurken, diğerleri daha esnek ödeme seçenekleri
                sunabilir.
              </p>
              <p>
                Online diyetin maliyet-etki oranını değerlendirirken, uzman
                rehberliğin önemini unutmamak önemlidir. Online diyet
                programları,{" "}
                <strong>
                  kişiselleştirilmiş beslenme planları ve düzenli takip
                </strong>{" "}
                gibi avantajlar sunarak sağlıklı beslenme hedeflerinize
                ulaşmanızı destekler. Online diyet, zamandan ve mekândan
                bağımsız olarak hizmet almanızı sağlar ve geleneksel
                diyetisyenlik hizmetlerine kıyasla{" "}
                <strong>daha uygun maliyetli</strong> bir seçenektir.
              </p>
              <p>
                Sağlıklı beslenme hedeflerinize uygun maliyetlerle ulaşmak için
                online diyet programlarını araştırarak sizin için en uygun
                seçeneği bulabilirsiniz. Online diyetin sunduğu avantajlardan
                faydalanarak sağlıklı bir yaşama adım atabilirsiniz. Sağlıklı
                beslenme ve yaşam tarzınızı iyileştirmek için bir{" "}
                <strong>diyetisyen</strong> ile çalışmanın önemini unutmayın.
              </p>
              <br />
              <p>
                Online Diyet Ücretleri ile alakalı bilgi alabilmek için{" "}
                <Link
                  className="text-site hover:text-site/80 font-gemunu text-xl tracking-wide"
                  title={`${generalsData.fullName}`}
                  href={"/hakkimda"}
                >
                  {generalsData.fullName}
                </Link>{" "}
                ile{" "}
                <Link
                  className="text-site hover:text-site/80 font-gemunu text-xl tracking-wide"
                  href={"/iletisim"}
                  title={`${generalsData.fullName} İletişim`}
                >
                  iletişim
                </Link>
                e geçebilirsiniz
              </p>
            </div>
            <hr className="my-4" />

            <OnlineDiyetShares
              title={title}
              description={description}
              tags={tags}
            />
          </div>
          <div className="flex-[1_1_25%] lg:mt-0 mt-6">
            <Link
              href={"/hakkimda"}
              title={`${generalsData.fullName} Hakkımda`}
              className="relative h-96 flex group"
            >
              <div className="lg:bg-transparent bg-gradient-to-t from-black absolute left-0 top-0 w-full h-full z-10 opacity-70 group-hover:opacity-90 transition-all rounded-xl">
                <div className="flex w-full h-full flex-col justify-between items-center">
                  <span className="text-3xl text-white font-gemunu tracking-wider flex w-full h-full justify-between items-start p-6 text-center uppercase lg:opacity-0 group-hover:opacity-100 lg:invisible group-hover:visible lg:-translate-y-full group-hover:-translate-y-0 transition-all overflow-hidden">
                    Hakkımda
                    <AiOutlineDoubleRight />
                  </span>
                  <span className="text-3xl text-white font-gemunu tracking-wider flex w-full h-full justify-center items-end px-4 py-6 text-center">
                    {generalsData.fullName}
                  </span>
                </div>
              </div>
              <Image
                src={"/profile/picture1.png"}
                sizes="(max-width: 768px) 100vw, 30vw"
                fill
                loading="lazy"
                alt={generalsData.fullName}
                title={generalsData.fullName}
                className="object-cover object-center rounded-xl shadow-2xl shadow-black/10"
              />
            </Link>

            <div className="gap-y-2 w-full flex flex-col overflow-hidden">
              <span className="font-dancing tracking-wide text-3xl mt-12 mb-2">
                Bloglarımız
              </span>
              <ul className="w-full flex flex-col">
                {blogsData.length > 0
                  ? blogsData
                      .slice(0, 6)
                      .map((blogItem, key) => (
                        <OtherContentsItem
                          url={`blog/${blogItem.url}`}
                          image={blogItem.image}
                          title={blogItem.title}
                          description={blogItem.description}
                          key={key}
                        />
                      ))
                  : null}
              </ul>
              <Link
                href={props.showAllUrl}
                title="Tüm Bloglar"
                className="py-2 px-4 justify-between text-gray-600 w-full flex items-center hover:bg-site hover:text-white transition-all shadow-md shadow-gray-200 rounded-xl mb-2"
              >
                <span className="text-lg font-semibold">Tümünü Göster</span>
                <AiOutlineDoubleRight size={26} />
              </Link>

              {tags.length > 0 && (
                <div className="flex flex-col gap-y-2 items-start">
                  <span className="font-dancing tracking-wide text-3xl mt-6 mb-2">
                    Etiketler
                  </span>
                  <ul className="tags flex flex-wrap gap-3">
                    {tags.length > 0
                      ? tags.slice(0, 6).map((tag, key) => (
                          <li className="flex gap-x-2 items-center" key={key}>
                            <span className="text-site text-xl">#</span>
                            <Link
                              href={""}
                              title={tag}
                              className="text-base text-gray-600 hover:text-black transition-all"
                            >
                              {tag}
                            </Link>
                          </li>
                        ))
                      : null}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <OnlineDiyet />
    </section>
  );
}

export { BlogDetail, OnlineDiyetDetail, ServiceDetail, CalculateDetail };
