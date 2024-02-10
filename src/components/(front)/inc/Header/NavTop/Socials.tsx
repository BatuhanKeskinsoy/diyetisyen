import React from "react";
import { SocialsItem } from "@/components/(front)/inc/Header/Items/SocialItem";
import { getSocials } from "@/utils/getSocials";
import { SocialsTypes } from "@/Types";

interface INavTopSocialsProps {
  socials: SocialsTypes[]
}

function NavTopSocials({ socials }: INavTopSocialsProps) {
  return (
    <>
      {socials && (
        <ul id="socials" className="flex h-full">
          {socials.map((social: SocialsTypes, key: number) => (
            <SocialsItem
              socialUrl={social.socialUrl}
              iconName={social.iconName}
              key={key}
              socialName={social.socialName}
            />
          ))}
        </ul>
      )}
    </>
  );
}

export default NavTopSocials;
