import React from 'react'
import Head from 'next/head'

export function Meta404() {

    const metaData = {
        siteName: process.env.NEXT_PUBLIC_SITE_NAME,

        Title: `Sayfa Bulunamadı | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
        Description: `Üzgünüz, aradığınızı bulamadık. Bu sayfa, silinmiş veya değiştirilmiş olabilir.`,
    
        Robots: 'noindex, nofollow',
    }

    return (
        <Head>
            <title>{metaData.Title}</title>
            <meta name="description" content={metaData.Description} />
            <meta name="robots" content={metaData.Robots} />
        </Head>
    )
}

