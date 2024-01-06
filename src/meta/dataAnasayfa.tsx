import generalsData from "@/data/generals.json";

export const dataAnasayfa = {
  siteName: process.env.NEXT_PUBLIC_SITE_NAME,
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL
    ? process.env.NEXT_PUBLIC_SITE_URL
    : "",

  Title: `${generalsData.fullName} | ${generalsData.city} Diyetisyen | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
  Description: `${generalsData.fullName} ile sağlıklı bir yaşam için uzman diyetisyen hizmetleri. Kişiselleştirilmiş beslenme planları, kilo verme, kilo alma ve beslenme danışmanlığı ile ideal kilonuza ulaşın.`,
  Keywords: [
    `${generalsData.fullName}`,
    `${generalsData.city} diyetisyen`,
    `${generalsData.district} diyetisyen`,
    `online diyet`,
  ].join(", "),

  Image: "/logo/logo.svg",
  currentPathUrl: "",
  Robots: "index, follow",
  Publisher: generalsData.fullName,
  Creator: "Batuhan Keskinsoy",
  Author: [
    { name: generalsData.fullName, url: process.env.NEXT_PUBLIC_SITE_NAME },
  ],
  Locale: "tr_TR",
  twitterId: "@batuhankesk",
};
