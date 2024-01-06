import generalsData from "@/data/generals.json";

type calculationDetailTypes = {
    id: number;
    title: string;
    description: string;
    image: string;
    contentText: string;
    tags: string[];
    url: string;
    calculateComponent: string;
    date: string;
} | undefined;

export function dataHesaplamalarDetay(calculation: calculationDetailTypes, slug: string) {
    return {
        siteName: process.env.NEXT_PUBLIC_SITE_NAME,
        siteUrl: process.env.NEXT_PUBLIC_SITE_URL
        ? process.env.NEXT_PUBLIC_SITE_URL
        : "",
        
        Title: `${calculation?.title} | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
        Description: `${calculation?.description}`,
        Keywords: `${calculation?.tags.join(', ')}`,
        
        Image: calculation?.image,
        currentPathUrl: `/hesaplamalar/${slug}`,
        Robots: "index, follow",
        Publisher: generalsData.fullName,
        Creator: "Batuhan Keskinsoy",
        Author: [
            { name: generalsData.fullName, url: process.env.NEXT_PUBLIC_SITE_NAME },
        ],
        Locale: "tr_TR",
        twitterId: "@batuhankesk",
    };
}
