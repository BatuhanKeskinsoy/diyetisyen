import React from 'react'
import Slider from 'react-slick'
import Banner from '@/components/Banner/Banner'
import Gallery from '@/components/Gallery/Gallery'
import About from '@/components/About/About'
import Blog from '@/components/Blog/Blog'
import Iletisim from '@/components/Contact/Contact'
import Head from 'next/head'

function Home() {
  return (
    <>
      <Head>
        <title>{`Diyetisyen | ${process.env.NEXT_PUBLIC_SITE_NAME}`}</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content={`Diyetisyen | ${process.env.NEXT_PUBLIC_SITE_NAME}`} />
        <meta property="og:description" content="" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_URL} />

      </Head>
      <Banner Slider={Slider} />
      <About botTransparent={true} />
      <Gallery Slider={Slider} />
      <Blog botTransparent={true} topTransparent={true} forHome={true} />
      <Iletisim forHome={true} />
    </>
  )
}

export default Home