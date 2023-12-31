import React from "react";
import { SocialsItem } from "@/components/inc/Header/Items/SocialItem";

function NavTopSocials({ SocialsData }: any) {
  return (
    <ul id="socials" className="flex h-full">
      {SocialsData.map((data : any, key: number) => (
        <SocialsItem
          socialUrl={data.socialUrl}
          iconName={data.iconName}
          key={key}
          socialName={data.socialName}
        />
      ))}
    </ul>
  );
}

export default NavTopSocials;
