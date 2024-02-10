import React from "react";
import Image from "next/image";
import { SocialsTypes, GeneralsTypes } from "@/Types";
import { AboutSocials } from "@/components/(front)/inc/Header/Items/SocialItem";
import Link from "next/link";

interface IAboutProps {
  botTransparent?: boolean;
  generals: GeneralsTypes;
  socials: SocialsTypes[];
}

async function About({ botTransparent, generals, socials }: IAboutProps) {
  const phoneSlug = generals?.phone.replace(/\s/g, "");
  return (
    <section className="relative z-10">
      <div className="container mx-auto lg:py-24 py-8 flex lg:flex-row gap-x-28 lg:gap-y-0 gap-y-8 flex-col-reverse">
        <div className="relative lg:w-[500px] lg:h-[500px] w-full h-[400px] lg:border-[20px] border-site lg:rounded-3xl  shadow-inner shadow-gray-600 group">
          <Image
            src={"/profile/picture1.png"}
            sizes="(max-width: 768px) 100vw, 30vw"
            fill
            priority
            alt={generals ? generals.fullName : "Fotoğraf"}
            title={generals?.fullName}
            className="object-cover object-center lg:rounded-3xl lg:ml-10 lg:mt-10 shadow-lg shadow-gray-300 group-hover:lg:ml-0 group-hover:lg:mt-0 group-hover:lg:scale-110 transition-all"
          />
        </div>
        <div className="flex-1 flex flex-col lg:gap-y-8 gap-y-6 lg:px-0 px-4">
          <strong className="font-gemunu text-3xl opacity-50">HAKKIMDA</strong>
          <h1 className="text-3xl lg:text-5xl font-dancing tracking-wide min-w-fit">
            {generals?.fullName}
          </h1>

          <p className="lg:text-lg text-md leading-8">
            Merhaba, ben {generals?.fullName}, {generals?.graduationYear}{" "}
            yılında {generals?.university} {generals?.branch} bölümünden mezun
            oldum. Danışanlarıma, {generals?.district}/{generals?.city}{" "}
            bölgesinde bulunan ofisimde hizmet vermekteyim. Ulaşım ve randevu
            için{" "}
            <Link
              href="/hakkimda"
              className="text-site font-gemunu text-xl tracking-wider"
              title={`${generals?.fullName} İletişim`}
            >
              İletişim
            </Link>{" "}
            bölümüne bakabilirsiniz.
          </p>

          <p className="lg:text-lg text-md leading-8">
            {generals?.city} diyetisyeni olarak sağlıklı yaşam konusunda
            güvenilir ve uzman diyetisyeni olarak sizlere hizmet vermekten
            mutluluk duyuyorum. Beslenme ve diyet konusunda uzmanlaşmış bir
            profesyonel olarak, kişisel hedeflerinize ulaşmanızda size rehberlik
            etmek için buradayım.
          </p>
          <p className="lg:text-lg text-md leading-8">
            Ofisim dışında{" "}
            <Link
              href={"/online-diyet"}
              className="text-site font-gemunu text-xl tracking-wider"
              title="Online Diyet"
            >
              Online Diyet
            </Link>{" "}
            hizmeti de vermekteyim. Online diyet ücretleri ve diyetisyen
            ücretleri hakkında daha fazla bilgi edinmek için bana
            <Link
              href={`https://api.whatsapp.com/send?phone=+9${phoneSlug}&text=${generals?.wpMessage}`}
              target="_blank"
              title="WhatsApp"
              className="text-site font-gemunu text-xl tracking-wider"
            >
              {" "}
              WhatsApp&#39;tan{" "}
            </Link>{" "}
            {!socials ? "ulaşabilirsiniz." : `veya aşağıdaki sosyal medya bağlantılarımdan ulaşabilirsiniz.`}{" "}
          </p>

          {socials && (
            <>
              <strong className="font-gemunu tracking-wide text-2xl">
                Sosyal Medya Adreslerim
              </strong>
              <ul className="flex gap-6 flex-wrap lg:justify-start justify-center">
                {socials.map((social: SocialsTypes, key) => (
                  <AboutSocials
                    socialUrl={social?.socialUrl || ""}
                    socialName={social?.socialName || ""}
                    iconName={social?.iconName || ""}
                    key={key}
                  />
                ))}
              </ul>
            </>
          )}
        </div>
      </div>

      {botTransparent && (
        <div className="bg-botTransparent w-full bg-bottom absolute top-[99%] h-12"></div>
      )}
    </section>
  );
}

export default About;
