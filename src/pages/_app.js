import React from 'react'
import Head from 'next/head'
import Footer from '@/components/inc/Footer/Footer'
import Header from '@/components/inc/Header/Header'
import AutoScrollTop from '@/components/Other/AutoScrollTop'
import FixedScrollTop from '@/components/Other/FixedScrollTop'
import generalsData from '@/data/generals'
import '@/styles/globals.css'
import '@/styles/slick-theme.min.css'
import '@/styles/slick.min.css'

export default function App({ Component, pageProps }) {

  const metaData = {
    siteName: process.env.NEXT_PUBLIC_SITE_NAME,
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
    siteTitle: `${generalsData.fullName} | ${generalsData.city} Diyetisyen | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
    siteDescription: `${generalsData.fullName} ile sağlıklı bir yaşam için uzman diyetisyen hizmetleri. Kişiselleştirilmiş beslenme planları, kilo verme, kilo alma ve beslenme danışmanlığı ile ideal kilonuza ulaşın.`,
    siteKeywords: [`${generalsData.fullName}`, `${generalsData.city} diyetisyen`, `${generalsData.district} diyetisyen`, `online diyet`,].join(', ')
  }
  
  return (
    <>
      <Head>
        {/* Base Meta */}
        <title>{metaData.siteTitle}</title>
        <meta name="description" content={metaData.siteDescription} />
        <meta name="keywords" content={metaData.siteKeywords} />
        <meta name="robots" content="index, follow" />
        <meta rel="canonical" content={metaData.siteUrl} />
        <meta name="siteurl" content={metaData.siteUrl} />
        <meta name="creator" content="Batuhan Keskinsoy" />
        <meta name="author" content={generalsData.fullName} />

        <meta property="og:title" content={metaData.siteTitle} />
        <meta property="og:description" content={metaData.siteDescription} />
        <meta property="og:url" content={metaData.siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="tr_TR" />
        <meta property="og:site_name" content={metaData.siteName} />
        <meta property="og:image" content={`${metaData.siteUrl}/logo/logo.svg`} />

        <meta name="twitter:site" content="@batuhankesk" />
        <meta name="twitter:creator" content={generalsData.fullName} />
        <meta name="twitter:domain" content={metaData.siteUrl} />
        <meta name="twitter:title" content={metaData.siteTitle} />
        <meta name="twitter:description" content={metaData.siteDescription} />
        <meta name="twitter:image" content={`${metaData.siteUrl}/logo/logo.svg`} />

        <meta property="article:author" content="https://www.facebook.com/batuhankeskinsoy" />
        <meta property="article:publisher" content="https://www.facebook.com/batuhankeskinsoy" />

        {/* Base Meta End */}

        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        {/* Favicon End */}
      </Head>

      <AutoScrollTop />
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
      <FixedScrollTop />
    </>
  )
}
