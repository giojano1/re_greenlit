"use client";

import { certifications } from "@/constants";
import Image from "next/image";
import React from "react";

const Certificate = () => {
  return (
    <div className="flex justify-between items-center mt-[46px]">
      {certifications.map((c, index) => {
        return (
          <div key={index}>
            <Image
              src={c.img}
              alt={c.title}
              width={0}
              height={0}
              sizes="100vw"
              className="h-full w-[200px]"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Certificate;
