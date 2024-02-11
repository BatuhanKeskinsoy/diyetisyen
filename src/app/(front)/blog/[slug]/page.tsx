import React from "react";
import { BlogDetail } from "@/components/(front)/Detail/Detail";
import { Metadata } from "next";
import { metaBlogDetay } from "@/meta";
import { notFound } from "next/navigation";
import { BlogsTypes, GeneralsTypes } from "@/Types";
import { getBlogs } from "@/utils/Blog/getBlogs";
import { getGenerals } from "@/utils/getGenerals";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blogs: BlogsTypes[] = (await getBlogs()) || [];
  const slug = params.slug;

  const blog: any = blogs.find((blog) => blog.url === slug);

  if (blog) {
    return metaBlogDetay(blog, slug);
  } else {
    notFound();
  }
}

async function Page({ params }: { params: { slug: string } }) {
  const generals: GeneralsTypes = await getGenerals();
  const blogs: BlogsTypes[] = (await getBlogs()) || [];
  const slug = params.slug;

  let metaFilteredBlogs = null;

  if (slug) {
    metaFilteredBlogs = blogs.find((blog) => blog.url === slug);

    if (!metaFilteredBlogs) {
      notFound();
    }
  }

  const filteredBlog = slug ? blogs.find((blog) => blog.url === slug) : null;

  if (!filteredBlog) {
    return null;
  }

  return (
    <BlogDetail blog={filteredBlog} generals={generals} />
  );
}

export default Page;
