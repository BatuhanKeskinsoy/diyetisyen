import generalsData from "@/data/generals.json";

type serviceDetailTypes = {
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

export function dataHizmetlerimizDetay(service: serviceDetailTypes, slug: string) {
    return {
        siteName: process.env.NEXT_PUBLIC_SITE_NAME,
        siteUrl: process.env.NEXT_PUBLIC_SITE_URL
        ? process.env.NEXT_PUBLIC_SITE_URL
        : "",
        
        Title: `${service?.title} | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
        Description: `${service?.description}`,
        Keywords: `${service?.tags.join(', ')}`,
        
        Image: service?.image,
        currentPathUrl: `/hizmetlerimiz/${slug}`,
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
