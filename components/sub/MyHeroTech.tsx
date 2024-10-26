"use client";
import images from "@/utils/images";
import Image from "next/image";
import React from "react";
import { ImageData } from "../../utils/images";

const MyHeroTech = () => {
  return (
    <div className="w-full px-6 mt-40">
      <div className="max-w-7xl mx-auto mt-12">
        <div className="flex flex-col justify-center items-center mb-8">
          <div className="flex flex-col space-y-2 mb-8 items-center justify-center  ">
            <h1 className="text-2xl text-white"> My Tech Stack</h1>
            <p className="text-xl text-gray-400">Technologies I&apos;ve been working with recently</p>
          </div>
          <div className="grid grid-cols-6 gap-6">
            {images.map((imge: ImageData) => (
              <Image
                key={imge.key}
                src={imge.src}
                width={imge.width}
                height={imge.height}
                alt={`Image ${imge.key}`}
                className="object-cover" // Ensures images cover their allocated space
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyHeroTech;
