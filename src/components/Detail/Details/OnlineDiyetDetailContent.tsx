"use client"
import { GeneralsTypes } from "@/Types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { OnlineDiyetShares } from "../Shares/Shares";
import { AiOutlineDoubleRight } from "react-icons/ai";
import OtherContentsItem from "../OtherContents/Item";
import OnlineDiyet from "@/components/OnlineDiyet/OnlineDiyet";
import blogsData from "@/data/blogs.json"

interface OnlineDiyetDetaiLContentProps {
  generals: GeneralsTypes;
  props: any;
}

function OnlineDiyetDetailContent({ props, generals }: OnlineDiyetDetaiLContentProps) {
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
                  title={`${generals?.fullName}`}
                  href={"/hakkimda"}
                >
                  {generals?.fullName}
                </Link>{" "}
                ile{" "}
                <Link
                  className="text-site hover:text-site/80 font-gemunu text-xl tracking-wide"
                  href={"/iletisim"}
                  title={`${generals?.fullName} İletişim`}
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

export default OnlineDiyetDetailContent;
