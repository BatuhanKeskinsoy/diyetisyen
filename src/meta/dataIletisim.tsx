import { getGenerals } from "@/utils/getGenerals";
import { GeneralsTypes } from "@/Types";

export default async function dataIletisim() {
  const generals: GeneralsTypes = await getGenerals();
  return {
    siteName: process.env.NEXT_PUBLIC_SITE_NAME,
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL
      ? process.env.NEXT_PUBLIC_SITE_URL
      : "",

    Title: `İletişim | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
    Description: `${generals?.fullName} ile iletişime geçmek, sorularınızı sormak, randevu almak veya danışmanlık hizmetleri hakkında daha fazla bilgi edinmek için iletişim sayfamızı kullanın. Size sağlıklı bir yaşam için rehberlik etmek için buradayız.`,
    Keywords: [
      `${generals?.fullName} iletişim`,
      `${generals?.fullName} ofis`,
      `diyetisyen ${generals?.fullName}`,
    ].join(", "),

    Image: "/logo/logo.svg",
    currentPathUrl: "/iletisim",
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
