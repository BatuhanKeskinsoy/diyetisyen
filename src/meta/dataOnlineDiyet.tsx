import { getGenerals } from "@/utils/getGenerals";
import { GeneralsTypes } from "@/Types";

export default async function dataOnlineDiyet() {
  const generals: GeneralsTypes = await getGenerals();
  return {
    siteName: process.env.NEXT_PUBLIC_SITE_NAME,
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL
      ? process.env.NEXT_PUBLIC_SITE_URL
      : "",

    Title: `Online Diyet | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
    Description: `Online diyet, sağlıklı bir yaşam tarzı sürdürmek isteyenlere internet üzerinden diyetisyenlik hizmeti sunan bir yöntemdir. Bu hizmet, beslenme planları, diyet önerileri ve kilo kontrolü gibi konularda rehberlik almanızı sağlar. ${process.env.NEXT_PUBLIC_SITE_NAME}`,
    Keywords: [
      "online diyet",
      "online diyet nedir",
      "online diyet faydaları",
      "online diyet ücretleri",
    ].join(", "),

    Image: "/theme/online-diyet-nedir.jpg",
    currentPathUrl: `/online-diyet`,
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
