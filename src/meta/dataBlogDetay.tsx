import generalsData from "@/data/generals.json";

type BlogDetailTypes =
  | {
      id: number;
      title: string;
      description: string;
      image: string;
      contentText: string;
      tags: string[];
      url: string;
      isRecipe: boolean;
      date: string;
    }
  | undefined;

export function dataBlogDetay(blog: BlogDetailTypes, slug: string) {
  return {
    siteName: process.env.NEXT_PUBLIC_SITE_NAME,
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL
      ? process.env.NEXT_PUBLIC_SITE_URL
      : "",

    Title: `${blog?.title} | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
    Description: blog?.description,
    Keywords: `${blog?.tags.join(", ")}`,

    Image: blog?.image,
    currentPathUrl: `/blog/${slug}`,
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
