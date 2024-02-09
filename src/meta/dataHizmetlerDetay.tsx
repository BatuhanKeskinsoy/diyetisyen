import { getGenerals } from "@/utils/getGenerals";
import { GeneralsTypes } from "@/Types";

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

export default async function dataHizmetlerimizDetay(service: serviceDetailTypes, slug: string) {
    const generals: GeneralsTypes = await getGenerals();
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
        Publisher: generals?.fullName,
        Creator: "Batuhan Keskinsoy",
        Author: [
            { name: generals?.fullName, url: process.env.NEXT_PUBLIC_SITE_NAME },
        ],
        Locale: "tr_TR",
        twitterId: "@batuhankesk",
    };
}
