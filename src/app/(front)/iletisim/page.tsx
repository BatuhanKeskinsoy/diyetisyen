import React from "react";
import Contact from "@/components/(front)/Contact/Contact";
import { metaIletisim } from "@/meta";
import { getSocials } from "@/utils/getSocials";
import { getGenerals } from "@/utils/getGenerals";
import { GeneralsTypes, SocialsTypes } from "@/Types";

export const metadata = metaIletisim();

async function Iletisim() {
  const socials: SocialsTypes[] = (await getSocials()) || [];
  const generals: GeneralsTypes = await getGenerals();
  return <Contact socials={socials} generals={generals} />;
}

export default Iletisim;
