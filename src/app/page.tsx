import React from "react";
import Banner from "@/components/Banner/Banner";
import Gallery from "@/components/Gallery/Gallery";
import About from "@/components/About/About";
import Blog from "@/components/Blog/Blog";
import Iletisim from "@/components/Contact/Contact";

function page() {
  return (
    <>
      <Banner />
      <About botTransparent={true} />
      <Gallery />
      <Blog botTransparent={true} topTransparent={true} forHome={true} />
      <Iletisim forHome={true} />
    </>
  );
}

export default page