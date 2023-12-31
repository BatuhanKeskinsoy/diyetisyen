import React from "react";
import Link from "next/link";
import Image from "next/image";

interface OtherContentItemProps {
  title: string;
  url: string;
  image: string;
  description: string;
}

function OtherContentsItem({
  title,
  url,
  image,
  description,
}: OtherContentItemProps) {
  return (
    <li className="group border-b last:border-none py-3">
      <Link
        href={url}
        title={title}
        className="rounded-xl overflow-hidden w-full flex gap-x-3"
      >
        <div className="flex relative min-w-[6rem] w-[6rem] h-24 group-hover:min-w-[6.5rem] group-hover:w-[6.5rem] transition-all">
          <Image
            src={image}
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 100vw"
            alt={title}
            title={title}
            className="object-cover object-center transition-all"
          />
        </div>
        <div className="flex flex-col items-start justify-start flex-auto">
          <h4 className="my-1 text-lg tracking-wide font-gemunu line-clamp-1 font-semibold group-hover:text-site transition-all">
            {title}
          </h4>
          <p className="text-sm line-clamp-2 text-gray-600 transition-all">
            {description}
          </p>
        </div>
      </Link>
    </li>
  );
}

export default OtherContentsItem;
