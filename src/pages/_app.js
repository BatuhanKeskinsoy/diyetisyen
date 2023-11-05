import React from 'react'
import Footer from '@/components/inc/Footer/Footer'
import Header from '@/components/inc/Header/Header'
import AutoScrollTop from '@/components/Other/AutoScrollTop'
import FixedScrollTop from '@/components/Other/FixedScrollTop'
import '@/styles/globals.css'
import '@/styles/slick-theme.min.css'
import '@/styles/slick.min.css'
import MetaFavicon from '@/meta/Favicon'

export default function App({ Component, pageProps }) {
  
  return (
    <>
      <MetaFavicon />

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
