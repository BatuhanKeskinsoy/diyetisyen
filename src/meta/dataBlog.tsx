import generalsData from "@/data/generals.json";

export const dataBlog = {
  siteName: process.env.NEXT_PUBLIC_SITE_NAME,
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL
    ? process.env.NEXT_PUBLIC_SITE_URL
    : "",

  Title: `Blog | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
  Description: `${generalsData.fullName} beslenme, sağlıklı yaşam ve kilo yönetimi konularında uzman içeriklerini burada bulabilirsiniz. En yeni beslenme trendlerini, ipuçlarını ve tarifleri keşfedin, sağlıklı bir yaşam için bilinçli beslenme hakkında daha fazla bilgi edinin.`,
  Keywords: [
    `${generalsData.fullName} blog`,
    `${generalsData.fullName} ofis`,
    `diyetisyen ${generalsData.fullName}`,
  ].join(", "),

  Image: "/profile/picture1.png",
  currentPathUrl: "/blog",
  Robots: "index, follow",
  Publisher: generalsData.fullName,
  Creator: "Batuhan Keskinsoy",
  Author: [
    { name: generalsData.fullName, url: process.env.NEXT_PUBLIC_SITE_NAME },
  ],
  Locale: "tr_TR",
  twitterId: "@batuhankesk",
};
