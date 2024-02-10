import React from "react";
import Footer from "@/components/(front)/inc/Footer/Footer";
import Header from "@/components/(front)/inc/Header/Header";
import "@/styles/slick-theme.min.css";
import "@/styles/slick.min.css";
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
    <>
      <Header generals={generals} socials={socials} />
      <main>{children}</main>
      <Footer generals={generals} socials={socials} />
    </>
  );
}
