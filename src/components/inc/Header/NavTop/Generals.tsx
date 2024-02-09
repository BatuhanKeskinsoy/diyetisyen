"use client"
import React from "react";
import Link from "next/link";
import {
  IoLocationOutline,
  IoPhonePortraitOutline,
  IoMailOutline,
} from "react-icons/io5";

function NavTopGenerals({ phoneSlug, GeneralsData }: any) {
  return (
    <address className="font-open not-italic tracking-wide text-sm flex gap-x-4 h-full">
      <div className="flex items-center gap-x-1">
        <Link
          href={GeneralsData.addressUrl}
          title={GeneralsData.address}
          target="_blank"
          className="flex items-center gap-x-1 group"
        >
          <IoLocationOutline size={22} className="text-site " />
          <span className="group-hover:text-site transition-all">
            {GeneralsData.address}
          </span>
        </Link>
      </div>
      <div className="flex items-center gap-x-1">
        <Link
          href={`tel:${phoneSlug}`}
          title={GeneralsData.phone}
          className="flex items-center gap-x-1 group"
        >
          <IoPhonePortraitOutline size={22} className="text-site" />
          <span className="group-hover:text-site transition-all">
            {GeneralsData.phone}
          </span>
        </Link>
      </div>
      <div className="flex items-center gap-x-1">
        <Link
          href={`mailto:${GeneralsData.email}`}
          title={GeneralsData.email}
          className="flex items-center gap-x-1 group"
        >
          <IoMailOutline size={22} className="text-site" />
          <span className="group-hover:text-site transition-all">
            {GeneralsData.email}
          </span>
        </Link>
      </div>
    </address>
  );
}

export default NavTopGenerals;
