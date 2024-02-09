import { getGenerals } from "@/utils/getGenerals";
import { GeneralsTypes } from "@/Types";

export default async function dataHakkimda() {
  const generals: GeneralsTypes = await getGenerals();
  return {
    siteName: process.env.NEXT_PUBLIC_SITE_NAME,
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL
      ? process.env.NEXT_PUBLIC_SITE_URL
      : "",

    Title: `Hakkımda | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
    Description: `${generals?.fullName}, sağlıklı beslenme uzmanı olarak size ideal kiloya ve sağlıklı yaşama ulaşmanızda yardımcı olur. Bireysel beslenme planlarıyla destek verir.`,
    Keywords: [
      `${generals?.fullName}`,
      `${generals?.fullName} kimdir`,
      `diyetisyen ${generals?.fullName}`,
    ].join(", "),

    Image: "/profile/picture1.png",
    currentPathUrl: "/hakkimda",
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
