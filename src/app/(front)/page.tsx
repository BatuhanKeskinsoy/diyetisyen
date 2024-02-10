import React from "react";
import Banner from "@/components/Banner/Banner";
import Gallery from "@/components/Gallery/Gallery";
import About from "@/components/About/About";
import Blog from "@/components/Blog/Blog";
import Iletisim from "@/components/Contact/Contact";
import { getBanners } from "@/utils/getBanners";
import { BannersTypes, GeneralsTypes, SocialsTypes } from "@/Types";
import { getSocials } from "@/utils/getSocials";
import { getGenerals } from "@/utils/getGenerals";

async function page() {
  const socials: SocialsTypes[] = (await getSocials()) || [];
  const generals: GeneralsTypes = await getGenerals();
  const banners: BannersTypes[] | null = await getBanners();
  return (
    <>
      <Banner banners={banners} />
      <About socials={socials} generals={generals} botTransparent={true} />
      <Gallery />
      <Blog botTransparent={true} topTransparent={true} forHome={true} />
      <Iletisim socials={socials} generals={generals} forHome={true} />
    </>
  );
}

export default page;
