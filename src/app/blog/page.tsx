import React from "react";
import Blog from "@/components/Blog/Blog";
import { metaBlog } from "@/meta";

export const metadata = metaBlog();

function page() {
  return <Blog />;
}

export default page;
