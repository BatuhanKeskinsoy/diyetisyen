import React from "react";
import About from "@/components/About/About";
import { metaHakkimda } from "@/meta";

export const metadata = metaHakkimda();

function Hakkimda() {
  return (
    <>
      <About />
    </>
  );
}

export default Hakkimda;
