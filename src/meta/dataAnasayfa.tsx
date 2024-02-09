import { getGenerals } from "@/utils/getGenerals";
import { GeneralsTypes } from "@/Types";

async function dataAnasayfa() {
  const generals: GeneralsTypes = await getGenerals();

  return {
    siteName: process.env.NEXT_PUBLIC_SITE_NAME,
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL
      ? process.env.NEXT_PUBLIC_SITE_URL
      : "",

    Title: `${generals?.fullName} | ${generals?.city} Diyetisyen | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
    Description: `${generals?.fullName} ile sağlıklı bir yaşam için uzman diyetisyen hizmetleri. Kişiselleştirilmiş beslenme planları, kilo verme, kilo alma ve beslenme danışmanlığı ile ideal kilonuza ulaşın.`,
    Keywords: [
      `${generals?.fullName}`,
      `${generals?.city} diyetisyen`,
      `${generals?.district} diyetisyen`,
      `online diyet`,
    ].join(", "),

    Image: "/logo/logo.svg",
    currentPathUrl: "",
    Robots: "index, follow",
    Publisher: generals?.fullName,
    Creator: "Batuhan Keskinsoy",
    Author: [
      { name: generals?.fullName, url: process.env.NEXT_PUBLIC_SITE_NAME },
    ],
    Locale: "tr_TR",
    twitterId: "@batuhankesk",
  };
}

export default dataAnasayfa;
