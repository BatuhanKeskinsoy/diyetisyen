import React from "react";
import { OnlineDiyetDetail } from "@/components/(front)/Detail/Detail";
import { metaOnlineDiyet } from "@/meta";
import { getGenerals } from "@/utils/getGenerals";
import { BlogsTypes, GeneralsTypes } from "@/Types";
import { getBlogs } from "@/utils/Blog/getBlogs";

export const metadata = metaOnlineDiyet();

async function page() {
  const generals: GeneralsTypes = await getGenerals();
  const blogs: BlogsTypes[] = await getBlogs() || [];
  return <OnlineDiyetDetail generals={generals} />;
}

export default page;
