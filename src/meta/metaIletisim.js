import React from 'react'
import generalsData from '@/data/generals'
import Head from 'next/head'

export function MetaIletisim() {

    const metaData = {
        siteName: process.env.NEXT_PUBLIC_SITE_NAME,
        siteUrl: process.env.NEXT_PUBLIC_SITE_URL,

        Title: `İletişim | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
        Description: `${generalsData.fullName} ile iletişime geçmek, sorularınızı sormak, randevu almak veya danışmanlık hizmetleri hakkında daha fazla bilgi edinmek için iletişim sayfamızı kullanın. Size sağlıklı bir yaşam için rehberlik etmek için buradayız.`,
        Keywords: [`${generalsData.fullName} iletişim`, `${generalsData.fullName} ofis`, `diyetisyen ${generalsData.fullName}`].join(', '),
    
        Image: '/profile/picture1.png',
        currentPathUrl: '/iletisim',
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
