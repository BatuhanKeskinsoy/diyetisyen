import React from "react";
import OtherContentsItem from "./Item";
import Link from "next/link";
import { AiOutlineDoubleRight } from "react-icons/ai";
import Tags from "../Tags/Tags";
import { BlogsTypes } from "@/Types";
import { getBlogs } from "@/utils/Blog/getBlogs";

interface IOtherContentsProps {
  title: string;
  tags: string[];
}

async function OtherContents({ title, tags }: IOtherContentsProps) {
  // BLOGS BURDA SERVER'DEN ÇEKİLDİ EĞER SORUN ÇIKARIRSA USEEFFECT İLE ÇEKCEM CLIENT SIDE DA
  const blogs: BlogsTypes[] = (await getBlogs()) || [];
  const filteredBlogs = blogs
    .filter((blogItem: any) => blogItem.title != title)
    .slice(0, 8)
    .sort((a, b) => {
      const dateA = new Date(a.created_at);
      const dateB = new Date(b.created_at);
      return dateB.getTime() - dateA.getTime();
    });

  return (
    <div className="gap-y-2 w-full flex flex-col overflow-hidden">
      {filteredBlogs.length > 0 ? (
        <>
          <span className="font-dancing tracking-wide text-3xl mt-12 mb-2">
            Bloglarımız
          </span>
          <ul className="w-full flex flex-col">
            {filteredBlogs.map((blogItem, key) => (
              <OtherContentsItem
                url={`/blog/${blogItem.url}`}
                image={blogItem.image}
                title={blogItem.title}
                description={blogItem.description}
                key={key}
              />
            ))}
          </ul>
        </>
      ) : null}
      <Link
        href={"/blog"}
        title="Tüm Bloglar"
        className="py-2 px-4 justify-between text-gray-600 w-full flex items-center hover:bg-site hover:text-white transition-all shadow-md shadow-gray-200 rounded-xl mb-2"
      >
        <span className="text-lg font-semibold">Tümünü Göster</span>
        <AiOutlineDoubleRight size={26} />
      </Link>

      <Tags tags={tags} />
    </div>
  );
}

export default OtherContents;
