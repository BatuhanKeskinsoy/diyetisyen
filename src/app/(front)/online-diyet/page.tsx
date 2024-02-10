import React from "react";
import { OnlineDiyetDetail } from "@/components/(front)/Detail/Detail";
import { metaOnlineDiyet } from "@/meta";
import { getGenerals } from "@/utils/getGenerals";
import { GeneralsTypes } from "@/Types";

export const metadata = metaOnlineDiyet();

async function page() {
  const generals: GeneralsTypes = await getGenerals();
  return <OnlineDiyetDetail generals={generals} showAllUrl={"/blog"} />;
}

export default page;
