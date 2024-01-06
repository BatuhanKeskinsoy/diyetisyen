"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

function AutoScrollTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default AutoScrollTop;
