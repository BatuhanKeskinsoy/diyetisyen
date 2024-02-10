"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsCaretDown, BsChevronRight } from "react-icons/bs";
import servicesData from "@/data/services.json";
import calculationsData from "@/data/calculations.json";

interface INavItemProps {
  name: string;
  url: string;
  isDropdown: boolean;
  navActive: any;
}

function NavItem({ name, url, isDropdown, navActive } : INavItemProps) {
  const [isActive, setIsActive] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsHover(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsHover(false);
    }
  };

  const handleClick = () => {
    if (isMobile) {
      setIsActive(!isActive);
    }
  };

  if (!isDropdown) {
    return (
      <Link
        href={url}
        title={name}
        onClick={navActive}
        className="flex items-center gap-x-2 hover:text-site transition-all lg:w-fit w-full py-2 lg:py-0 h-fit lg:h-full justify-between px-3 border-b border-gray-100 lg:border-none font-gemunu text-xl lg:text-lg xl:text-xl tracking-wider min-w-max"
      >
        {name}
      </Link>
    );
  } else {
    return (
      <div
        className="w-full h-fit lg:h-full group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <button
          type="button"
          className="flex items-center gap-x-2 hover:text-site transition-all lg:w-fit w-full py-2 lg:py-0 h-fit lg:h-full justify-between px-3 border-b border-gray-100 lg:border-none font-gemunu text-xl lg:text-lg xl:text-xl tracking-wider min-w-max"
        >
          {name}
          <BsCaretDown size={16} />
        </button>

        <div
          className={`lg:absolute h-fit lg:gap-y-0 gap-y-8 shadow-lg shadow-gray-100/50 rounded-b-lg bg-white gap-x-24 ${
            (isHover && !isMobile) || (isActive && isMobile)
              ? "flex lg:flex-row flex-col"
              : "hidden"
          }`}
        >
          {name === "Hizmetlerimiz" && (
            <ul className="flex flex-col text-gray-600 font-gemunu text-md tracking-wider min-w-fit">
              {servicesData.map((serviceItem : any, key : number) => (
                <li key={key}>
                  <Link
                    onClick={navActive}
                    href={`/hizmetlerimiz/${serviceItem.url}`}
                    title={serviceItem.title}
                    className="py-3 flex hover:text-site transition-all items-center border-t border-gray-200 px-4 gap-x-2"
                  >
                    <BsChevronRight />
                    {serviceItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {name === "Hesaplamalar" && (
            <ul className="flex flex-col text-gray-600 font-gemunu text-md tracking-wider min-w-fit">
              {calculationsData.map((calculateItem : any, key : number) => (
                <li key={key}>
                  <Link
                    onClick={navActive}
                    href={`/hesaplamalar/${calculateItem.url}`}
                    title={calculateItem.title}
                    className="py-3 flex hover:text-site transition-all items-center border-t border-gray-200 px-4 gap-x-2"
                  >
                    <BsChevronRight />
                    {calculateItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
}

export default NavItem;
