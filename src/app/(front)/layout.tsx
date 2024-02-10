import React from "react";
import Footer from "@/components/inc/Footer/Footer";
import Header from "@/components/inc/Header/Header";
import AutoScrollTop from "@/components/Other/AutoScrollTop";
import FixedScrollTop from "@/components/Other/FixedScrollTop";
import "@/styles/globals.css";
import "@/styles/slick-theme.min.css";
import "@/styles/slick.min.css";
import MetaFavicon from "@/meta/Favicon";
import { metaAnasayfa } from "@/meta";
import { getGenerals } from "@/utils/getGenerals";
import { GeneralsTypes, SocialsTypes } from "@/Types";
import { getSocials } from "@/utils/getSocials";

export const metadata = metaAnasayfa();

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const socials: SocialsTypes[] = (await getSocials()) || [];
  const generals: GeneralsTypes = await getGenerals();
  return (
    <html lang="tr">
      <MetaFavicon />
      <body>
        <AutoScrollTop />
        <Header generals={generals} socials={socials} />
        {children}
        <Footer generals={generals} socials={socials} />
        <FixedScrollTop />
      </body>
    </html>
  );
}
