import React from "react";
import Blog from "@/components/(front)/Blog/Blog";
import { metaBlog } from "@/meta";
import { getBlogs } from "@/utils/Blog/getBlogs";
import { BlogsTypes } from "@/Types";

export const metadata = metaBlog();

async function page() {
  const blogs: BlogsTypes[] = await getBlogs() || [];
  return <Blog blogs={blogs} />;
}

export default page;
