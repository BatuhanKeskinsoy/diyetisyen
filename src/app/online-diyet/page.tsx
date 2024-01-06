import React from "react";
import { OnlineDiyetDetail } from "@/components/Detail/Detail";
import { metaOnlineDiyet } from "@/meta";

export const metadata = metaOnlineDiyet();

function page() {
  return <OnlineDiyetDetail showAllUrl={"/blog"} />;
}

export default page;
