import dataAnasayfa from "./dataAnasayfa";
import dataBlog from "./dataBlog";
import { Metadata } from "next";
import data404 from "./data404";
import dataAuth from "./dataAuth";
import dataBlogDetay from "./dataBlogDetay";
import dataHakkimda from "./dataHakkimda";
import dataHesaplamalarDetay from "./dataHesaplamalarDetay";
import dataHizmetlerimizDetay from "./dataHizmetlerDetay";
import dataIletisim from "./dataIletisim";
import dataOnlineDiyet from "./dataOnlineDiyet";

export const meta404 = async (): Promise<Metadata> => {
  const meta = await data404();
  return {
    title: meta.Title,
    description: meta.Description,
    robots: meta.Robots,
  };
};

export const metaAnasayfa = async (): Promise<Metadata> => {
  const meta = await dataAnasayfa();
  return {
    metadataBase: new URL(meta.siteUrl),
    title: meta.Title,
    description: meta.Description,
    keywords: meta.Keywords,
    robots: meta.Robots,
    authors: meta.Author,
    creator: meta.Creator,
    publisher: meta.Publisher,
    
    alternates: {
      canonical: `${meta.siteUrl}${meta.currentPathUrl}`,
    },
    openGraph: {
      title: meta.Title,
      description: meta.Description,
      url: meta.siteUrl,
      siteName: meta.siteName,
      images: `${meta.siteUrl}${meta.Image}`,
      type: "website",
      locale: meta.Locale,
    },
    twitter: {
      title: meta.Title,
      site: meta.twitterId,
      creator: meta.Publisher,
      images: `${meta.siteUrl}${meta.Image}`,
    },
  };
};

export const metaBlog = async (): Promise<Metadata> => {
  const meta = await dataBlog();
  return {
    title: meta.Title,
    description: meta.Description,
    keywords: meta.Keywords,
    robots: meta.Robots,
    authors: meta.Author,
    creator: meta.Creator,
    publisher: meta.Publisher,
    
    alternates: {
      canonical: `${meta.siteUrl}${meta.currentPathUrl}`,
    },
    openGraph: {
      title: meta.Title,
      description: meta.Description,
      url: meta.siteUrl,
      siteName: meta.siteName,
      images: `${meta.siteUrl}${meta.Image}`,
      type: "website",
      locale: meta.Locale,
    },
    twitter: {
      title: meta.Title,
      site: meta.twitterId,
      creator: meta.Publisher,
      images: `${meta.siteUrl}${meta.Image}`,
    },
  };
};

export const metaHakkimda = async (): Promise<Metadata> => {
  const meta = await dataHakkimda();
  return {
    title: meta.Title,
    description: meta.Description,
    keywords: meta.Keywords,
    robots: meta.Robots,
    authors: meta.Author,
    creator: meta.Creator,
    publisher: meta.Publisher,
    
    alternates: {
      canonical: `${meta.siteUrl}${meta.currentPathUrl}`,
    },
    openGraph: {
      title: meta.Title,
      description: meta.Description,
      url: meta.siteUrl,
      siteName: meta.siteName,
      images: `${meta.siteUrl}${meta.Image}`,
      type: "website",
      locale: meta.Locale,
    },
    twitter: {
      title: meta.Title,
      site: meta.twitterId,
      creator: meta.Publisher,
      images: `${meta.siteUrl}${meta.Image}`,
    },
  };
};

export const metaIletisim = async (): Promise<Metadata> => {
  const meta = await dataIletisim();
  return {
    title: meta.Title,
    description: meta.Description,
    keywords: meta.Keywords,
    robots: meta.Robots,
    authors: meta.Author,
    creator: meta.Creator,
    publisher: meta.Publisher,
    
    alternates: {
      canonical: `${meta.siteUrl}${meta.currentPathUrl}`,
    },
    openGraph: {
      title: meta.Title,
      description: meta.Description,
      url: meta.siteUrl,
      siteName: meta.siteName,
      images: `${meta.siteUrl}${meta.Image}`,
      type: "website",
      locale: meta.Locale,
    },
    twitter: {
      title: meta.Title,
      site: meta.twitterId,
      creator: meta.Publisher,
      images: `${meta.siteUrl}${meta.Image}`,
    },
  };
};

