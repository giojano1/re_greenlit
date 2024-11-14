import { ArrowUp } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

const ServiceSliderCard = ({
  data,
}: {
  data: {
    id: number;
    title: string;
    description: string;
    link: string;
    img: StaticImageData;
  };
}) => {
  return (
    <div className="w-full h-[400px] rounded-[20px] relative p">
      <Image
        src={data.img}
        alt={data.title}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-full object-cover rounded-[20px]"
        priority
      />
      <div className="absolute bottom-[0px] left-[0px] p-[30px]">
        <h3 className="text-4xl font-bold max-w-[500px]">{data.title}</h3>
        <p className="text-[20px] my-3"> {data.description}</p>
        <div className="w-fit">
          <div className="flex items-center gap-2.5">
            <Link href={data.link} className="text-2xl">
              Read More
            </Link>
            <div className=" flex items-center justify-center text-black w-11 h-11 rounded-full border-[3px] border-[#26A522] bg-white group hover:bg-[#26A522] transition-colors">
              <ArrowUp size={24} className="rotate-45 group-hover:text-white" />
            </div>
          </div>
          <div className=" mt-3 w-[90%] h-0.5 bg-white" />
        </div>
      </div>
    </div>
  );
};

export default ServiceSliderCard;
