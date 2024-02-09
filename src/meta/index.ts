import fetchDataAnasayfa from "./dataAnasayfa";
import { dataBlog } from "./dataBlog";
import { data404 } from "./data404";
import { Metadata } from "next";
import { dataBlogDetay } from "./dataBlogDetay";
import { dataHakkimda } from "./dataHakkimda";
import { dataHesaplamalarDetay } from "./dataHesaplamalarDetay";
import { dataHizmetlerimizDetay } from "./dataHizmetlerDetay";
import { dataIletisim } from "./dataIletisim";
import { dataOnlineDiyet } from "./dataOnlineDiyet";

export const meta404 = (): Metadata => {
  return {
    title: data404.Title,
    description: data404.Description,
    robots: data404.Robots,
  };
};

export const metaAnasayfa = async (): Promise<Metadata> => {
  const meta = await fetchDataAnasayfa();
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

export const metaBlog = (): Metadata => {
  const meta = dataBlog;
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

export const metaHakkimda = (): Metadata => {
  const meta = dataHakkimda;
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

export const metaIletisim = (): Metadata => {
  const meta = dataIletisim;
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


export const metaOnlineDiyet = (): Metadata => {
  const meta = dataOnlineDiyet;
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

export const metaBlogDetay = (blog: any, slug: string): Metadata => {
  const meta = dataBlogDetay(blog, slug);
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

export const metaHesaplamalarDetay = (calculation: any, slug: string): Metadata => {
  const meta = dataHesaplamalarDetay(calculation, slug);
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

export const metaHizmetlerimizDetay = (service: any, slug: string): Metadata => {
  const meta = dataHizmetlerimizDetay(service, slug);
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