import React from 'react'
import generalsData from '@/data/generals'
import Head from 'next/head'

export function MetaAnasayfa() {

    const metaData = {
        siteName: process.env.NEXT_PUBLIC_SITE_NAME,
        siteUrl: process.env.NEXT_PUBLIC_SITE_URL,

        Title: `${generalsData.fullName} | ${generalsData.city} Diyetisyen | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
        Description: `${generalsData.fullName} ile sağlıklı bir yaşam için uzman diyetisyen hizmetleri. Kişiselleştirilmiş beslenme planları, kilo verme, kilo alma ve beslenme danışmanlığı ile ideal kilonuza ulaşın.`,
        Keywords: [`${generalsData.fullName}`, `${generalsData.city} diyetisyen`, `${generalsData.district} diyetisyen`, `online diyet`,].join(', '),
    
        Image: '/logo/logo.svg',
        currentPathUrl: '',
        Robots: 'index, follow',
        Type: 'website',

        twitterId: '@batuhankesk',
        facebookUrl: 'https://www.facebook.com/batuhankeskinsoy'
    }

    return (
        <Head>
            <title>{metaData.Title}</title>
            <meta name="description" content={metaData.Description} />
            <meta name="keywords" content={metaData.Keywords} />
            <meta name="robots" content={metaData.Robots} />
            <meta rel="canonical" content={`${metaData.siteUrl}${metaData.currentPathUrl}`} />
            <meta name="siteurl" content={metaData.siteUrl} />
            <meta name="creator" content="Batuhan Keskinsoy" />
            <meta name="author" content={generalsData.fullName} />

            <meta property="og:title" content={metaData.Title} />
            <meta property="og:description" content={metaData.Description} />
            <meta property="og:url" content={metaData.siteUrl} />
            <meta property="og:type" content={metaData.Type} />
            <meta property="og:locale" content="tr_TR" />
            <meta property="og:site_name" content={metaData.siteName} />
            <meta property="og:image" content={`${metaData.siteUrl}${metaData.Image}`} />

            <meta name="twitter:site" content={metaData.twitterId} />
            <meta name="twitter:creator" content={generalsData.fullName} />
            <meta name="twitter:domain" content={metaData.siteUrl} />
            <meta name="twitter:title" content={metaData.Title} />
            <meta name="twitter:description" content={metaData.Description} />
            <meta name="twitter:image" content={`${metaData.siteUrl}${metaData.Image}`} />

            <meta property="article:author" content={metaData.facebookUrl} />
            <meta property="article:publisher" content={metaData.facebookUrl} />
        </Head>
    )
}
