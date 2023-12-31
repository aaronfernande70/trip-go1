import Image from "next/image";
import React from "react";
import Title from "../../../Typography/Title";
import Chip from "../../common/Chip";

import placeholder from "../../../resources/images/placeholder.jpg";
import Link from "next/link";

export default function Tile({
  imageSrc,
  imageAlt,
  name,
  description,
  category,
}) {
  return (
    <div className="flex flex-col w-44 md:w-72 justify-around gap-5 py-4 border items-center bg-white shadow-sm p-3  rounded-md">
      <Link href="/trips/trip">
        <Image
          className="rounded-md mt-3"
          quality={90}
          src={placeholder}
          alt={imageAlt}
          height={200}
          width={250}
        />
      </Link>
      <div className="flex flex-col gap-2 px-4">
        <div className="tile-top-bar my-2">
          <div className="chips-container flex gap-2">
            {category.map((category) => {
              return <Chip key={category}>{category}</Chip>;
            })}
          </div>
        </div>
        <Link href="/trips/trip">
          <Title
            primitive={"h2"}
            className="text-base text-nowrap  font-semibold"
          >
            {name}
          </Title>
          <p className="font-normal text-xs text-ellipsis h-16 overflow-y-hidden">
            {description}
          </p>
        </Link>
      </div>
    </div>
  );
}
