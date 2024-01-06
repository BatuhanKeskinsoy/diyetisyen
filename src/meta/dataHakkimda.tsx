import generalsData from "@/data/generals.json";

export const dataHakkimda = {
  siteName: process.env.NEXT_PUBLIC_SITE_NAME,
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL
    ? process.env.NEXT_PUBLIC_SITE_URL
    : "",

  Title: `Hakkımda | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
  Description: `${generalsData.fullName}, sağlıklı beslenme uzmanı olarak size ideal kiloya ve sağlıklı yaşama ulaşmanızda yardımcı olur. Bireysel beslenme planlarıyla destek verir.`,
  Keywords: [
    `${generalsData.fullName}`,
    `${generalsData.fullName} kimdir`,
    `diyetisyen ${generalsData.fullName}`,
  ].join(", "),

  Image: '/profile/picture1.png',
  currentPathUrl: '/hakkimda',
  Robots: "index, follow",
  Publisher: generalsData.fullName,
  Creator: "Batuhan Keskinsoy",
  Author: [
    { name: generalsData.fullName, url: process.env.NEXT_PUBLIC_SITE_NAME },
  ],
  Locale: "tr_TR",
  twitterId: "@batuhankesk",
};
