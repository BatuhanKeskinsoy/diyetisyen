import generalsData from "@/data/generals.json";

export const dataIletisim = {
    siteName: process.env.NEXT_PUBLIC_SITE_NAME,
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL
    ? process.env.NEXT_PUBLIC_SITE_URL
    : "",
    
    Title: `İletişim | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
    Description: `${generalsData.fullName} ile iletişime geçmek, sorularınızı sormak, randevu almak veya danışmanlık hizmetleri hakkında daha fazla bilgi edinmek için iletişim sayfamızı kullanın. Size sağlıklı bir yaşam için rehberlik etmek için buradayız.`,
    Keywords: [`${generalsData.fullName} iletişim`, `${generalsData.fullName} ofis`, `diyetisyen ${generalsData.fullName}`].join(', '),
    
    Image: "/logo/logo.svg",
    currentPathUrl: '/iletisim',
    Robots: "index, follow",
    Publisher: generalsData.fullName,
    Creator: "Batuhan Keskinsoy",
    Author: [
        { name: generalsData.fullName, url: process.env.NEXT_PUBLIC_SITE_NAME },
    ],
    Locale: "tr_TR",
    twitterId: "@batuhankesk",
};
