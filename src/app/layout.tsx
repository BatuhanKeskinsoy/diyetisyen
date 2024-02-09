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
import { GeneralsTypes } from "@/Types";

export const metadata = metaAnasayfa();

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const generals: GeneralsTypes = await getGenerals();
  return (
    <html lang="tr">
      <MetaFavicon />
      <body>
        <AutoScrollTop />
        <Header generals={generals} />
        {children}
        <Footer />
        <FixedScrollTop />
      </body>
    </html>
  );
}
