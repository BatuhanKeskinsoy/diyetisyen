import React from "react";
import NavItem from "./Items/NavItem";
import NavLinksData from "@/data/navLinks.json";

function NavLinks({ navActive }: any) {
  return (
    <nav className="flex lg:h-full h-[calc(100vh-96px)] items-center lg:flex-row flex-col justify-start lg:w-fit w-full lg:relative absolute lg:top-0 top-full bg-white lg:shadow-none shadow-lg shadow-gray-100 transition-all lg:pt-0 pt-4">
      {NavLinksData.map((links: any, key: number) => (
        <NavItem
          key={key}
          name={links.name}
          url={links.url}
          isDropdown={links.isDropdown}
          navActive={navActive}
        />
      ))}
    </nav>
  );
}

export default NavLinks;
