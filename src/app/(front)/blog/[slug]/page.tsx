import React from "react";
import blogsData from "@/data/blogs.json";
import { BlogDetail } from "@/components/(front)/Detail/Detail";
import { Metadata } from "next";
import { metaBlogDetay } from "@/meta";

type Props = {
  params: { slug: string };
};


export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;

  const blog: any = blogsData.find((blog) => blog.url === slug);

  return metaBlogDetay(blog, slug);
}

function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  let metaFilteredBlogs = null;

  if (slug) {
    metaFilteredBlogs = blogsData.find((blog) => blog.url === slug);

    if (!metaFilteredBlogs) {
      return {
        notFound: true,
      };
    }
  }

  const filteredBlogs = slug
    ? blogsData.find((blog) => blog.url === slug)
    : null;

  if (!filteredBlogs) {
    return null;
  }

  return (
    <BlogDetail
      title={filteredBlogs.title}
      image={filteredBlogs.image}
      contentText={filteredBlogs.contentText}
      description={filteredBlogs.description}
      tags={filteredBlogs.tags}
      url={filteredBlogs.url}
      date={filteredBlogs.date}
      isRecipe={filteredBlogs.isRecipe}
      showAllUrl={"/blog"}
    />
  );
}

export default Page;
