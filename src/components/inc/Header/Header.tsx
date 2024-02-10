"use client";
import React, { useState, useEffect } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import Image from "next/image";
import Link from "next/link";
import NavTopGenerals from "./NavTop/Generals";
import NavTopWhatsApp from "./NavTop/WhatsApp";
import NavTopSocials from "./NavTop/Socials";
import { GeneralsTypes, SocialsTypes } from "@/Types";
import NavLinks from "./NavLinks";
import Loading from "@/components/Other/Loading";

interface IHeaderProps {
  generals: GeneralsTypes;
  socials: SocialsTypes[];
}

function Header({ generals, socials }: IHeaderProps) {
  const [navStatus, setNavStatus] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const navActive = () => {
    setNavStatus((current) => !current);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize, { passive: true }); // Listen for window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up the listener
    };
  }, []);

  const phoneSlug = generals?.phone.replace(/\s/g, "");

  return (
    <>
      <Loading />
      <header className="z-40 relative">
        <div className="bg-botTransparent w-full bg-bottom absolute top-[99%] h-12"></div>
        <div id="headerTop" className="bg-customSecondary-900 text-gray-200">
          <div className="container mx-auto items-center justify-between h-12 lg:flex hidden">
            <NavTopGenerals phoneSlug={phoneSlug} generals={generals} />

            <div className="flex h-full">
              <NavTopSocials socials={socials} />
              <NavTopWhatsApp phoneSlug={phoneSlug} generals={generals} />
            </div>
          </div>
        </div>
        <div id="menu" className="container mx-auto h-24 relative z-20">
          <div className="lg:relative fixed w-full h-24 flex justify-between items-center lg:flex-row flex-col bg-white">
            <div
              id="logo"
              className="h-full flex w-full lg:w-fit items-center justify-between"
            >
              <Link href={"/"} title={process.env.NEXT_PUBLIC_SITE_NAME}>
                <Image
                  src={generals ? generals.logo : "/"}
                  alt={`${process.env.NEXT_PUBLIC_SITE_NAME}`}
                  title={process.env.NEXT_PUBLIC_SITE_NAME}
                  width={250}
                  height={65}
                  className="mx-3"
                  priority
                />
              </Link>
              {isMobile && (
                <button
                  onClick={navActive}
                  id="navBars"
                  aria-label="Menüyü aç/kapat"
                >
                  <HiBars3BottomRight size={40} className="m-3" />
                </button>
              )}
            </div>

            {(navStatus || !isMobile) && <NavLinks navActive={navActive} />}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
