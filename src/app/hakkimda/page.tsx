import React from "react";
import About from "@/components/About/About";
import { metaHakkimda } from "@/meta";
import { GeneralsTypes, SocialsTypes } from "@/Types";
import { getGenerals } from "@/utils/getGenerals";
import { getSocials } from "@/utils/getSocials";

export const metadata = metaHakkimda();

async function Hakkimda() {
  const socials: SocialsTypes[] = await getSocials() || [];
  const generals: GeneralsTypes = await getGenerals();
  return (
    <>
      <About socials={socials} generals={generals} />
    </>
  );
}

export default Hakkimda;
