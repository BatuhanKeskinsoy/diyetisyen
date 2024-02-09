import { getGenerals } from "@/utils/getGenerals";
import { GeneralsTypes } from "@/Types";

export default async function dataBlog() {
  const generals: GeneralsTypes = await getGenerals();
  return {
    siteName: process.env.NEXT_PUBLIC_SITE_NAME,
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL
      ? process.env.NEXT_PUBLIC_SITE_URL
      : "",

    Title: `Blog | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
    Description: `${generals?.fullName} beslenme, sağlıklı yaşam ve kilo yönetimi konularında uzman içeriklerini burada bulabilirsiniz. En yeni beslenme trendlerini, ipuçlarını ve tarifleri keşfedin, sağlıklı bir yaşam için bilinçli beslenme hakkında daha fazla bilgi edinin.`,
    Keywords: [
      `${generals?.fullName} blog`,
      `${generals?.fullName} ofis`,
      `diyetisyen ${generals?.fullName}`,
    ].join(", "),

    Image: "/profile/picture1.png",
    currentPathUrl: "/blog",
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
