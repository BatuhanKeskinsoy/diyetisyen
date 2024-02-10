import React from "react";
import Image from "next/image";
import Link from "next/link";
import blogsData from "@/data/blogs.json";
import servicesData from "@/data/services.json";
import { FooterItem } from "@/components/(front)/Blog/Item";
import { SocialsTypes, GeneralsTypes } from "@/Types";
import { FooterSocials } from "../Header/Items/SocialItem";
import calculationsData from "@/data/calculations.json";

interface IFooterProps {
  socials: SocialsTypes[];
  generals: GeneralsTypes;
}

function Footer({socials, generals} : IFooterProps) {

  const filteredBlogs = blogsData.sort((a, b) => b.id - a.id).slice(0, 3);

  return (
    <footer className="relative z-10">
      <div className="container mx-auto py-12 px-4 lg:px-0">
        <div className="flex gap-x-6 lg:flex-row flex-col lg:gap-y-0 gap-y-6">
          <div className="flex-1 flex flex-col gap-y-6">
            <Image
              src={generals ? generals.logo : "/"}
              alt={`${process.env.NEXT_PUBLIC_SITE_NAME}`}
              title={process.env.NEXT_PUBLIC_SITE_NAME}
              width={250}
              height={65}
              priority
            />
            <p className="line-clamp-3">
              Sağlıklı bir yaşam için doğru beslenme uzmanıyla çalışın. Beslenme
              hedeflerinizi gerçekleştirmek için profesyonel desteğe sahip olun.
            </p>
            {socials && (
              <ul className="flex gap-4 flex-wrap">
                {socials.map((data, key) => (
                  <FooterSocials
                    socialUrl={data.socialUrl}
                    socialName={data.socialName}
                    iconName={data.iconName}
                    key={key}
                  />
                ))}
              </ul>
            )}
          </div>
          <div className="flex-1">
            <span className="font-gemunu text-2xl tracking-wide">
              Hızlı Linkler
            </span>
            <hr className="my-2 border-gray-300" />
            <ul>
              <li>
                <Link
                  href={"/"}
                  title="Anasayfa"
                  className="w-fit flex items-center gap-x-1 py-1 font-gemunu tracking-wide text-lg hover:text-site hover:pl-1 transition-all"
                >
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link
                  href={"/online-diyet"}
                  title="Online Diyet"
                  className="w-fit flex items-center gap-x-1 py-1 font-gemunu tracking-wide text-lg hover:text-site hover:pl-1 transition-all line-clamp-1"
                >
                  Online Diyet
                </Link>
              </li>
              <li>
                <Link
                  href={"/hakkimda"}
                  title="Hakkımda"
                  className="w-fit flex items-center gap-x-1 py-1 font-gemunu tracking-wide text-lg hover:text-site hover:pl-1 transition-all line-clamp-1"
                >
                  Hakkımda
                </Link>
              </li>
              <li>
                <Link
                  href={"/iletisim"}
                  title="İletişim"
                  className="w-fit flex items-center gap-x-1 py-1 font-gemunu tracking-wide text-lg hover:text-site hover:pl-1 transition-all line-clamp-1"
                >
                  İletişim
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <span className="font-gemunu text-2xl tracking-wide">
              Hizmetlerimiz
            </span>
            <hr className="my-2 border-gray-300" />
            <ul>
              {servicesData.slice(0, 6).map((serviceItem, key) => (
                <li key={key}>
                  <Link
                    href={`/hizmetlerimiz/${serviceItem.url}`}
                    title={serviceItem.title}
                    className="w-fit flex items-center gap-x-1 py-1 font-gemunu tracking-wide text-lg hover:text-site hover:pl-1 transition-all"
                  >
                    {serviceItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1">
            <span className="font-gemunu text-2xl tracking-wide">
              Hesaplamalar
            </span>
            <hr className="my-2 border-gray-300" />
            <ul>
              {calculationsData.slice(0, 6).map((calculateItem, key) => (
                <li key={key}>
                  <Link
                    href={`/hesaplamalar/${calculateItem.url}`}
                    title={calculateItem.title}
                    className="w-fit flex items-center gap-x-1 py-1 font-gemunu tracking-wide text-lg hover:text-site hover:pl-1 transition-all"
                  >
                    {calculateItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1">
            <span className="font-gemunu text-2xl tracking-wide">Blog</span>
            <hr className="mt-2 mb-4 border-gray-300" />
            <ul className="flex flex-col gap-y-3">
              {filteredBlogs.length > 0 ? (
                filteredBlogs.map((blogItem, key) => (
                  <FooterItem
                    title={blogItem.title}
                    description={blogItem.description}
                    image={blogItem.image}
                    url={blogItem.url}
                    isRecipe={blogItem.isRecipe}
                    key={key}
                  />
                ))
              ) : (
                <div className="font-gemunu tracking-wider text-left w-full">
                  Blog Bulunamadı...
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-customSecondary-900">
        <div className="container mx-auto py-3 px-4 lg:px-0">
          <div className="w-full flex justify-between text-gray-200 text-lg lg:flex-row flex-col text-center font-gemunu tracking-wider">
            <div className="md:my-0 my-1">
              Copyright <span className="font-system">©</span>
              <span className="text-site ml-1 transition-all">
                {new Date().getFullYear() === 2023
                  ? new Date().getFullYear()
                  : "2023 - " + new Date().getFullYear()}
              </span>
            </div>
            <div className="md:my-0 my-1">
              Kodlama ve Tasarım
              <Link
                href={"https://www.batuhankeskinsoy.com"}
                title="Batuhan Keskinsoy"
                className="text-site ml-1 hover:text-site/80 transition-all"
                target="_blank"
                rel="nofollow"
              >
                Batuhan Keskinsoy
              </Link>
              &#39;a aittir.
            </div>
          </div>
        </div>
      </div>

      <div className="bg-topTransparent w-full bg-top absolute bottom-full h-12"></div>
    </footer>
  );
}

export default Footer;
