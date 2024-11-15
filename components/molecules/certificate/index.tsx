"use client";

import { certifications } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
const Certificate = () => {
  const [active, setActive] = useState<number | null>(null);
  return (
    <div className=" mt-[27px] pb-[27px] relative ">
      <div
        className={cn(
          `bg-black opacity-0 z-0 w-full h-full absolute transition-all duration-300`,
          active !== null && "opacity-50 z-20"
        )}
      ></div>
      <div className="flex justify-between items-center px-10  pt-5">
        {certifications.map((c, index) => {
          const isActive = active === c.id;
          return (
            <div
              key={index}
              className={cn(
                ` w-[250px] flex items-center  `,
                isActive ? "z-50" : "",
                isActive && active <= 2 ? "flex-row" : "flex-row-reverse"
              )}
            >
              <Image
                onMouseEnter={() => setActive(c.id)}
                onMouseLeave={() => setActive(null)}
                src={c.img}
                alt={c.title}
                width={0}
                height={0}
                sizes="100vw"
                priority
                className={cn(
                  "h-full w-full relative object-cover transition-all duration-300",
                  active !== null && !isActive && "blur-[10px]"
                )}
              />
              {isActive && (
                <div
                  className={cn(
                    `absolute w-full `,
                    isActive && active === 2 && "ml-[260px]  max-w-[45%]",
                    isActive && active === 1 && "ml-[260px]  max-w-[70%]",
                    isActive && active === 3 && "mr-[260px]  max-w-[45%]",
                    isActive && active === 4 && "mr-[260px]  max-w-[70%]"
                  )}
                >
                  <h3 className="text-2xl font-bold text-white">{c.title}</h3>

                  <p className="text-[20px] mt-6 text-white">{c.description}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Certificate;