export const metaOnlineDiyet = async (): Promise<Metadata> => {
  const meta = await dataOnlineDiyet();
  return {
    title: meta.Title,
    description: meta.Description,
    keywords: meta.Keywords,
    robots: meta.Robots,
    authors: meta.Author,
    creator: meta.Creator,
    publisher: meta.Publisher,
    
    alternates: {
      canonical: `${meta.siteUrl}${meta.currentPathUrl}`,
    },
    openGraph: {
      title: meta.Title,
      description: meta.Description,
      url: meta.siteUrl,
      siteName: meta.siteName,
      images: `${meta.siteUrl}${meta.Image}`,
      type: "article",
      locale: meta.Locale,
    },
    twitter: {
      title: meta.Title,
      site: meta.twitterId,
      creator: meta.Publisher,
      images: `${meta.siteUrl}${meta.Image}`,
    },
  };
};

export const metaBlogDetay = async (blog: any, slug: string): Promise<Metadata> => {
  const meta = await dataBlogDetay(blog, slug);
  return {
    title: meta.Title,
    description: meta.Description,
    keywords: meta.Keywords,
    
    robots: meta.Robots,
    authors: meta.Author,
    creator: meta.Creator,
    publisher: meta.Publisher,
    
    alternates: {
      canonical: `${meta.siteUrl}${meta.currentPathUrl}`,
    },
    openGraph: {
      title: meta.Title,
      description: meta.Description,
      url: meta.currentPathUrl,
      siteName: meta.siteName,
      images: `${meta.siteUrl}${meta.Image}`,
      type: "article",
      locale: meta.Locale,
    },
    twitter: {
      title: meta.Title,
      site: meta.twitterId,
      creator: meta.Publisher,
      images: `${meta.siteUrl}${meta.Image}`,
    },
  };
};

export const metaHesaplamalarDetay = async (calculation: any, slug: string): Promise<Metadata> => {
  const meta = await dataHesaplamalarDetay(calculation, slug);
  return {
    title: meta.Title,
    description: meta.Description,
    keywords: meta.Keywords,
    
    robots: meta.Robots,
    authors: meta.Author,
    creator: meta.Creator,
    publisher: meta.Publisher,
    
    alternates: {
      canonical: `${meta.siteUrl}${meta.currentPathUrl}`,
    },
    openGraph: {
      title: meta.Title,
      description: meta.Description,
      url: meta.currentPathUrl,
      siteName: meta.siteName,
      images: `${meta.siteUrl}${meta.Image}`,
      type: "article",
      locale: meta.Locale,
    },
    twitter: {
      title: meta.Title,
      site: meta.twitterId,
      creator: meta.Publisher,
      images: `${meta.siteUrl}${meta.Image}`,
    },
  };
};

export const metaHizmetlerimizDetay = async (service: any, slug: string): Promise<Metadata> => {
  const meta = await dataHizmetlerimizDetay(service, slug);
  return {
    title: meta.Title,
    description: meta.Description,
    keywords: meta.Keywords,
    
    robots: meta.Robots,
    authors: meta.Author,
    creator: meta.Creator,
    publisher: meta.Publisher,
    
    alternates: {
      canonical: `${meta.siteUrl}${meta.currentPathUrl}`,
    },
    openGraph: {
      title: meta.Title,
      description: meta.Description,
      url: meta.currentPathUrl,
      siteName: meta.siteName,
      images: `${meta.siteUrl}${meta.Image}`,
      type: "article",
      locale: meta.Locale,
    },
    twitter: {
      title: meta.Title,
      site: meta.twitterId,
      creator: meta.Publisher,
      images: `${meta.siteUrl}${meta.Image}`,
    },
  };
};

export const metaAuth = async (): Promise<Metadata> => {
  const meta = await dataAuth();
  return {
    title: meta.Title,
    description: meta.Description,
    robots: meta.Robots,
  };
};