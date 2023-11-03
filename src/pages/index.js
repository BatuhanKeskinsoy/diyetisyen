import React from 'react'
import Slider from 'react-slick'
import Banner from '@/components/Banner/Banner'
import Gallery from '@/components/Gallery/Gallery'
import About from '@/components/About/About'
import Blog from '@/components/Blog/Blog'
import Iletisim from '@/components/Contact/Contact'

function Home() {
  return (
    <>
      <Banner Slider={Slider} />
      <About botTransparent={true} />
      <Gallery Slider={Slider} />
      <Blog botTransparent={true} topTransparent={true} forHome={true} />
      <Iletisim forHome={true} />
    </>
  )
}

export default Home